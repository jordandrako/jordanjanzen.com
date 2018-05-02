export function truncate(string, length = 20, endsIn = '...') {
  return string.length > length + 3
    ? `${string.substring(0, length - 3)}${endsIn}`
    : string;
}

export default truncate;
