export const generatePaginationPages = (totalPages: number, currentPage: number, offset = 2) => {
    const pages: (number | string)[] = [];
    const offsetRange = offset + 1 + 1; // offset + 1 (...) + 1 (first/last page)

    // calculate pagination befor the "currentPage" (including the "currentPage")

    // If "currentPage" less or equals than "offsetRange" + 1, show all pages before the "currentPage" (including the "currentPage")
    if (currentPage <= offsetRange + 1) {
        for (let i = 1; i <= currentPage; i++) {
            pages.push(i);
        }
    } else {
        //else show first page, "..." and "offset" pages before the "currentPage"
        pages.push(1, "..."); // 2
        for (let i = currentPage - offset; i <= currentPage; i++) {
            pages.push(i);
        }
    }

    // calculate pagination after the current page

    // if "totalPages" are more than "currentPage" + "offsetRange", show "offset" pages after the "currentPage" and "..." and the last page
    if (totalPages > currentPage + offsetRange) {
        for (let i = currentPage + 1; i <= currentPage + offset; i++) {
            pages.push(i);
        }
        pages.push("...", totalPages);
    } else {
        // else show all pages to the "totalPages"
        for (let i = currentPage + 1; i <= totalPages; i++) {
            pages.push(i);
        }
    }

    return pages;
};
