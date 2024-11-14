import type { Metadata } from 'next';
import './globals.css';
import { jetBrainsMono } from '@/fonts/font';

export const metadata: Metadata = {
	title: 'patricklimax',
	description: 'Website Porfolio from PATRICKLIMAX'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${jetBrainsMono.className} antialiased`}>
				<main>{children}</main>
			</body>
		</html>
	);
}
