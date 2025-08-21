'use client'

import React from 'react'
import Image from 'next/image'
import bg_img from '@assets/background.jpg'
import content from '@/src/content'
import FormModal from './FormModal'

const Hero = () => {


	return (
		<section className="relative flex flex-col items-center justify-center h-screen -mt-[64px] overflow-hidden">

			<Image
				src={bg_img}
				alt="background"
				fill
				priority // так как это LCP-изображение
				placeholder="blur"
				className="object-cover z-0"
			/>

			<div className="absolute inset-0 bg-black/50 z-10" />

			<div className="z-20 text-center">
				<h1 className="text-5xl font-bold text-white leading-tight lg:leading-normal">
					<span className="text-xl lg:text-[45px] font-normal">{content.hero.subtitle}</span> <br />
					<span className="text-5xl lg:text-6xl uppercase whitespace-pre-line">{content.hero.title}</span>
				</h1>

				<FormModal />
			</div>

		</section>
	)
}

export default Hero
