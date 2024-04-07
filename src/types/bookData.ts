export type BookPageCategoriesProps = string;

export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: number;
        categories?: BookPageCategoriesProps[];
        averageRating?: number;
        ratingsCount?: number;
        imageLinks?: {
            thumbnail: string;
        };
        language?: string;
    };
};

export type BookData = {
    totalItems: number;
    items: Book[];
};
