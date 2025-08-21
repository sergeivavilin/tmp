import React from 'react'
import logo_brand from '@assets/LOGO_only_brand.png'
import Image from 'next/image'
import cn from '@/src/utils/tw-merge'
import { StandartProps } from '@/types/standartProps'
import Link from 'next/link'

const LogoWithText = ({className}:StandartProps) => {
	return (
		<Link href={'/'} className={cn('flex items-center', className)}>
			<Image src={logo_brand} alt="" height={50} className="mr-2" />
			
			<div className="flex flex-col items-center justify-center font-raleway transition-colors">
				<span className="uppercase text-2xl font-semibold -mb-1">VAKI</span>
				<span className="text-xs uppercase">we make furniture</span>
			</div>
		</Link>
	)
}

export default LogoWithText;