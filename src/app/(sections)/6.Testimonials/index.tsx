'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { twMerge as cn } from 'tailwind-merge'

import bg_img from '@assets/testimonials.jpg'
import content from '@/src/content'

const Testimonials = () => {
	const [isVisible, setIsVisible] = useState(true)
	const [active_index, setActiveIndex] = useState(0)
	const [interval_id, setIntervalId] = useState<NodeJS.Timeout | null>(null)
	const testimonial_items = content.testimonials.items

	useEffect(() => {
		const inter_id = setInterval(() => {
			setIsVisible(false)
			updateTestimonial()
		}, 8000)
		setIntervalId(inter_id as NodeJS.Timeout)
		return () => clearInterval(inter_id)
	}, [])

	const updateTestimonial = () => {
		setIsVisible(false)
		setTimeout(() => {
			setActiveIndex(prev => (prev + 1) % testimonial_items.length)
			setIsVisible(true)
		}, 600)
	}

	return (
		<section className="relative py-14 px-3 md:px-0 overflow-hidden h-full" id='testimonials'>
			<Image
				src={bg_img}
				alt="Testimonials Background"
				fill
				placeholder="blur"
				priority
				className="object-cover object-top z-0"
			/>

			<div className="absolute inset-0 bg-black/80 z-10" />

			<div className="relative z-20 flex flex-col justify-center items-center container mx-auto text-center">
				<i className="icon-quote text-white text-3xl md:text-4xl mb-4" ></i>

				<h2 className="text-center text-2xl md:text-4xl text-white font-semibold mb-14 relative
					after:content-[''] after:block after:h-px after:w-12 after:bg-primary
					after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-4
					before:content-[''] before:block before:h-px before:w-40 before:bg-neutral-600
					before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-4">
					{content.testimonials.title}
				</h2>

				<p className={cn(
					"text-neutral-400 text-sm md:text-base font-light mb-8 max-w-5xl min-h-[80px] transition-opacity duration-500 h-36 flex items-center justify-center",
					isVisible ? "opacity-100" : "opacity-0"
				)}>
					{testimonial_items[active_index].text}
				</p>

				<div className={cn(
					"text-white flex justify-center items-center w-full gap-5 transition-all duration-500",
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
				)}>
					<span className="block w-full text-sm text-right">{testimonial_items[active_index].name}</span>
					<span>|</span>
					<span className="block w-full text-sm text-left">{testimonial_items[active_index].position}</span>
				</div>

				<div className="flex justify-center gap-2 mt-8">
					{testimonial_items.map((item, index) => (
						<span
							key={item.id}
							onClick={() => {
								setIsVisible(false)
								if (interval_id) clearInterval(interval_id)
								setTimeout(() => {
									setActiveIndex(index)
									setIsVisible(true)
								}, 600)
							}}
							className={cn(
								"w-2 h-2 inline-block rounded-full hover:bg-primary/60 cursor-pointer transition-colors",
								index === active_index ? "bg-primary" : "bg-neutral-600"
							)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
