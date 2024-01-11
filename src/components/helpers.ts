/**
 * Высчитывает стоимость в момент времени
 * исходя из текущей стоимости и процента изменения цены.
 *
 * @param percentChange - Изменение цены в проценатах.
 * @param currentPrice -  Текущая стоимость.
 * @returns - Стоимость на момент изменения цены.
 */
export const getHistoricPrice = (
  percentChange: number,
  currentPrice: number
): number => {
  return (Math.abs(100 + percentChange) / 100) * currentPrice;
};

/**
 * Обрезает у числа количество знаков после запятой, либо добавляет если их небыло.
 *
 * @param value - Числовое значение.
 * @param length - Количество знаков после точки.
 * @returns Возвращает строку представляющую число с фиксированным количеством знаков после точки.
 */
export const fixDecimalsPart = (value: number, length: number) => {

  const dot = length ? "." : "";

  if (`${value}`.includes(".")) {
    const [wholePart, floatPart] = value
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 20,
      })
      .split(".");

    // Удаляю из целой части запятые и обрезаю количество символов после точки.
    console.log(
      `${wholePart.replaceAll(",", "")}${dot}${floatPart.substring(0, length)}`
    );
    return `${wholePart.replaceAll(",", "")}${dot}${floatPart.substring(
      0,
      length
    )}`;
  }

  return `${value}${dot}${new Array(length).fill(0).join("")}`;
};

/**
 * Форматирует число
 *  - для чисел больше миллиарда делит на 1,000,000,000 и добавляет B.
 *  - для чисел больше миллиарда делит на 1,000,000 и добавляет M.
 *  - для чисел меньше 10 определяет количество знаков после запятой
 *    и приводит числа вида 0.0000000123 к 0.00...123.
 *
 * @param value - Форматируемое число.
 * @returns Возвращает строку представляющую число с фиксированным количеством знаков после точки.
 */
export const formatValue = (value: number): string => {
  if (value > 1000000000) {
    return `${fixDecimalsPart(value / 1000000000, 2)} B`;
  }
  if (value > 1000000) {
    return `${fixDecimalsPart(value / 1000000, 2)} M`;
  }

  if (value < 10) {
    let [wholePart, floatingPart] = Number(`${value}`)
      .toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 20,
      })
      .split(".");

    const zeroPart = floatingPart.match(/(0{4,})/);
    if (zeroPart) {
      floatingPart = `${floatingPart.replace(zeroPart[0], "00...")}`;
    }
    return `${wholePart}.${floatingPart.substring(0, 8)}`;
  }

  return fixDecimalsPart(value, 5);
};
