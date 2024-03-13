import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import item1 from '@/assets/carousel/carousel1.jpg';
import item2 from '@/assets/carousel/carousel2.jpg';
import item3 from '@/assets/carousel/carousel3.jpg';
import item4 from '@/assets/carousel/carousel4.jpg';
import item5 from '@/assets/carousel/carousel5.jpg';

export default function CarouselBanner() {
    const carouselItems = [item1, item2, item3, item4, item5];

    return (
        <>
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] mt-1 bg-neutral-400">
                <Carousel className="w-full h-full" pause={'hover'}>
                    {carouselItems.map((item, i) => {
                        return (
                            <CarouselItem
                                className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]"
                                key={i}
                            >
                                <Image
                                    className="object-cover"
                                    src={item}
                                    alt={'carousel item'}
                                    fill={true}
                                    sizes="100vw, 1280px"
                                    priority={i === 0}
                                />
                            </CarouselItem>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
}
