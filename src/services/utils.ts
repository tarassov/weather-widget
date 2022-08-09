export function getWindTypeBySpeed(msSpeed: number | undefined): string {
  if (msSpeed === undefined) return "";
  const kph = msSpeed * 3.6;
  switch (true) {
    case kph > 0 && kph < 6:
      return "Light winds";
    case kph >= 6 && kph < 12:
      return "Light breeze ";
    case kph >= 12 && kph < 29:
      return "Gentle breeze ";
    case kph >= 29 && kph < 39:
      return "Fresh breeze";
    case kph >= 39 && kph < 50:
      return "Strong breeze";
    case kph >= 50 && kph < 62:
      return "Moderate gale";
    case kph >= 62 && kph < 75:
      return "Fresh gale";
    case kph >= 75 && kph < 89:
      return "Strong gale";
    case kph >= 89 && kph < 102:
      return "Whole gale";
    case kph >= 103 && kph < 119:
      return " Storm";
    case kph >= 119:
      return "Hurricane";
    default:
      return "Calm and still";
  }
}
export function getWindDirection(deg: number | undefined): string {
  if (!deg) return "";
  const val = Math.floor(deg / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
}
