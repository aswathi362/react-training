export const useSearch = (items, searchTerm) => {
    return items
    .filter( item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        // item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
}