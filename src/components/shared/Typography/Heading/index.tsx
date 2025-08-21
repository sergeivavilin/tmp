import React from 'react'
import { Title } from '@mantine/core'
import { StandartProps } from '@/types/standartProps'
import { tv } from 'tailwind-variants'

const heading = tv({
	base: "font-bold relative capitalize after:content-[''] after:block after:h-px after:w-12 after:absolute after:-bottom-2 before:content-[''] before:block before:h-px before:w-40  before:absolute before:-bottom-2 !mb-6  ",
	variants: {
		position:{
			center: " text-center after:left-1/2 after:-translate-x-1/2 before:left-1/2 before:-translate-x-1/2",
			left: " text-left after:left-0 after:-translate-x-0 before:left-0 before:-translate-x-0",
			right: " text-right after:right-0 after:-translate-x-0 before:right-0 before:-translate-x-0",
		},
		theme: {
			light: "text-zinc-900 after:bg-zinc-900 before:bg-neutral-200",
			dark: "text-neutral-200 after:bg-primary before:bg-neutral-600",
		}
	},
	defaultVariants: {
		position: 'center',
		theme: 'light',
	},
})
const Heading = ({
	order = 2,
	children,
	position = 'left',
}: {
	order?: 1 | 2 | 3 | 4 | 5 | 6,
	position?: 'left' | 'center' | 'right',
} & StandartProps) => {
	return (
		<Title order={order} className={heading({position: position})} >{children}</Title>
	)
}

export default Heading