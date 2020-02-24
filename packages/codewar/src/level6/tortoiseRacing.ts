/* Two tortoises named A and B must run a race.A starts with an average speed of 720 feet per hour.Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1(A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g(integer > 0) how long will it take B to catch A ?

  The result will be an array[hour, min, sec] which is the time needed in hours, minutes and seconds(round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or { -1, -1, -1 } for C++ , C, Go, Nim, [] for Kotlin or "-1 -1 -1".

  Examples:
  (form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
  ** Note:

See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Think of calculation by hand using only integers(in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds" */

export class G964 {
  public static race = (v1, v2, g) => {
    if (g < 0 || v2 <= v1) {
      return null;
    }

    const timeNeededInSeconds = Math.floor((g * 3600) / (v2 - v1));
    return convertSecondsToBreakdown(timeNeededInSeconds);
  };
}

function convertSecondsToBreakdown(seconds: number): [number, number, number] {
  const formattedHour = Math.floor(seconds / 3600);
  const formattedMinutes = Math.floor((seconds - formattedHour * 3600) / 60);
  const formattedSeconds = Math.floor(
    seconds - formattedHour * 3600 - formattedMinutes * 60
  );
  return [formattedHour, formattedMinutes, formattedSeconds];
}
