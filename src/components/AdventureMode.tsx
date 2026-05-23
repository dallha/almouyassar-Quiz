import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AdventureState, AdventureNode, AdventureZone } from '../types';
import { ADVENTURE_ZONES } from '../adventureData';
import AdventureMap from './adventure/AdventureMap';
import MissionModal from './adventure/MissionModal';
import StoryDialogue from './adventure/StoryDialogue';
import AdventureSession from './adventure/AdventureSession';

interface AdventureModeProps {
  adventureState: AdventureState;
  onUpdateState: (newState: AdventureState) => void;
  onRewardUnlocked: (xp: number, title?: string) => void;
}

export default function AdventureMode({ adventureState, onUpdateState, onRewardUnlocked }: AdventureModeProps) {
  const [selectedNode, setSelectedNode] = useState<AdventureNode | null>(null);
  const [selectedZone, setSelectedZone] = useState<AdventureZone | null>(null);
  
  const [view, setView] = useState<'map' | 'modal' | 'pre-dialogue' | 'session' | 'post-dialogue'>('map');

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
      if (!isAlreadyCompleted && adventureState.currentNodeId === selectedNode.id) {
        // Find next node in zone
        const currentIndex = selectedZone!.nodes.findIndex(n => n.id === selectedNode.id);
        if (currentIndex < selectedZone!.nodes.length - 1) {
          nextNodeId = selectedZone!.nodes[currentIndex + 1].id;
        } else {
          // Zone finished! In real app, unlock next zone
          nextNodeId = null; // Wait for next zone update
        }
      }

      onUpdateState({
        ...adventureState,
        completedNodes: isAlreadyCompleted ? adventureState.completedNodes : [...adventureState.completedNodes, selectedNode.id],
        currentNodeId: nextNodeId,
        starsEarned: adventureState.starsEarned + (selectedNode.type === 'boss' ? 3 : 1),
      });

      onRewardUnlocked(xpEarned, selectedNode.emotionalReward?.type === 'title' ? selectedNode.emotionalReward.name : undefined);
    }
    
    // Return to map
    setSelectedNode(null);
    setSelectedZone(null);
    setView('map');
  };

  return (
    <div className="w-full relative min-h-screen bg-[#05140e]">
      
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
          />
        )}
      </AnimatePresence>

    </div>
  );
}
