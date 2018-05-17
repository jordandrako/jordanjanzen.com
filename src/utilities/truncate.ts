export function truncate(text: string, length = 20, endsIn = '...') {
  return text.length > length + 3
    ? `${text.substring(0, length - 3)}${endsIn}`
    : text;
}
