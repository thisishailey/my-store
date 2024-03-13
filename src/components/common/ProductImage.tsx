'use client';

import Image from 'next/image';

interface ProductImageProps {
    image: string;
    title: string;
    classList?: string;
    imgClassList?: string;
}

export default function ProductImage({
    image,
    title,
    classList,
    imgClassList,
}: ProductImageProps) {
    const defaultDivClasses =
        'relative w-full rounded-lg border border-solid border-neutral-50 bg-white overflow-hidden ';
    const additionalDivClasses = classList || '';
    const imgDivClasses = defaultDivClasses + additionalDivClasses;

    const defaultImgClasses = 'object-contain ';
    const additionalImgClasses = imgClassList || '';
    const imgClasses = defaultImgClasses + additionalImgClasses;

    return (
        <div className={imgDivClasses}>
            <Image
                loader={() => image}
                unoptimized={true}
                src={image}
                alt={title}
                fill={true}
                sizes="(max-width: 400px) 100vw, (max-width: 768px) 50vw, 33vw"
                className={imgClasses}
                priority={true}
            />
        </div>
    );
}
