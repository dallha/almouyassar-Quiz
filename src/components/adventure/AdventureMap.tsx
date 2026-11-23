import { useRef, useEffect } from 'react';
import { AdventureZone, AdventureState, AdventureNode } from '../../types';
import { useLanguage } from '../../LanguageContext';
import { playSelectSound } from '../SoundEngine';

interface AdventureMapProps {
  zones: AdventureZone[];
  adventureState: AdventureState;
  onNodeClick: (node: AdventureNode, zone: AdventureZone) => void;
}

export default function AdventureMap({ zones, adventureState, onNodeClick }: AdventureMapProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.querySelector('[data-active="true"]');
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  const getOffsetClass = (index: number, isBoss: boolean) => {
    if (isBoss) return '';
    const offsets = ['-translate-x-12', 'translate-x-14', '-translate-x-10', 'translate-x-12'];
    return offsets[index % offsets.length];
  };

  return (
    <div ref={scrollRef} className="flex flex-col w-full pb-12 select-none overflow-hidden relative max-w-2xl mx-auto">
      {zones.map((zone) => {
        const isZoneUnlocked = adventureState.unlockedZones.includes(zone.id) || !zone.isLocked;
        const completedCount = zone.nodes.filter((n) => adventureState.completedNodes.includes(n.id)).length;
        const totalCount = zone.nodes.length;
        const progressionPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        const zoneTitle = t(`adventure.zones.${zone.id.replace('-', '')}.title`, zone.title);
        const zoneDesc = t(`adventure.zones.${zone.id.replace('-', '')}.description`, zone.description);

        if (!isZoneUnlocked) {
          return (
            <div key={zone.id} className="relative mt-6">
              <div className="w-full rounded-2xl bg-gradient-to-b from-surface-container-high/60 via-surface-container-high to-surface-container p-space-lg shadow-sm text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px]" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest text-outline flex items-center justify-center shadow-inner mb-2">
                    <span className="material-symbols-outlined text-[24px]">key</span>
                  </div>
                  <span className="text-label-caps text-primary/70 tracking-widest uppercase">
                    {t('common.adventure_zone_locked_badge').replace('{order}', String(zone.order))}
                  </span>
                  <h3 className="text-headline-sm text-on-surface-variant mt-1">{zoneTitle}</h3>
                  <p className="text-body-sm text-outline mt-1 max-w-[280px]">
                    {t('common.adventure_zone_locked_desc')}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        const totalZoneXp = zone.nodes.reduce((sum, n) => sum + n.xpReward, 0);

        return (
          <div key={zone.id} className="flex flex-col w-full mb-10">
            {/* Zone Header Hero Card */}
            <div className="pt-1">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-container via-primary to-primary-container text-on-primary p-space-lg shadow-xl shadow-primary/10">
                <div className="absolute -end-6 -bottom-6 w-36 h-36 opacity-10 pointer-events-none">
                  <svg className="w-full h-full fill-current text-secondary-fixed" viewBox="0 0 100 100">
                    <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
                    <polygon fill="none" points="50,15 60,40 85,50 60,60 50,85 40,60 15,50 40,40" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex items-center justify-between gap-2 mb-space-xs relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-label-caps text-secondary-fixed tracking-wider uppercase">
                    <span className="material-symbols-outlined text-[14px]">stars</span>
                    {t('adventure.zone')} {zone.order}
                  </span>
                  <div className="flex items-center gap-1 bg-surface-container-lowest/15 px-2.5 py-1 rounded-full text-secondary-fixed">
                    <span className="material-symbols-outlined text-[15px]">star</span>
                    <span className="text-label-sm font-bold text-on-primary">
                      {completedCount} / {totalCount}
                    </span>
                  </div>
                </div>

                <h2 className="text-headline-sm text-on-primary tracking-tight mt-1 relative z-10">
                  {zoneTitle}
                </h2>
                <p className="text-body-sm text-primary-fixed-dim mt-1 max-w-md relative z-10">
                  {zoneDesc}
                </p>

                <div className="mt-space-md flex items-center gap-3 relative z-10">
                  <div className="flex-1 h-3 rounded-full bg-primary/60 p-0.5 overflow-hidden shadow-inner">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary-fixed-dim to-secondary-container transition-all duration-700"
                      style={{ width: `${progressionPercent}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-0.5 text-secondary-fixed">
                    {[1, 2, 3].map((starIdx) => (
                      <span
                        key={starIdx}
                        className={`material-symbols-outlined text-[16px] ${
                          progressionPercent >= starIdx * 33
                            ? 'text-secondary-fixed'
                            : 'text-surface-container-highest/40'
                        }`}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* S-Curve Learning Adventure Track */}
            <div className="relative w-full py-8 px-4 flex flex-col items-center">
              <svg
                className="absolute top-6 inset-x-0 w-full h-full pointer-events-none z-0"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 360 580"
              >
                <path
                  d="M 180,45 C 90,85 70,165 180,215 C 290,265 290,345 180,395 C 90,440 90,490 180,535"
                  stroke="#98d2c4"
                  strokeLinecap="round"
                  strokeOpacity="0.25"
                  strokeWidth="8"
                />
                <path
                  d="M 180,45 C 90,85 70,165 180,215 C 290,265 290,345 180,395 C 90,440 90,490 180,535"
                  stroke="#0d4d43"
                  strokeDasharray="8 10"
                  strokeLinecap="round"
                  strokeOpacity="0.45"
                  strokeWidth="4"
                />
              </svg>

              {zone.nodes.map((node, index) => {
                const isCompleted = adventureState.completedNodes.includes(node.id);
                const isActive = adventureState.currentNodeId === node.id;
                const prevNode = index > 0 ? zone.nodes[index - 1] : null;
                const isPrevCompleted = prevNode ? adventureState.completedNodes.includes(prevNode.id) : true;
                const isUnlocked = isCompleted || isActive || isPrevCompleted;
                const isBoss = node.type === 'boss';
                const nodeTitle = t(`adventure.nodes.${node.id.replace(/-/g, '')}.title`, node.title);
                const offsetCls = getOffsetClass(index, isBoss);

                if (isBoss) {
                  return (
                    <div
                      key={node.id}
                      data-active={isActive ? 'true' : undefined}
                      className="relative z-20 flex flex-col items-center mt-2 mb-4"
                    >
                      <div className="mb-2 px-3 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px] text-secondary">workspace_premium</span>
                        <span className="text-label-caps font-black text-secondary tracking-widest uppercase">
                          {t('common.adventure_guardian_trial')}
                        </span>
                      </div>

                      <button
                        type="button"
                        disabled={!isUnlocked}
                        onClick={() => {
                          if (!isUnlocked) return;
                          playSelectSound();
                          onNodeClick(node, zone);
                        }}
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center transition-all ${
                          isCompleted
                            ? 'bg-tertiary-container text-tertiary-fixed shadow-[0_6px_0_0_#003623] cursor-pointer active:translate-y-1'
                            : isUnlocked
                              ? 'bg-gradient-to-b from-secondary-container to-secondary-fixed text-on-secondary-fixed shadow-[0_6px_0_0_#775a03] cursor-pointer active:translate-y-1'
                              : 'bg-gradient-to-b from-surface-container-high to-surface-variant text-outline shadow-[0_6px_0_0_#dcdad4] cursor-not-allowed'
                        }`}
                      >
                        {!isUnlocked && (
                          <div className="absolute -top-2 -end-1 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-tertiary-fixed shadow-md">
                            <span className="material-symbols-outlined text-[14px]">lock</span>
                          </div>
                        )}
                        <span className="material-symbols-outlined text-[42px]">redeem</span>
                      </button>

                      <div className="mt-2.5 px-3 py-1 bg-surface-container text-on-surface-variant rounded-full shadow-sm">
                        <span className="text-label-sm font-semibold">{nodeTitle}</span>
                      </div>
                    </div>
                  );
                }

                if (isActive) {
                  return (
                    <div
                      key={node.id}
                      data-active="true"
                      className={`relative z-20 w-full flex flex-col items-center mb-12 ${offsetCls}`}
                    >
                      <div className="relative mb-2 px-3 py-1.5 rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 flex items-center gap-1.5 animate-bounce">
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">bolt</span>
                        <span className="text-label-caps tracking-wider text-secondary-fixed font-black uppercase">
                          {t('common.adventure_start_bubble')}
                        </span>
                        <div className="absolute -bottom-1 start-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
                      </div>

                      <div className="relative flex items-center justify-center">
                        <div className="absolute -inset-3 rounded-full bg-secondary-container/40 animate-ping opacity-60" />
                        <div
                          className="absolute -inset-2 rounded-full border-2 border-dashed border-secondary-fixed animate-spin"
                          style={{ animationDuration: '14s' }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            playSelectSound();
                            onNodeClick(node, zone);
                          }}
                          className="relative w-20 h-20 rounded-full bg-gradient-to-b from-secondary-container to-secondary-fixed text-on-secondary-fixed flex flex-col items-center justify-center shadow-[0_6px_0_0_#775a03] active:translate-y-1.5 active:shadow-[0_1px_0_0_#775a03] transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[30px] text-on-secondary-fixed leading-none">
                            water_drop
                          </span>
                          <span className="text-[9px] tracking-tight font-black uppercase text-on-secondary-fixed mt-0.5">
                            +{node.xpReward} XP
                          </span>
                        </button>
                      </div>

                      <div className="mt-3 px-3.5 py-1.5 bg-primary-container text-on-primary rounded-full shadow-[0_3px_0_0_#00201b] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                        <span className="text-label-sm font-bold text-on-primary">{nodeTitle}</span>
                      </div>
                    </div>
                  );
                }

                if (isCompleted) {
                  return (
                    <div
                      key={node.id}
                      className={`relative z-10 w-full flex flex-col items-center mb-10 ${offsetCls}`}
                    >
                      <div className="flex items-center gap-1 mb-1.5">
                        <span className="material-symbols-outlined text-[14px] text-secondary">star</span>
                        <span className="material-symbols-outlined text-[16px] text-secondary">star</span>
                        <span className="material-symbols-outlined text-[14px] text-secondary">star</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          playSelectSound();
                          onNodeClick(node, zone);
                        }}
                        className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center shadow-[0_5px_0_0_#003623] active:translate-y-1 active:shadow-[0_1px_0_0_#003623] transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">check_circle</span>
                      </button>

                      <div className="mt-2.5 px-3 py-1 bg-surface-container-lowest text-on-surface rounded-full shadow-[0_2px_0_0_#eae8e2] flex items-center gap-1">
                        <span className="text-label-sm font-bold text-primary">{nodeTitle}</span>
                        <span className="text-[10px] text-secondary font-black bg-secondary-fixed/30 px-1.5 rounded-full">
                          100%
                        </span>
                      </div>
                    </div>
                  );
                }

                // Locked / Upcoming node
                return (
                  <div
                    key={node.id}
                    className={`relative z-10 w-full flex flex-col items-center mb-11 ${offsetCls} ${
                      isUnlocked ? '' : 'opacity-70'
                    }`}
                  >
                    <button
                      type="button"
                      disabled={!isUnlocked}
                      onClick={() => {
                        if (!isUnlocked) return;
                        playSelectSound();
                        onNodeClick(node, zone);
                      }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                        isUnlocked
                          ? 'bg-surface-container-lowest text-primary shadow-[0_4px_0_0_#dcdad4] cursor-pointer active:translate-y-0.5'
                          : 'bg-surface-container-high text-outline shadow-[0_4px_0_0_#dcdad4] cursor-not-allowed'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {isUnlocked ? 'play_arrow' : 'lock'}
                      </span>
                    </button>
                    <div className="mt-2 px-3 py-1 bg-surface-container text-on-surface-variant rounded-full shadow-sm">
                      <span className="text-label-sm">{nodeTitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* End of Zone Reward Sheet */}
            <div className="mt-2">
              <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md shadow-primary/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/40 flex items-center justify-center text-secondary shadow-[0_2px_0_0_#fdd579]">
                    <span className="material-symbols-outlined text-[26px]">military_tech</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label-caps text-secondary uppercase font-extrabold tracking-wider">
                      {t('common.adventure_zone_reward_label')}
                    </span>
                    <span className="text-title-md text-on-surface">
                      {t('common.adventure_zone_reward_title').replace('{xp}', String(totalZoneXp))}
                    </span>
                    <span className="text-body-sm text-on-surface-variant">
                      {t('common.adventure_zone_reward_sub')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
