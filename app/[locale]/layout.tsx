import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

type teste = {
	acabamentos: {
		id: number;
		acabamento: string;
	}[];
};

async function getSomething(): Promise<teste> {
	const res = await fetch('http://192.168.155.193:8006/buscaInformacaoSimp', {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiVEVTVEUgQVBQIE1FRElDQU8iLCJkb2N1bWVudG8iOiIyMDk2MzAwMDAyMCIsInRpbWUiOiI4aCIsInNpc3RlbWEiOjEzLCJsb2dpbklkIjoyNzU1LCJyb2xlcyI6W10sImlhdCI6MTcyNjQ4NjkyMiwiZXhwIjoxNzI2NTE1NzIyfQ.7jp6g2Srfgul2qN6wYKzrZ7Z_jkBQdFZ07_4qaV5zOc',
		},
	});
	return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
	const res = await getSomething();
	const a = res?.acabamentos[0]?.acabamento ?? 'Teste';
	const data: Metadata = {
		title: a,
		description: 'dinamic description',
		keywords: res.acabamentos?.map((item) => item.acabamento),
	};

	return data;
}

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Product',
	name: 'Kit Porta Pronta Pormade',
	image: 'product.image',
	description: 'Porta pronta pormade muito fofa e fodastica mesmo da silva',
	sku: 'KSÇVMDOPEKFM42',
	brand: {
		'@type': 'Brand',
		name: 'Pormade',
	},
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
