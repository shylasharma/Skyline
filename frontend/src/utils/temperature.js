export function convertTemperature(temp, unit) {
  if (unit === "F") {
    return Math.round((temp * 9) / 5 + 32);
  }

  return Math.round(temp);
}