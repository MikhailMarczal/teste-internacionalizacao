'use client';
import { Link, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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
