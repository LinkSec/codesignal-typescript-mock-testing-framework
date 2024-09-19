
/* 
Upload the file to the remote storage server
○ If a file with the same name already exists on the server, throws a runtime exception
*/
function FILE_UPLOAD(fileName: string, size: number){
}


/* 
Returns size of the file, or nothing if the file doesn’t exist
*/
function FILE_GET(file_name: string){
}

/*
Copy the source file to a new location
○ If the source file doesn’t exist, throws a runtime exception
○ If the destination file already exists, overwrites the existing file
*/
function FILE_COPY(source: string, dest: string){
}


/* Find top 10 files starting with the provided prefix. Order results by their size in descending
order, and in case of a tie by file name. */
function FILE_SEARCH(prefix: string){

}

function FILE_UPLOAD_AT(timestamp: number, file_name: string, file_size: number, ttl: number){

}

function FILE_GET_AT(timestamp: number, file_name: string){

}

/*
    The uploaded file is available for ttl seconds.
 */
function FILE_COPY_AT(timestamp: number, file_from: string, file_to: string){

}

function FILE_SEARCH_AT(timestamp: number, prefix: string){

}

/* 
    ◦ Rollback the state of the file storage to the state specified in the timestamp
    ◦ All ttls should be recalculated accordingly
*/
function ROLLBACK(timestamp: number){

}

/*
Simulates a coding framework operation on a list of lists of strings.

Parameters:
list_of_lists (List[List[str]]): A list of lists containing strings.
*/
export function simulate_coding_framework(list_of_lists: Array<Array<string>>){
    const functionMap = {
        FILE_UPLOAD: FILE_UPLOAD,
        FILE_GET: FILE_GET,
        FILE_COPY: FILE_COPY,
        FILE_SEARCH: FILE_SEARCH,
        FILE_UPLOAD_AT: FILE_UPLOAD_AT,
        FILE_GET_AT: FILE_GET_AT,
        FILE_COPY_AT: FILE_COPY_AT,
        FILE_SEARCH_AT: FILE_SEARCH_AT,
        ROLLBACK: ROLLBACK
    }
    return list_of_lists.map((list) => {
        const [functionName, ...args] = list
        return functionMap[functionName](...args)
    })


}
 