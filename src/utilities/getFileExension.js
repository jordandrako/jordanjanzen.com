import random from './random';

export function getFileExtension() {
  const fileExtensions = [
    '.js',
    '.html',
    '.md',
    '.php',
    '.csv',
    '.jsx',
    '.db',
    '.ini',
    '.css',
    '.sh',
    '.txt',
    '.xml',
    '.scss',
    '.styl',
    '.sql',
    '.bat',
    '.rss',
    '.xhtml',
    '.conf',
    '.json',
    '.lua',
    '.py',
    // Some fun ones
    '.coffee',
    '.lol',
    // Some bonus emojis for fun
    ' ⚛',
    ' ☕',
    ' 🔥',
    ' 🕸'
  ];

  return random(fileExtensions);
}

export default getFileExtension;
