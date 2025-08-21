'use client'

import { useState } from "react"
import CountUp from 'react-countup'
import Image from 'next/image'

import bg_img from '@assets/production/914573027.jpg'
import content from "@/src/content"

const Counter = () => {
	return (
		<section className="relative bg-fixed overflow-hidden">
			<Image
				src={bg_img}
				alt="Production background"
				fill
				priority
				placeholder="blur"
				className="object-cover object-center z-0"
			/>

			<div className="absolute inset-0 bg-black/80 z-10" />

			<div className="relative z-20 container m-auto flex flex-col justify-center text-center">
				<div 
					className="flex flex-col md:grid gap-10 md:gap-6 my-10"
					style={{ gridTemplateColumns: `repeat(${content.counter.length}, minmax(200px, 1fr))` }}
				>
					{content.counter.map((item) => (
						<CounterItem
							key={item.title}
							count={item.title}
							descr={item.descr}
							icon_name={item.icon_name}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

const CounterItem = ({
	count, descr, icon_name
}: {
	count: string | number,
	descr: string,
	icon_name: string
}) => {
	const [isSign, setIsSign] = useState(false)

	let countUp: number | null = null

	if (typeof count === 'string') {
		countUp = null
	} else if (count >= 9999) {
		countUp = 9999
	} else {
		countUp = count
	}

	const handleAnimEnd = () => {
		if (countUp === 9999) setIsSign(true)
	}

	return (
		<div className="col-span-1 md:col-span-1">
			<span className="flex justify-center items-center text-primary text-3xl mb-px md:mb-4">
				<i className={"icon " + icon_name} />
			</span>

			<h3 className="text-zinc-50 text-2xl md:text-4xl md:mb-2 uppercase font-light">
				{countUp === null ? count : (
					<CountUp
						end={countUp}
						enableScrollSpy
						scrollSpyOnce
						duration={3}
						onEnd={handleAnimEnd}
					/>
				)}
				{isSign ? '+' : ''}
			</h3>

			<p className="text-zinc-400 capitalize">{descr}</p>
		</div>
	)
}

export default Counter
