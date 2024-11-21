import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import Footer from '@/components/footer';
import { jetBrainsMono } from '@/fonts/font';
import { ThemeProvider } from '@/providers/theme';

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
			<body
				className={`${jetBrainsMono.className} antialiased`}
				suppressHydrationWarning>
				<ThemeProvider>
					<div className='mx-auto max-w-[85rem] h-screen px-2 sm:p-0'>
						<div className='w-full flex flex-col sm:flex-row'>
							<Header />
							<main className='h-[calc(100vh-5rem)] sm:h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden w-full'>
								{children}
							</main>
						</div>
						<div className='sm:hidden'>
							<Footer />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
