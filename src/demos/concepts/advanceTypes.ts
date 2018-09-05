// Union types
interface PricePointProps {
    amount: number,
    color: 'orange' | 'black',
    size: 'small' | 'large' | 300 | 500 | 700;
    currencyCode?: string
}

const pricePointProps: PricePointProps = {
    amount: 5,
    color: 'orange',
    size: 'small',
    currencyCode: 'AUD'
};

// AlternativeTypes
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

processResult(result1); // Success with response DOT
processResult(result2); // Failed with error: Error text

// Generic type
const retrieveDataFromBackend = (): Promise<{ versionNumber: number }> => {
    return Promise.resolve({versionNumber: 5});
};

retrieveDataFromBackend().then(({versionNumber}) => console.log(`Version number is ${versionNumber}`));

