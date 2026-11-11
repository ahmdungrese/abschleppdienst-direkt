"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "de" | "en" | "ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-xs font-semibold">
      <Globe size={15} className="text-amber-400" />
      <select
        className="bg-transparent cursor-pointer outline-none hover:text-amber-400 transition-colors disabled:opacity-50 text-slate-200 font-medium"
        defaultValue={locale}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="de" className="bg-slate-900 text-white">DE</option>
        <option value="ar" className="bg-slate-900 text-white">العربية</option>
        <option value="en" className="bg-slate-900 text-white">EN</option>
      </select>
    </div>
  );
}