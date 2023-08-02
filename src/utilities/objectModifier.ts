// changes the key in each object inside a results array
export const resultsArrayChangeKey = (data: any[], oldKey:string, newKey: string) => {
    const results = data.map(obj => {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey]

        return obj
    });

    return results 
}

// converts to plain objects without classes for clean passing of data to client from server
export const convertToPlainObj = (data: any[]) => {
    return data.map((record) => ({...record}))
}