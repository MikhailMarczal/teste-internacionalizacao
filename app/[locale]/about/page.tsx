'use client';
import { Link, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function About() {
	const text = useTranslations('About');
	const router = useRouter();
	return (
		<div>
			<h1>{text('title')}</h1>
			<h2>{text('description')}</h2>
			<button onClick={() => router.back()}>{text('back')}</button>
		</div>
	);
}
