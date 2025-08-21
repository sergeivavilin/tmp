import React from 'react'
import content from '@/src/content';

const styles = {
	label: '',
	title: 'text-md mb-2 font-medium',
	input: 'border rounded px-4 py-2 outline-none w-full',
}

const RenderInputs = () => {
	return (
		<div className="flex flex-col gap-4">
			{content.contact.inputs.map((input, index) => (
				<label key={index} className={styles.label}>
					<h4 className={styles.title}><input.icon className='inline-block mr-2' /> {input.label}:</h4>
					{input.type === 'textarea' ? (
						<textarea rows={6} className={styles.input + ' max-h-[400px]'} placeholder={input.placeholder} />
					) : (
						<input type={input.type} className={styles.input} placeholder={input.placeholder} />
					)}
				</label>
			))}
		</div>
	)
}

export default RenderInputs