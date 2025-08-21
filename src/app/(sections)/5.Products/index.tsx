import SectionContainer from '@/src/components/layouts/SectionContainer'
import Heading from '@/src/components/shared/Typography/Heading'
import { CarouselCard } from '@/src/components/widgets/CardCarousel'
import content from '@/src/content'
import React from 'react'

const Products = () => {
	return (
		<SectionContainer id='works'>
			<Heading position='center'>{content.products.title}</Heading>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 justify-items-center gap-4 mt-8">
				{content.products.productCards.map((item, index) => (
					<CarouselCard key={item.title} title={item.title} descr={item.descr} images={item.imgs} />
				))}
			</div>
		</SectionContainer>
	)
}

export default Products