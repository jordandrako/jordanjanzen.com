import { rando } from './rando';

export function getFileExtension(): string {
  const fileExtensions = [
    '.js',
    '.ts',
    '.tsx',
    '.html',
    '.md',
    '.php',
    '.jsx',
    '.css',
    '.sh',
    '.txt',
    '.xml',
    '.scss',
    '.bat',
    '.json',
    // Some fun ones
    '.coffee',
    '.lol',
    // Some bonus emojis for fun
    ' ⚛',
    ' ☕',
    ' 🔥',
    ' 🕸',
  ];

  return rando(fileExtensions);
}
