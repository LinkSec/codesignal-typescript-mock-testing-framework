class FileServer {
    /* 
    Upload the file to the remote storage server
    ○ If a file with the same name already exists on the server, throws a runtime exception
    */
    FILE_UPLOAD(fileName: string, size: number) {
    }


    /* 
    Returns size of the file, or nothing if the file doesn’t exist
    */
    FILE_GET(file_name: string) {
    }

    /*
    Copy the source file to a new location
    ○ If the source file doesn’t exist, throws a runtime exception
    ○ If the destination file already exists, overwrites the existing file
    */
    FILE_COPY(source: string, dest: string) {
    }


    /* Find top 10 files starting with the provided prefix. Order results by their size in descending
    order, and in case of a tie by file name. */
    FILE_SEARCH(prefix: string) {

    }

    FILE_UPLOAD_AT(timestamp: number, file_name: string, file_size: number, ttl: number) {

    }

    FILE_GET_AT(timestamp: number, file_name: string) {

    }

    /*
        The uploaded file is available for ttl seconds.
     */
    FILE_COPY_AT(timestamp: number, file_from: string, file_to: string) {

    }

    FILE_SEARCH_AT(timestamp: number, prefix: string) {

    }

    /* 
        ◦ Rollback the state of the file storage to the state specified in the timestamp
        ◦ All ttls should be recalculated accordingly
    */
    ROLLBACK(timestamp: number) {

    }

}
/*
Simulates a coding framework operation on a list of lists of strings.

Parameters:
list_of_lists (List[List[str]]): A list of lists containing strings.
*/
export function simulate_coding_framework(list_of_lists: Array<Array<string>>){
    const fileServer = new FileServer()
    const functionMap = {
        FILE_UPLOAD: fileServer.FILE_UPLOAD,
        FILE_GET: fileServer.FILE_GET,
        FILE_COPY: fileServer.FILE_COPY,
        FILE_SEARCH: fileServer.FILE_SEARCH,
        FILE_UPLOAD_AT: fileServer.FILE_UPLOAD_AT,
        FILE_GET_AT: fileServer.FILE_GET_AT,
        FILE_COPY_AT: fileServer.FILE_COPY_AT,
        FILE_SEARCH_AT: fileServer.FILE_SEARCH_AT,
        ROLLBACK: fileServer.ROLLBACK
    }
    return list_of_lists.map((list) => {
        const [functionName, ...args] = list
        return functionMap[functionName](...args)
    })


}
