import { useTheme } from 'next-themes';
import { ComponentProps, useRef } from 'react';
import CommonHeaderIconBtn from './common-header-icon-btn';
import Moon from './icons/svgs/Moon';
import Sun from './icons/svgs/Sun';

type Props = ComponentProps<'button'>;

export function ToggleTheme(props: Props) {
	const { setTheme, theme } = useTheme();
	const triggerRef = useRef<HTMLButtonElement>(null);

	return (
		<CommonHeaderIconBtn
			handleClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
			variant="theme"
			btnRef={triggerRef}
		>
			<Sun className="aspect-square w-6 scale-100 dark:hidden dark:scale-0" />
			<Moon className="hidden aspect-square w-6 scale-0 dark:block dark:scale-100" />
		</CommonHeaderIconBtn>
	);
}
