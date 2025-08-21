import SectionContainer from '@/src/components/layouts/SectionContainer'
import Heading from '@/src/components/shared/Typography/Heading'
import { Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import img from '@assets/production/103977100.jpg'
import content from '@/src/content'
import Text from '@/src/components/shared/Typography/Text'
import ProductsLine from './ProductsLine'
const AboutUs = () => {
	return (<>
		<SectionContainer  
		id='about'
		containerClassName='flex flex-col lg:flex-row items-center justify-center gap-10'>
			<div className="w-full lg:w-1/2">
				<Heading>{content.aboutUs.title}</Heading>

				<Text className="mt-4 max-w-2xl w-full text-left">
					{content.aboutUs.descr}
				</Text>
			</div>

			<div className="w-full lg:w-1/3 aspect-square max-h-[600px] overflow-hidden flex items-center justify-center rounded-lg">
				<Image src={img} alt="Picture of the author" className='' />
			</div>
		</SectionContainer>
		<ProductsLine />
	</>
	)
}

export default AboutUs