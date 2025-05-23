import { defineRouting } from 'next-intl/routing';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LOCALES } from '@/constants/language';

export const routing = defineRouting({
	locales: LOCALES,
	localePrefix: 'as-needed',
	defaultLocale: 'pt-br',
	pathnames: {
		'/': '/',
		'/about': {
			'pt-br': '/sobre',
			en: '/about',
			es: '/acerca-de',
		},
	},
});

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation(routing);
