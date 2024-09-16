'use client';
import { Link, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home({}) {
	const text = useTranslations('Home');
	const router = useRouter();

	return (
		<div>
			<h1>{text('title')}</h1>
			<Link href={'/about'}>{text('description')}</Link>
			<button onClick={() => router.back()}>{text('back')}</button>
		</div>
	);
}
