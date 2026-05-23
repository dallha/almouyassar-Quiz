import { useState } from 'react';
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
}

export default function AdventureMode({ adventureState, onUpdateState, onRewardUnlocked, onOpenProfile, onExitAdventure }: AdventureModeProps) {
  const [selectedNode, setSelectedNode] = useState<AdventureNode | null>(null);
  const [selectedZone, setSelectedZone] = useState<AdventureZone | null>(null);
  const { t } = useLanguage();

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

  const activeZone = ADVENTURE_ZONES.find(z => !z.isLocked) || ADVENTURE_ZONES[0];
  const completedCount = activeZone.nodes.filter(node => adventureState.completedNodes.includes(node.id)).length;
  const totalCount = activeZone.nodes.length;

  return (
    <div className="w-full relative h-[100dvh] overflow-hidden bg-[#04110b]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(16,185,129,0.14),transparent_52%),radial-gradient(circle_at_84%_22%,rgba(180,83,9,0.08),transparent_45%),linear-gradient(180deg,#061811_0%,#04110b_52%,#030c08_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      {/* Adventure-only top HUD (safe-area aware) */}
      <div
        className="absolute inset-x-0 top-0 z-50 px-3 pb-2"
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="mx-auto flex h-11 max-w-lg items-center justify-between rounded-xl border border-white/5 bg-gradient-to-b from-black/22 to-black/10 px-2.5 backdrop-blur-[4px]">
          <button
            onClick={onExitAdventure}
            aria-label={t('common.back', 'Retour')}
            className="flex h-8 w-8 items-center justify-center text-white/65 transition hover:text-white/90"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>

          <div className="text-center">
            <p className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-300/70">{t('adventure.current_progress')}</p>
            <p className="text-[11px] font-bold text-white/75">{completedCount}/{totalCount}</p>
          </div>

          <button
            onClick={onOpenProfile}
            aria-label={t('common.user_profile', 'Profil utilisateur')}
            className="flex h-8 w-8 items-center justify-center text-white/65 transition hover:text-white/90"
          >
            <User className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>

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
