// import content from '@/src/content'
// import React from 'react'

// const Map = () => {
// 	return (
// 		<div className="w-full min-h-[400px] lg:w-2/3">
// 			<iframe src="https://yandex.ru/maps/?text=Реутов, Калинина, 20" width="100%" height="400" referrerPolicy="no-referrer-when-downgrade"></iframe>
// 			{/* <iframe 
// 				className='w-full h-full min-h-[400px] rounded-lg' 
// 				src={content.contact.mapSrc} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
// 		</div>
// 	)
// }

// export default Map

// components/YandexMap.tsx
'use client';

// import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps 
      enterprise
      query={process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY ?{
        apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY,
        lang: 'ru_RU',
      } : {}}
    >
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        
        width="100%"
        // height="400px"
      >
        <Placemark geometry={[55.75, 37.57]} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;