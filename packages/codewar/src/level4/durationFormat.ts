/**
 * Human readable duration format
 * https://www.codewars.com/kata/human-readable-duration-format/train/javascript
 */

export function formatDuration(seconds: number): string {
  const timeBreakdown = parseTimeBreakdown(seconds);
  return printTimeBreakdown(timeBreakdown);
}

interface TimeBreakdown {
  secondSection: number,
  minuteSection: number,
  hourSection: number,
  daySection: number,
  yearSection: number,
}

function parseTimeBreakdown(seconds: number): TimeBreakdown {
  const secondSection = seconds % 60;
  const minutes = (seconds - secondSection) / 60;
  const minuteSection = minutes % 60;
  const hours = (minutes - minuteSection) / 60;
  const hourSection = hours % 24;
  const days = (hours - hourSection) / 24;
  const daySection = days % 365;
  const yearSection = (days - daySection) / 365;
  return {
    secondSection,
    minuteSection,
    hourSection,
    daySection,
    yearSection,
  };
}

function printTimeBreakdown(breakdown: TimeBreakdown): string {
  const {
    secondSection,
    minuteSection,
    hourSection,
    daySection,
    yearSection
  } = breakdown;
  const formattedBreakdown = [
    format(yearSection, 'year'),
    format(daySection, 'day'),
    format(hourSection, 'hour'),
    format(minuteSection, 'minute'),
    format(secondSection, 'second')]
    .filter(str => str !== '');
  if (formattedBreakdown.length === 0) {
    return 'now';
  }
  const combinedString = formattedBreakdown.join(', ');
  return combinedString.replace(/,\s(?!.*,)/, ' and ');
}

function format(num: number, unit: string) {
  if (num === 0) {
    return '';
  }

  return `${num} ${unit}${num > 1 ? 's' : ''}`;
}
