import Image from "next/image";

export const BookCover = ({ src, width, height }: { src?: string; width: number; height: number }) => {
    return (
        <Image
            src={
                src
                    ? src + `&fife=w500`
                    : "http://books.google.com/books/content?id=0_1qQgAACAAJ&printsec=frontcover&img=1&zoom=10&source=gbs_api"
            }
            width={width}
            height={height}
            alt="Book Cover"
            priority
        />
    );
};
