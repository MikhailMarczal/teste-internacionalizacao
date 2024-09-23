'use client';
import { Link, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations('Home');
	const router = useRouter();

	return (
		<div>
			<h1>{t('title')}</h1>
			<Link href={'/about'}>{t('description')}</Link>
			<button onClick={() => router.back()}>{t('back')}</button>
		</div>
	);
}
