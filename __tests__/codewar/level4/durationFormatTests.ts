import { formatDuration } from '../../../src/codewar/level4/durationFormat';

describe('durationFormat', function () {
  it('should pass basic test', function () {
    expect(formatDuration(1)).toBe("1 second");
    expect(formatDuration(62)).toBe("1 minute and 2 seconds");
    expect(formatDuration(120)).toBe("2 minutes");
    expect(formatDuration(3600)).toBe("1 hour");
    expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds");
    expect(formatDuration(0)).toBe("now");
  });
});
