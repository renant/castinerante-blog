export const cleanStringToId = (clean: string): string => {
  return clean
    .replace(/[^\w\s]/gi, '')
    .split(' ')
    .join('');
};
