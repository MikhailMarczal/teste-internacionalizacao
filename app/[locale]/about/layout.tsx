import { Metadata } from 'next';

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
	const a = res?.acabamentos[10]?.acabamento ?? 'Teste';
	const data: Metadata = {
		title: a,
		description: 'descricao dinamiquinha',
		keywords: res.acabamentos?.map((item) => item.acabamento),
	};

	return data;
}

export default async function Layout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
	// Providing all messages to the client
	// side is the easiest way to get started

	return children;
}
