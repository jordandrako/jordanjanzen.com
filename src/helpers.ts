export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function rando(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export function getFileExtension(): string {
  const fileExtensions = [
    ".js",
    ".html",
    ".md",
    ".php",
    ".csv",
    ".jsx",
    ".db",
    ".ini",
    ".css",
    ".sh",
    ".txt",
    ".xml",
    ".scss",
    ".styl",
    ".sql",
    ".bat",
    ".rss",
    ".xhtml",
    ".conf",
    ".json",
    ".lua",
    ".py",
    // Some fun ones
    ".coffee",
    ".lol",
    // Some bonus emojis for fun
    " ⚛",
    " ☕",
    " 🔥",
    " 🕸"
  ];

  return rando(fileExtensions);
}

export function truncate(text: string, length = 20, endsIn = "...") {
  return text.length > length + 3
    ? `${text.substring(0, length - 3)}${endsIn}`
    : text;
}

export function getSelectValues(select: any) {
  const result = [];
  const options = select && select.options;
  let opt;

  for (let i = 0, iLen = options.length; i < iLen; i += 1) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}
