/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  X, MapPin, Calendar, Award, BookOpen, GraduationCap, Users, CheckCircle2,
  Phone, Mail, Facebook, Youtube, Flame, Info
} from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

interface SchoolInfoProps {
  onClose: () => void;
}

export default function SchoolInfo({ onClose }: SchoolInfoProps) {
  const { t, dir } = useLanguage();

  const chiffresCles = [
    { label: t('school.stat_students'), value: t('school.val_students') },
    { label: t('school.stat_graduates'), value: t('school.val_graduates') },
    { label: t('school.stat_success'), value: t('school.val_success') },
    { label: t('school.stat_licence'), value: t('school.val_licence') },
  ];

  const programmes = [
    { title: t('school.prog_double_title'), description: t('school.prog_double_desc') },
    { title: t('school.prog_bridge_title'), description: t('school.prog_bridge_desc') },
    { title: t('school.prog_vac_title'), description: t('school.prog_vac_desc') },
  ];

  const values = [
    { title: t('school.val_tahji_title'), description: t('school.val_tahji_desc') },
    { title: t('school.val_khatm_title'), description: t('school.val_khatm_desc') },
    { title: t('school.val_akhlaq_title'), description: t('school.val_akhlaq_desc') },
  ];

  const structures = [
    { name: "AMDMEC", description: t('school.struct_amdmec_desc') },
    { name: "Ansar Al-Mouyassar", description: t('school.struct_ansar_desc') },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 flex flex-col max-h-[90vh]"
      >
        {/* Header Banner */}
        <div className="relative bg-emerald-850 p-6 text-white flex items-start justify-between border-b border-emerald-900">
          <div className="absolute inset-0 bg-radial-gradient from-emerald-800/20 to-transparent pointer-events-none" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800/30">
              {t('school.guide_title')}
            </span>
            <h2 className="text-2xl font-bold font-sans mt-2 tracking-tight">
              {t('school.name')}
            </h2>
            <p className="text-emerald-100 text-sm mt-1 flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {t('school.location')}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-emerald-800/50 hover:bg-emerald-800 text-emerald-100 hover:text-white transition-all cursor-pointer"
            aria-label={t('school.close_guide')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Beautiful School Courtyard Cover Image */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden shrink-0 border-b border-slate-100">
          <img
            src="/images/school_courtyard.png"
            alt={t('school.illust_label')}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className={`absolute bottom-3 ${dir === 'rtl' ? 'right-4' : 'left-4'} text-white text-xs font-semibold flex items-center gap-1 drop-shadow-md`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t('school.illust_label')}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Main Identity Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t('school.founded_label')}</p>
                <p className="text-sm font-bold text-slate-800">{t('school.founded_val')}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-50 text-amber-700">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t('school.founder_label')}</p>
                <p className="text-sm font-bold text-slate-800">{t('school.founder')}</p>
              </div>
            </div>
          </div>

          {/* Noble Mission Statement */}
          <div className="p-4 rounded-xl bg-emerald-50/15 border border-emerald-500/10 space-y-1.5 relative overflow-hidden">
            <div className={`absolute ${dir === 'rtl' ? 'left-2' : 'right-2'} bottom-2 text-emerald-500/5 pointer-events-none`}>
              <BookOpen className="w-24 h-24" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              {t('school.mission_title')}
            </h3>
            <p className="text-slate-650 leading-relaxed text-xs italic">
              &ldquo;{t('school.mission_desc')}&rdquo;
            </p>
          </div>

          {/* Key figures - Chiffres clés */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-500" />
              {t('school.stats_title')}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {chiffresCles.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-neutral-50 border border-neutral-100/80 text-center space-y-0.5">
                  <p className="text-lg font-extrabold text-emerald-700 font-mono tracking-tight">{stat.value}</p>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programmes d'excellence */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-emerald-600" />
              {t('school.progs_title')}
            </h3>
            <div className="grid gap-2.5">
              {programmes.map((prog, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-150 bg-slate-50/40 hover:bg-emerald-50/5 transition-colors">
                  <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {prog.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                    {prog.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pedagogic Route */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              {t('school.curriculum_title')}
            </h3>
            <div className="grid gap-3">
              {values.map((val) => (
                <div key={val.title} className="p-4 rounded-xl border border-slate-150 hover:border-emerald-100 hover:bg-emerald-50/10 transition-colors flex gap-3">
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-sm">{val.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Pillars - AMDMEC and Ansar */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              {t('school.community_title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {structures.map((struct) => (
                <div key={struct.name} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded">
                        {struct.name}
                      </span>
                      <span className="text-[10px] text-slate-450 font-medium">{t('school.struct_support')}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {struct.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts & Admissions section */}
          <div className="p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {t('school.contacts_title')}
            </h3>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>{t('school.address_label')}</strong> {t('school.contacts_address')}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span><strong>{t('school.phones_label')}</strong> {SCHOOL_INFO.contacts.telephones.join(" / ")}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span><strong>{t('school.email_label')}</strong> {SCHOOL_INFO.contacts.email}</span>
              </p>
              <div className="flex items-center gap-4.5 pt-1.5 text-slate-400">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span className="text-[10px]">{SCHOOL_INFO.contacts.facebook}</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                  <Youtube className="w-4 h-4" />
                  <span className="text-[10px]">{SCHOOL_INFO.contacts.youtube}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg shadow transition-all cursor-pointer"
          >
            {t('school.close_guide')}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
