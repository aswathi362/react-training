export const useSort = ( sortBy, sortOrder, items) => {
    if(sortOrder === 'asc'){
        return [...items].sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    }
    else if(sortOrder === 'desc'){
        return [...items].sort((a,b) => b[sortBy].localeCompare(a[sortBy]));
    }

    return items;
}