export const separateCategories = (array: string[]) => {
    const afterSplit = array.reduce<string[]>((acc, current) => {
        acc.push(...current.split(/[,/]/g));
        return acc;
    }, []);

    const newArr = afterSplit.reduce<string[]>((acc, current) => {
        acc.push(current.trim());
        return acc;
    }, []);

    return [...new Set(newArr)];
};
