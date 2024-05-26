export const getStartIndex = (page: string): string => {
    return page && (parseInt(page) === 1 ? 0 : (parseInt(page) - 1) * 9).toString();
};
