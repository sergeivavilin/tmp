import aboutUs from "./sections/aboutUs";
import contactUs from "./sections/contact";
import products from "./sections/products";
import services from "./sections/services";
import testimonial_items from "./sections/testimonials";

const content = {
	hero: {
		title: 'сервис для бизнеса',
		subtitle: 'Производственный мебельный',
		buttonText: 'Оставить заявку',
	},
	aboutUs: aboutUs,
	counter: [
		{
			title: 10000,
			descr: 'Количество проектов',
			icon_name: 'icon-pencil',
		},
		{
			title: 1350,
			descr: 'Количество клиентов',
			icon_name: 'icon-wine',
		},
		{
			title: '∞',
			descr: 'Количество идей',
			icon_name: 'icon-hourglass',
		},
		// {
		// 	title: 315,
		// 	descr: 'Количество сотрудников',
		// 	icon_name: 'icon-download',
		// },
	],
	services: services,
	products: products,
	testimonials: testimonial_items,
	contact: contactUs
}

export default content;