export function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function getFileExtension() {
  const fileExtensions = [
    '.js',
    '.html',
    '.md',
    '.php',
    '.cf',
    '.lol',
    '.csv',
    '.jsx',
    '.db',
    '.ini',
    '.java',
    '.css',
    '.sh',
    '.txt',
    '.asp',
    '.xml',
    '.scss',
    '.coffee',
    '.sql',
    '.bat',
    '.rss',
    '.xhtml',
    '.conf',
    '.json',
    '.lua',
    '.py',
    '.vb',
    '.java',
    // Some bonus emojis for fun
    ' ⚛',
    ' ☕',
    ' 🔥',
  ];

  return rando(fileExtensions);
}

export function truncate(string, length = 20) {
  return string.length > length + 3
    ? `${string.substring(0, length - 3)}...`
    : string;
}
