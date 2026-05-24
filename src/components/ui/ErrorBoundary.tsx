/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { playSelectSound } from '../SoundEngine';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error caught by Al-Mouyassar ErrorBoundary:", error, errorInfo);
  }

  private handleRetry = () => {
    playSelectSound();
    const props = (this as any).props;
    if (props && props.onReset) {
      props.onReset();
    }
    (this as any).setState({ hasError: false, error: null });
  };

  public render() {
    const state = (this as any).state;
    const props = (this as any).props;

    if (state && state.hasError) {
      const isRtl = document.documentElement.dir === 'rtl';
      const lang = document.documentElement.lang || 'fr';

      // Localized offline/error strings
      const title = props.fallbackTitle || (
        lang === 'ar' 
          ? "تنبيه بسيط يا بني الحبيب" 
          : lang === 'wo' 
            ? "Macha'Allah sa waay !" 
            : "Macha'Allah !"
      );

      const subtitle = props.fallbackSubtitle || (
        lang === 'ar'
          ? "حدث شيء غير متوقع أثناء تشغيل هذا الرkn. دعنا نحاول مرة أخرى بلطف."
          : lang === 'wo'
            ? "Am na lu juum ci biir waxtaan bi. Nan faral di try waat ci anam bou neex."
          : "Une petite erreur technique est survenue dans cette rubrique. Relançons-la avec douceur."
      );

      const retryBtnText = lang === 'ar' ? "إعادة المحاولة" : lang === 'wo' ? "Try waat" : "Réessayer";

      return (
        <div className="w-full max-w-md mx-auto p-6 bg-white border border-rose-500/25 rounded-2xl shadow-md text-center space-y-5 my-4 transition-all">
          <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-500/20 flex items-center justify-center mx-auto text-rose-500 shadow-inner">
            <AlertTriangle className="w-5.5 h-5.5 animate-pulse" />
          </div>

          <div className="space-y-1.5">
            <span className="text-[9px] font-black tracking-widest text-rose-500 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full uppercase font-mono inline-block">
              {lang === 'ar' ? "تنبيه" : "Alerte Douce"}
            </span>
            <h3 className="text-sm font-black text-[#004D40] uppercase tracking-normal">
              {title}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed px-2">
              {subtitle}
            </p>
          </div>

          <button
            onClick={this.handleRetry}
            className="w-full max-w-[200px] mx-auto py-2.5 bg-[#004D40] hover:bg-[#004D40]/90 text-[#FCF8F2] rounded-xl text-[10px] font-extrabold uppercase tracking-wider shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1.5 btn-3d-emerald"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{retryBtnText}</span>
          </button>
        </div>
      );
    }

    return props.children;
  }
}
