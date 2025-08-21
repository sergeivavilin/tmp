import { IoPerson, IoMail, IoCall, IoChatbox } from "react-icons/io5";

const contactUs = {
	title: 'Напишите нам',
	button: 'Отправить',
	mapSrc: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3008.6274730962273!2d28.68399007604301!3d41.055274971343906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAzJzE5LjAiTiAyOMKwNDEnMTEuNiJF!5e0!3m2!1sru!2str!4v1728673533950!5m2!1sru!2str',
	inputs: [
		{
			id: 'name',
			label: 'Имя',
			placeholder: 'Ваше имя',
			type: 'text',
			icon: IoPerson
		},
		{
			id: 'email',
			label: 'Email',
			placeholder: 'Ваш email',
			type: 'email',
			icon: IoMail
		},
		{
			id: 'phone',
			label: 'Телефон',
			placeholder: 'Ваш телефон',
			type: 'text',
			icon: IoCall
		},
		{
			id: 'message',
			label: 'Сообщение',
			placeholder: 'Ваше сообщение',
			type: 'textarea',
			icon: IoChatbox
		},
	]
}

export default contactUs