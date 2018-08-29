type Result =
    | { success: true; response: string }
    | { success: false; error: string };

let result1: Result = {success: true, response: 'DOT'};
let result2: Result = {success: false, error: "Error text"};

function processResult(result: Result) {
    if (result.success) {
        console.log(`Success with response: ${result.response}`);
    } else {
        console.log(`Failed with error: ${result.error}`);
    }
}

processResult(result1);
processResult(result2);
