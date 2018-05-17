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
