import cn from '@/src/utils/tw-merge'
import { StandartProps } from '@/types/standartProps'
import React from 'react'

const SectionContainer = (props: StandartProps & {
	containerClassName?: string,
}) => {
	return (
		<section
			id={props.id}
			style={props.style}
			className={cn('py-[100px]', props.className)}
		>
			<div className={cn("container px-4", props.containerClassName)}>
				{props.children}
			</div>
		</section>
	)
}

export default SectionContainer