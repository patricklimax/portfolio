'use client';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ToggleTheme() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='border text-primary h-9 w-9 focus:outline-none focus:ring-0'>
					<Sun
						size={20}
						className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
					/>
					<Moon
						size={20}
						className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
					/>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					<Sun className='h-[1.2rem] w-[1.2rem]' />
					{/* Light */}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					<Moon className='h-[1.2rem] w-[1.2rem]' />
					{/* Dark */}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
