export class G964 {
  public static accum(s: string): string {
    let a = '';
    let results: string[] = [];
    for (let i = 0; i < s.length; i++) {
      const repeatTime = i + 1;
      results.push(G964.getRepeatChar(s.charAt(i), repeatTime));
    }
    // your code
    return results.join('-');
  }

  private static getRepeatChar(s: string, repeatTimes: number) {
    const result = s.toLowerCase().repeat(repeatTimes);
    return G964.makeFirstCharUpperCase(result);
  }

  private static makeFirstCharUpperCase(s: string) {
    return s[0].toUpperCase().concat(s.slice(1));
  }
}
