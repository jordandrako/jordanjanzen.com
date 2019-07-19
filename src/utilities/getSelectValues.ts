export const getSelectValues = (select: any): string[] => {
  const result: string[] = [];
  const options: any[] = select && select.options;

  options.forEach(option => {
    if (option.selected) {
      result.push(option.value || option.text);
    }
  });

  return result;
};
