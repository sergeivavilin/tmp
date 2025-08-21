import cn from '@/src/utils/tw-merge'
import { StandartProps } from '@/types/standartProps'
import React from 'react'
import { tv } from 'tailwind-variants'
import Markdown from 'react-markdown'

const text = tv({
	base: 'whitespace-pre-wrap text-zinc-800 font-light',
	variants:{
		size: {
			sm: 'text-sm',
			md: 'text-md lg:text-lg',
			lg: 'text-lg lg:text-xl',
		},
		theme: {
			light: 'text-zinc-800',
			dark: 'text-neutral-200',
		}
	},
	defaultVariants: {
		size: 'md',
		theme: 'light',
	}
})

const Text = (props:StandartProps & {
	size?: 'sm' | 'md' | 'lg',
	theme?: 'light' | 'dark',
} & {
	children: string,
	// className?: string,
}) => {
	return (
		<pre className={cn(text({size: props.size, theme: props.theme}), props.className)}>
			<Markdown>
				{props.children}			
			</Markdown>
		</pre>
	)
}

export default Text