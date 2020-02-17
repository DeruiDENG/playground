export class Challenge {
  static getMiddle(s: string) {
    const length = s.length;
    if (length <= 2) {
      return s;
    } else if (length % 2 === 0) {
      'aaaa';
      return s.substr(length / 2 - 1, 2);
    } else {
      'aaa'
      return s.substr((length - 1) / 2, 1);
    }
  }
}