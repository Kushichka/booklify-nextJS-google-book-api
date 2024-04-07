export const generatePaginationPages = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = [];
    // calculate pagination befor the current page (including the current page)
    // If there are less than 5 pages, show all pages
    if (currentPage <= 5) {
        for (let i = 1; i <= currentPage; i++) {
            pages.push(i);
        }
    } else {
        // If there are more than 5 pages, show "..." and two pages before the current page
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 2; i <= currentPage; i++) {
            pages.push(i);
        }
    }
    // calculate pagination after the current page
    // if total pages are more than current page + 4, show two pages after the current page and "..." and the last page
    if (totalPages > currentPage + 4) {
        pages.push(currentPage + 1);
        pages.push(currentPage + 2);
        pages.push("...");
        pages.push(totalPages);
    } else {
        // if total pages are less than current page + 4, show all pages
        for (let i = currentPage + 1; i <= totalPages; i++) {
            pages.push(i);
        }
    }

    return pages;
};
