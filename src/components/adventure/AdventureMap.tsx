import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { AdventureZone, AdventureState, AdventureNode } from '../../types';
import MapNode from './MapNode';
import { Star, ShieldAlert, Compass } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';

interface AdventureMapProps {
  zones: AdventureZone[];
  adventureState: AdventureState;
  onNodeClick: (node: AdventureNode, zone: AdventureZone) => void;
}

export default function AdventureMap({ zones, adventureState, onNodeClick }: AdventureMapProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, dir } = useLanguage();

  // Scroll to active node on mount
  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  // Calculate active zone and progression
  const activeZone = zones.find(z => !z.isLocked) || zones[0];
  const completedCount = activeZone.nodes.filter(node => 
    adventureState.completedNodes.includes(node.id)
  ).length;
  const totalCount = activeZone.nodes.length;
  const progressionPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div 
      className="relative min-h-[85vh] bg-gradient-to-b from-[#061811] via-[#05140e] to-[#030d09] overflow-hidden rounded-3xl border border-white/5 shadow-2xl"
      ref={scrollRef}
    >
      {/* Background stardust texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
      
      {/* ── LUMINOUS BREATHING ROOMS (Ambient Glowing Orbs) ── */}
      {/* Orb 1: Sacred Gold near active nodes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-amber-500/[0.015] blur-[100px] pointer-events-none" />
      {/* Orb 2: Emerald Calm at the start */}
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-emerald-500/[0.01] blur-[120px] pointer-events-none" />
      {/* Orb 3: Noble Crimson near the Boss guardian */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-600/[0.015] blur-[110px] pointer-events-none" />

      {/* Floating Progression Dashboard */}
      <div className="sticky top-4 z-40 w-full px-4 mb-6">
        <div className="max-w-md mx-auto bg-[#071912]/80 backdrop-blur-md border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between shadow-[0_8px_32px_rgba(3,13,9,0.5)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">{t('adventure.current_progress')}</p>
              <h4 className="text-white font-bold text-sm truncate max-w-[200px]">
                {t(`adventure.zones.${activeZone.id.replace('-', '')}.title`, activeZone.title)}
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.5 min-w-[90px]">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {completedCount} / {totalCount}
            </span>
            <div className="w-20 h-2 bg-emerald-950 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressionPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 flex flex-col items-center">
        {zones.map((zone, zoneIndex) => {
          const isZoneLocked = zone.isLocked;

          return (
            <div key={zone.id} className="w-full flex flex-col items-center relative mb-16">
              
              {/* Zone Beautiful Presentation Header */}
              <div className="sticky top-20 z-30 w-full px-4 mb-14">
                <div className="max-w-md mx-auto bg-[#0a1e16]/60 backdrop-blur-lg border border-white/5 rounded-2xl p-5 text-center shadow-lg">
                  <span className="inline-block px-3 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                    {t('adventure.zone')} {zone.order}
                  </span>
                  <h3 className="text-white font-display text-xl font-bold mb-1">
                    {t(`adventure.zones.${zone.id.replace('-', '')}.title`, zone.title)}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed max-w-sm mx-auto">
                    {t(`adventure.zones.${zone.id.replace('-', '')}.description`, zone.description)}
                  </p>
                </div>
              </div>

              {/* Nodes Path Wrapper */}
              <div className="relative flex flex-col items-center w-full py-6">
                
                {/* ── DUAL GLOWING CONNECTING TRACK ── */}
                {/* Background track (Locked/Inactive) */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-[#10291f] rounded-full -z-10" />
                
                {/* Foreground glowing track (Completed) */}
                <div 
                  className="absolute top-0 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 rounded-full -z-10 shadow-[0_0_10px_rgba(52,211,153,0.25)] transition-all duration-700" 
                  style={{
                    height: `${Math.max(10, progressionPercent)}%`,
                    maxHeight: '100%'
                  }}
                />

                {/* Node list */}
                {zone.nodes.map((node, index) => {
                  const isCompleted = adventureState.completedNodes.includes(node.id);
                  const isActive = adventureState.currentNodeId === node.id;
                  const isLocked = isZoneLocked || (!isCompleted && !isActive);

                  return (
                    <div key={node.id} className="relative w-full flex justify-center py-5" data-active={isActive}>
                      <MapNode 
                        node={node}
                        index={index}
                        isActive={isActive}
                        isCompleted={isCompleted}
                        isLocked={isLocked}
                        onClick={() => onNodeClick(node, zone)}
                      />
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}


