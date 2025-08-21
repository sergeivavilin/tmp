'use client';

import { IconStar } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
// import { Button, Card, Group, Image, Text } from '@mantine/core';
import { Button, Card, Group, Text } from '@mantine/core';
import classes from './CarouselCard.module.scss';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Image from 'next/image';
import cn from '@/src/utils/tw-merge';

const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export function CarouselCard(props : {
  title: string,
  descr: string,
  images: string[] | string,
  className?: string,
  footer?: React.ReactNode,
}) {
  const slides = Array.isArray(props.images) ? props.images.map((image) => (
    <Carousel.Slide key={image}>
      <Image alt='кухня' className='min-h-[320px]' width={300} src={image} height={320} />
    </Carousel.Slide>
  )) : null

  return (
    <Card radius="md" withBorder padding="xl" className={cn('max-w-[300px] h-full', props.className)}>
      <Card.Section>
        {
          slides && Array.isArray(images) ? 
          <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>:
        <Image
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={props.images as string}
          width={300}
          height={320}
        />
        }
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {props.title}
        </Text>

        {/* <Group gap={5}>
          <IconStar size={16} />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group> */}
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {props.descr}
      </Text>

      {/* {props.footer && <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            397$
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
        
      </Group>} */}
      {props.footer}
    </Card>
  );
}