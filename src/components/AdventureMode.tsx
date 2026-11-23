import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { AdventureState, AdventureNode, AdventureZone } from '../types';
import { ADVENTURE_ZONES } from '../adventureData';
import AdventureMap from './adventure/AdventureMap';
import MissionModal from './adventure/MissionModal';
import StoryDialogue from './adventure/StoryDialogue';
import AdventureSession from './adventure/AdventureSession';
import { Menu, User } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface AdventureModeProps {
  adventureState: AdventureState;
  onUpdateState: (newState: AdventureState) => void;
  onRewardUnlocked: (xp: number, title?: string) => void;
  onOpenProfile?: () => void;
  onExitAdventure?: () => void;
  onSessionActiveChange?: (isActive: boolean) => void;
}

export function calculateAdventureNodeRewards(
  isAlreadyCompleted: boolean,
  nodeType: string,
  rawXpEarned: number
): { starsDelta: number; effectiveXp: number } {
  const starsDelta = isAlreadyCompleted ? 0 : (nodeType === 'boss' ? 3 : 1);
  const effectiveXp = isAlreadyCompleted ? Math.min(50, Math.round(rawXpEarned * 0.1)) : rawXpEarned;
  return { starsDelta, effectiveXp };
}

export default function AdventureMode({
  adventureState,
  onUpdateState,
  onRewardUnlocked,
  onOpenProfile,
  onExitAdventure,
  onSessionActiveChange,
}: AdventureModeProps) {
  const [selectedNode, setSelectedNode] = useState<AdventureNode | null>(null);
  const [selectedZone, setSelectedZone] = useState<AdventureZone | null>(null);
  const { t } = useLanguage();

  const [view, setView] = useState<'map' | 'modal' | 'pre-dialogue' | 'session' | 'post-dialogue'>('map');

  useEffect(() => {
    const isImmersive = view === 'session' || view === 'pre-dialogue' || view === 'post-dialogue';
    onSessionActiveChange?.(isImmersive);
    return () => {
      onSessionActiveChange?.(false);
    };
  }, [view, onSessionActiveChange]);

  const handleNodeClick = (node: AdventureNode, zone: AdventureZone) => {
    setSelectedNode(node);
    setSelectedZone(zone);
    setView('modal');
  };

  const handleStartMission = () => {
    if (selectedNode?.preDialogue) {
      setView('pre-dialogue');
    } else if (selectedNode?.type === 'story') {
      setView('pre-dialogue'); // Story nodes are just preDialogue basically
    } else {
      setView('session');
    }
  };

  const handlePreDialogueComplete = () => {
    if (selectedNode?.type === 'story') {
      handleNodeComplete(true, selectedNode.xpReward);
    } else {
      setView('session');
    }
  };

  const handleSessionComplete = (success: boolean, xpEarned: number) => {
    if (success && selectedNode?.postDialogue) {
      setView('post-dialogue');
    } else {
      handleNodeComplete(success, xpEarned);
    }
  };

  const handlePostDialogueComplete = () => {
    handleNodeComplete(true, selectedNode?.xpReward || 0);
  };

  const handleNodeComplete = (success: boolean, xpEarned: number) => {
    if (success && selectedNode) {
      const isAlreadyCompleted = adventureState.completedNodes.includes(selectedNode.id);
      let nextNodeId = adventureState.currentNodeId;
      let unlockedZones = adventureState.unlockedZones;

      if (!isAlreadyCompleted && adventureState.currentNodeId === selectedNode.id) {
        // Find next node in the current zone and advance progress.
        const currentIndex = selectedZone!.nodes.findIndex(n => n.id === selectedNode.id);
        if (currentIndex < selectedZone!.nodes.length - 1) {
          nextNodeId = selectedZone!.nodes[currentIndex + 1].id;
        } else {
          // End of the current zone. Unlock the next zone and move the player to its first node.
          const currentZoneIndex = ADVENTURE_ZONES.findIndex(z => z.id === selectedZone!.id);
          const nextZone = ADVENTURE_ZONES[currentZoneIndex + 1];
          if (nextZone) {
            if (!unlockedZones.includes(nextZone.id)) {
              unlockedZones = [...unlockedZones, nextZone.id];
            }
            nextNodeId = nextZone.nodes[0]?.id ?? null;
          } else {
            nextNodeId = null;
          }
        }
      }

      const { starsDelta, effectiveXp } = calculateAdventureNodeRewards(
        isAlreadyCompleted,
        selectedNode.type,
        xpEarned
      );

      onUpdateState({
        ...adventureState,
        unlockedZones,
        completedNodes: isAlreadyCompleted ? adventureState.completedNodes : [...adventureState.completedNodes, selectedNode.id],
        currentNodeId: nextNodeId,
        starsEarned: adventureState.starsEarned + starsDelta,
      });

      if (effectiveXp > 0) {
        onRewardUnlocked(
          effectiveXp,
          !isAlreadyCompleted && selectedNode.emotionalReward?.type === 'title' ? selectedNode.emotionalReward.name : undefined
        );
      }
    }
    
    // Return to map
    setSelectedNode(null);
    setSelectedZone(null);
    setView('map');
  };

  return (
    <div className="w-full relative">
      {/* MAP VIEW */}
      <AdventureMap 
        zones={ADVENTURE_ZONES} 
        adventureState={adventureState}
        onNodeClick={handleNodeClick}
      />

      {/* MODAL VIEW */}
      <MissionModal 
        node={selectedNode}
        isOpen={view === 'modal'}
        onClose={() => setView('map')}
        onStart={handleStartMission}
      />

      {/* DIALOGUES & SESSION */}
      <AnimatePresence>
        {view === 'pre-dialogue' && selectedNode?.preDialogue && (
          <StoryDialogue 
            dialogues={selectedNode.preDialogue} 
            onComplete={handlePreDialogueComplete} 
            isCheckpoint={selectedNode.type === 'checkpoint'}
            nodeId={selectedNode.id}
            type="pre"
          />
        )}

        {view === 'session' && selectedNode && (
          <AdventureSession 
            node={selectedNode}
            onComplete={handleSessionComplete}
            onClose={() => setView('map')}
          />
        )}

        {view === 'post-dialogue' && selectedNode?.postDialogue && (
          <StoryDialogue 
            dialogues={selectedNode.postDialogue} 
            onComplete={handlePostDialogueComplete} 
            isCheckpoint={selectedNode.type === 'checkpoint'}
            nodeId={selectedNode.id}
            type="post"
          />
        )}
      </AnimatePresence>

    </div>
  );
}
