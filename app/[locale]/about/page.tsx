'use client';
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function About() {
	const t = useTranslations('About');
	const router = useRouter();
	return (
		<div>
			<h1>{t('title')}</h1>
			<h2>{t('description')}</h2>
			<button onClick={() => router.back()}>{t('back')}</button>
		</div>
	);
}
