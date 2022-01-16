export const timeFormatter = (value: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let valueFormatter: any = value.split('T');
  valueFormatter = valueFormatter[0];
  valueFormatter = valueFormatter.split('-');
  valueFormatter = `${valueFormatter[1]}/${valueFormatter[2]}/${valueFormatter[0]}`;
  return valueFormatter;
};
