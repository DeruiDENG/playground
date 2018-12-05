// The input is a string str of digits.Cut the string into chunks(a chunk here is a substring of the initial string) of size sz(ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position.Put together these modified chunks and return the result as a string.

//   If

// sz is <= 0 or if str is empty return ""
// sz is greater(>) than the length of str it is impossible to take a chunk of size sz hence return "".
//   Examples:
// revrot("123456987654", 6)-- > "234561876549"
// revrot("123456987653", 6)-- > "234561356789"
// revrot("66443875", 4)-- > "44668753"
// revrot("66443875", 8)-- > "64438756"
// revrot("664438769", 8)-- > "67834466"
// revrot("123456779", 8)-- > "23456771"
// revrot("", 8)-- > ""
// revrot("123456779", 0)-- > ""
// revrot("563000655734469485", 4)-- > "0365065073456944"

export class G964 {
  public static revrot(str: string, sz: number) {
    const chunks = G964.getChunks(str, sz);
    const transformedChunks = chunks.map(chunk => G964.transformChunk(chunk));
    return transformedChunks.join('');
  }

  private static transformChunk(str: string) {
    return G964.isNeedReverseChunk(str) ? G964.revert(str) : G964.shift(str);
  }

  private static isNeedReverseChunk(str: string) {
    const qubeTotal = G964.getChunkQubeTotal(str);
    return qubeTotal % 2 === 0;
  }

  private static getChunkQubeTotal(str: string): number {
    const cubeArray = str
      .split('')
      .map(char => Number(char))
      .map(number => Math.pow(number, 3));
    return cubeArray.reduce((acc, item) => acc + item, 0);
  }

  private static getChunks(str: string, sz: number): string[] {
    if (sz <= 0 || !str) {
      return [];
    }

    const chunks: string[] = [];
    for (let i = 0; i < str.length; i += sz) {
      const chunk = str.substr(i, sz);
      if (chunk.length === sz) {
        chunks.push(chunk);
      }
    }

    return chunks;
  }

  private static shift(str: string): string {
    const strAsArray = G964.toArray(str);
    return [...strAsArray.slice(1), strAsArray[0]].join('');
  }

  private static revert(str: string) {
    return G964.toArray(str)
      .reverse()
      .join('');
  }

  private static toArray(str: string): string[] {
    return str.split('');
  }
}

