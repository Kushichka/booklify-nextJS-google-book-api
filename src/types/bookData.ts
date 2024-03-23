export type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: number;
        categories?: string[];
        averageRating?: number;
        ratingsCount?: number;
        imageLinks?: {
            thumbnail: string;
        };
        language?: string;
    };
};

export type BookData = {
    items: Book[];
};
