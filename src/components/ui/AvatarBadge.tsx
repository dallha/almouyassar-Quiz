import React from 'react';

export interface AvatarPreset {
  id: string;
  emoji: string;
  labelKey: string;
  bgGradient: string;
}

export const AVATAR_PRESETS: AvatarPreset[] = [
  { id: 'mosque', emoji: '🕌', labelKey: 'common.avatar_mosque', bgGradient: 'from-emerald-700 to-teal-900' },
  { id: 'falcon', emoji: '🦅', labelKey: 'common.avatar_falcon', bgGradient: 'from-amber-600 to-yellow-800' },
  { id: 'star', emoji: '⭐', labelKey: 'common.avatar_star', bgGradient: 'from-amber-500 to-yellow-600' },
  { id: 'seeker_m', emoji: '👳', labelKey: 'common.avatar_seeker_m', bgGradient: 'from-teal-700 to-cyan-900' },
  { id: 'seeker_f', emoji: '🧕', labelKey: 'common.avatar_seeker_f', bgGradient: 'from-emerald-600 to-green-800' },
  { id: 'caravan', emoji: '🐪', labelKey: 'common.avatar_caravan', bgGradient: 'from-yellow-700 to-amber-900' },
  { id: 'quran', emoji: '📖', labelKey: 'common.avatar_quran', bgGradient: 'from-emerald-800 to-teal-950' },
  { id: 'crescent', emoji: '🌙', labelKey: 'common.avatar_crescent', bgGradient: 'from-cyan-800 to-blue-950' },
];

export function getAvatarEmoji(avatarId?: string | null): string {
  if (!avatarId) return '🕌';
  const match = AVATAR_PRESETS.find((p) => p.id === avatarId);
  return match ? match.emoji : '🕌';
}

interface AvatarBadgeProps {
  avatar?: string | null;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function AvatarBadge({ avatar, className = '', size = 'md' }: AvatarBadgeProps) {
  const isImage = typeof avatar === 'string' && (avatar.startsWith('http://') || avatar.startsWith('https://') || avatar.startsWith('data:image'));
  const preset = AVATAR_PRESETS.find((p) => p.id === avatar);

  const sizeClasses = {
    sm: 'w-7 h-7 text-[13px]',
    md: 'w-9 h-9 text-[18px]',
    lg: 'w-14 h-14 text-[26px]',
    xl: 'w-20 h-20 text-[36px]',
  }[size];

  if (isImage) {
    return (
      <div className={`relative rounded-full overflow-hidden shrink-0 border-2 border-surface shadow-sm ${sizeClasses} ${className}`}>
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to emoji if image fails to load
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    );
  }

  const bg = preset?.bgGradient || 'from-emerald-700 to-teal-900';
  const emoji = preset?.emoji || '🕌';

  return (
    <div
      className={`relative rounded-full bg-gradient-to-br ${bg} text-white flex items-center justify-center shrink-0 border border-white/20 shadow-sm select-none ${sizeClasses} ${className}`}
    >
      <span>{emoji}</span>
    </div>
  );
}
