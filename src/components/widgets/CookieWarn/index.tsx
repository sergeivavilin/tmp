'use client'
import cn from '@/src/utils/tw-merge'
import { Button } from '@heroui/button'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CookieWarn = () => {
	const [show, setShow] = React.useState(false)

	useEffect(()=>{
		const cookieAccepted = localStorage.getItem('cookie-accepted')
		if (cookieAccepted) {
			setShow(false)
			return
		}
		
		setTimeout(() => {
			setShow(true)
		}
		, 1000)

	},[])
	
	const handleAccept = () => {
		setShow(false)

		localStorage.setItem('cookie-accepted', 'true')

	}
	const handleDecline = () => {
		window.location.href = 'https://www.google.com'
	}
	return (
		<div className={cn(
			'fixed bottom-1 right-1 z-50 flex flex-col items-start justify-between  p-4 bg-stone-800 text-white rounded-md transition-all duration-300 ease-in-out', 
			show ? 'bottom-1' : 'bottom-[-100px]',
		)}>
			<p className='text-sm mb-2'>
				Мы используем файлы cookie для улучшения работы сайта. <Link href="/policity" className='text-blue-400'>Узнать больше</Link>
			</p>
			<div className="flex flex-row gap-2">
				<Button onPress={handleAccept} className='px-2 py-1 text-sm rounded '>
					Принять
				</Button>
				<Button onPress={handleDecline} className='px-2 py-1 text-sm rounded '>
					Отклонить
				</Button>
			</div>

		</div>
	)
}

export default CookieWarn