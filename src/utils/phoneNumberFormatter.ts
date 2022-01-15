export const phoneNumberFormatter = (value: string) => {
  const formattedValue = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  return formattedValue;
};
