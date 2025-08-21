import Heading from '@/src/components/shared/Typography/Heading';
import content from '@/src/content';
// import { Button } from '@shared/Button/Button1';
// import Map from '@widgets/Map'
import React from 'react'
// import RenderInputs from '../../../components/widgets/ContactForm/RenderInputs';
import YandexMap from '@/src/components/widgets/Map';
import ContactForm from '@/src/components/widgets/ContactForm';


const ContactUs = () => {

	return (
		<section className='py-20 container' id='contacts'>
			<Heading position='center'>{content.contact.title}</Heading>

			<div className="flex flex-col lg:flex-row shadow-xl mt-8">
				<div className="lg:w-1/3">
					<ContactForm />
				</div>

				<YandexMap />
				{/* <YandexMap /> */}
			</div>
		</section>
	)
}

export default ContactUs