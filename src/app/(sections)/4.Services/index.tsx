'use client'
import SectionContainer from '@/src/components/layouts/SectionContainer'
import Heading from '@/src/components/shared/Typography/Heading'
import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import tmp_img from '@assets/production/661849205.jpg'
import content from '@/src/content';
import { CarouselCard } from '@/src/components/widgets/CardCarousel';
import { Text } from '@mantine/core';

const OurServices = () => {
	const footer = (price:number) => {
		return (
			<div className="flex flex-row items-center justify-start gap-2 mt-auto">
				<Text span fz="sm" c="dimmed" className=''>
					{' '}
					От
				</Text>
				<Text fz="xl" span fw={500} style={{
					color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))'
				}} >
					 {price} ₽
				</Text>
			</div>


		)
	}

	return (
		<SectionContainer id='services'>
			<Heading position='center' >Основные услуги</Heading>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mt-10">
				{content.services.map((item, index) => (
					// <Card key={item.title} className="h-[500px] group ">
					// 	<CardHeader className="absolute z-10 bottom-0 flex-col !items-start bg-zinc-900/80 lg:bg-zinc-900/80 transition-colors group-hover:bg-zinc-900/80">
					// 		<h4 className="text-white font-medium text-xl">{item.title}</h4>
					// 		<p className="text-white/60 font-light text-md max-h-0 overflow-clip group-focus:max-md:max-h-[500px] group-hover:lg:max-h-[500px] duration-400 transition-all pt-2 pb-[45px] group-hover:lg:pb-[60px]">{item.descr}</p>
					// 	</CardHeader>
					// 	<CardFooter className="absolute z-10 bottom-0 flex-col !items-start bg-zinc-900/80 lg:bg-zinc-800/90 transition-colors group-hover:bg-zinc-900/80 text-xl font-semibold cursor-pointer">
					// 		<p className="w-full bg-white/90 rounded-md px-2 py-1">{item.footer}</p>
					// 	</CardFooter>
					// 	<Image
					// 		removeWrapper
					// 		alt="Card background"
					// 		className="z-0 w-full h-full object-cover"
					// 		src={tmp_img.src}
					// 	/>
					// </Card>
					<CarouselCard key={item.title} title={item.title} descr={item.descr} images={tmp_img.src} footer={footer(item.price)} className='max-w-auto' />
				))}
			</div>
		</SectionContainer>
	)
}

export default OurServices