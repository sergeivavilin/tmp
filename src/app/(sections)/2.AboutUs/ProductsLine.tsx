'use client'
import aboutUs from '@/src/content/sections/aboutUs';
// import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";
import {Image} from "@heroui/image";

const ProductsLine = () => {
	return (
		<Marquee className='pb-[50px] lg:pb-[100px]' pauseOnHover >
			{aboutUs.productsLine.map((item, index) => (
				<div key={item.id + 'kitchen'} className="mx-2 bg-zinc-900 h-[400px] w-[300px] rounded-lg flex items-center justify-center overflow-clip group">
					{/* <Image src={item.img.src} alt='kitchen' width={300} height={400} className="object-cover min-h-full min-w-full lg:opacity-60 group-hover:opacity-100 transition-opacity" /> */}
					<Image src={item.img.src} alt='kitchen' width={300} height={400} className="object-cover rounded-none min-h-full min-w-full lg:!opacity-60 group-hover:!opacity-100 transition-opacity" />
				</div>
			))}
			
		</Marquee>
	)
}

export default ProductsLine