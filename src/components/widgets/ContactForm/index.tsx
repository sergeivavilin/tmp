import React from 'react'
import { Button } from '@shared/Button/Button1';
import RenderInputs from './RenderInputs';
import content from '@/src/content';

const ContactForm = () => {
	return (
		<div className="flex flex-col gap-4 p-10 w-full">
		<RenderInputs />

		<Button btnStyle='black'>
			{content.contact.button}
		</Button>
	</div>
	)
}

export default ContactForm