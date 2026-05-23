import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { AdventureZone, AdventureState, AdventureNode } from '../../types';
import MapNode from './MapNode';
import { Star, Compass } from 'lucide-react';
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
      className="relative h-[100dvh] overflow-y-auto overflow-x-hidden"
      ref={scrollRef}
    >
      {/* Background stardust texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.06] pointer-events-none" />
      
      {/* ── LUMINOUS BREATHING ROOMS (Ambient Glowing Orbs) ── */}
      {/* Orb 1: Sacred Gold near active nodes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-amber-500/[0.012] blur-[92px] pointer-events-none" />
      {/* Orb 2: Emerald Calm at the start */}
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-emerald-500/[0.014] blur-[96px] pointer-events-none" />
      {/* Orb 3: Noble Crimson near the Boss guardian */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-orange-600/[0.01] blur-[90px] pointer-events-none" />

      {/* Floating Progression Dashboard */}
      <div
        className="sticky z-40 w-full px-4 mb-4"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 62px)' }}
      >
        <div className="max-w-md mx-auto bg-[#071912]/42 backdrop-blur-[4px] border border-emerald-500/10 rounded-xl p-2.5 flex items-center justify-between shadow-[0_6px_18px_rgba(3,13,9,0.22)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/14 to-teal-500/14 flex items-center justify-center">
              <Compass className="w-4 h-4 text-emerald-300/85 animate-pulse" />
            </div>
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-wider text-emerald-300/70">{t('adventure.current_progress')}</p>
              <h4 className="text-white/88 font-bold text-xs truncate max-w-[170px]">
                {t(`adventure.zones.${activeZone.id.replace('-', '')}.title`, activeZone.title)}
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 min-w-[84px]">
            <span className="text-[11px] font-bold text-amber-300/85 flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-300/85" />
              {completedCount} / {totalCount}
            </span>
            <div className="w-[72px] h-1.5 bg-emerald-950/80 rounded-full overflow-hidden">
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

      <div className="relative pt-6 pb-24 flex flex-col items-center">
        {zones.map((zone) => {
          const isZoneLocked = zone.isLocked;

          return (
            <div key={zone.id} className="w-full flex flex-col items-center relative mb-12">
              
              {/* Zone Beautiful Presentation Header */}
              <div
                className="sticky z-30 w-full px-4 mb-10"
                style={{ top: 'calc(env(safe-area-inset-top, 0px) + 132px)' }}
              >
                <div className="max-w-md mx-auto bg-[#0a1e16]/28 backdrop-blur-[3px] border border-white/5 rounded-xl p-3 text-center shadow-md">
                  <span className="inline-block px-2.5 py-0.5 bg-emerald-500/8 border border-emerald-500/12 rounded-full text-[9px] font-bold text-emerald-300/85 uppercase tracking-widest mb-1.5">
                    {t('adventure.zone')} {zone.order}
                  </span>
                  <h3 className="text-white/88 font-display text-base font-bold mb-0.5">
                    {t(`adventure.zones.${zone.id.replace('-', '')}.title`, zone.title)}
                  </h3>
                  <p className="text-white/45 text-[11px] leading-relaxed max-w-sm mx-auto">
                    {t(`adventure.zones.${zone.id.replace('-', '')}.description`, zone.description)}
                  </p>
                </div>
              </div>

              {/* Nodes Path Wrapper */}
              <div className="relative flex flex-col items-center w-full py-6">
                {/* Organic travel path */}
                <div className="absolute inset-0 -z-10">
                  <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path
                      d="M50 0 C34 12 66 24 50 36 C34 48 66 60 50 72 C34 84 66 92 50 100"
                      fill="none"
                      stroke="rgba(30,59,46,0.9)"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50 0 C34 12 66 24 50 36 C34 48 66 60 50 72 C34 84 66 92 50 100"
                      fill="none"
                      stroke={`url(#adventurePathGlow-${zone.id})`}
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeDasharray="200"
                      strokeDashoffset={200 - (progressionPercent / 100) * 200}
                      className="transition-all duration-700"
                    />
                    <defs>
                      <linearGradient id={`adventurePathGlow-${zone.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
                        <stop offset="55%" stopColor="rgba(52,211,153,0.95)" />
                        <stop offset="100%" stopColor="rgba(13,148,136,0.45)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Node list */}
                {zone.nodes.map((node, index) => {
                  const isCompleted = adventureState.completedNodes.includes(node.id);
                  const isActive = adventureState.currentNodeId === node.id;
                  const isLocked = isZoneLocked || (!isCompleted && !isActive);

                  return (
                    <div key={node.id} className="relative w-full flex justify-center py-3.5" data-active={isActive}>
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
