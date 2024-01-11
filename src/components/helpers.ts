export const getHistoricPrice = (
  percentChange: number,
  currentPrice: number
): number => {
  const sign = percentChange > 0 ? -1 : 1;
  return ((100 - sign * percentChange) / 100) * currentPrice;
};

export const formatValue = (value: number): string => {
  if (value > 1000000000) {
    return `${(value / 1000000000).toFixed(2)} B`;
  }
  if (value > 1000000) {
    return `${(value / 1000000).toFixed(2)} M`;
  }

  if (value < 1) {
    let floatingPart = `${value}`.split(".")[1];
    const zeroPart = floatingPart.match(/(0{4,})/);
    if (zeroPart) {
      floatingPart = `${floatingPart.replace(zeroPart[0], "00...")}`;
    }
    return `0.${floatingPart.substring(0, 8)}`;
  }

  return `${value.toFixed(5)}`;
};