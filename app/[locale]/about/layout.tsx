import { Metadata } from 'next';
import Script from 'next/script';

type teste = {
	acabamentos: {
		id: number;
		acabamento: string;
	}[];
};

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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: 4.4,
		reviewCount: 89,
	},
};

export async function generateMetadata(): Promise<Metadata> {
	const data: Metadata = {
		title: 'title sobre about acerca-de',
		description: 'descricao dinamiquinha',
		keywords: ['custom keywords', 'about', 'acerca-de', 'sobre'],
	};

	return data;
}

export default async function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	return (
		<>
			<Script type="application/ld+json">{JSON.stringify(jsonLd)}</Script>
			{children}
		</>
	);
}
