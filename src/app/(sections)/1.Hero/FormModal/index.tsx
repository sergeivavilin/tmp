'use client'
import ContactForm from "@/src/components/widgets/ContactForm";
import content from "@/src/content";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	// Button,
	useDisclosure,
} from "@heroui/react";
import { Button } from '@shared/Button/Button1'


const FormModal = () => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} btnStyle='white' className='mx-auto mt-10'>
				{content.hero.buttonText}
			</Button>

			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody>
								<ContactForm />
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>

	)
}

export default FormModal