import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
	const data: Metadata = {
		title: 'title',
		description: 'dinamic description',
		keywords: ['palabras', 'chabes'],
	};

	return data;
}

const richSnippet = {
	'@context': 'https://schema.org',
	'@type': 'Store',
	image: ['https://example.com/photos/1x1/photo.jpg'],
	name: 'Pormade',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Rua da água, 21',
		addressLocality: 'União da Vitória',
		addressRegion: 'PR',
		postalCode: '89400-000',
		addressCountry: 'BR',
	},
	telephone: '(42) 988887788',
	openingHours: ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'],
	url: 'https://www.pormade.com.br',
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body>
				<Script type="application/ld+json">{JSON.stringify(richSnippet)}</Script>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}
