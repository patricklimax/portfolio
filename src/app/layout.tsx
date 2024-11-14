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
						<div className='flex flex-col sm:flex-row gap-2'>
							<Header />
							<div className='w-full'>
								<main className='h-[calc(100vh-7.5rem)] sm:h-[calc(100vh-1.5rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden'>
									{children}
								</main>
								<Footer />
							</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
