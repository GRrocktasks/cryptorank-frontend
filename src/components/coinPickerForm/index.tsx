import styled from "styled-components";
import CoinPickerMenu from "../coinPickerMenu";
import {bgColor, borderColor, secondTextColor, textColor} from "../colors";
import {CoinData} from "@/types";
import {fixDecimalsPart} from "../helpers";

const InputForm = styled.div`
  display: flex;
  padding: 16px 24px 10px;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border: 1px ${borderColor} solid;
  border-radius: 20px;
  transition-duration: 0.3s;
  background: ${bgColor};
  flex-direction: column;
  height: auto;
  align-items: flex-start;
  gap: 0px;
  width: -webkit-fill-available;
  @media (max-width: 1200px) {
  }
`;
const RateBlock = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(173, 180, 193, 0.2);
`;

const Input = styled.input`
  color: ${textColor};
  height: 24px;
  line-height: 1;
  background: none;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 600;
  padding: 0px;
  white-space: nowrap;
  font-size: 18px;
  width: 100%;
`;

const P = styled.p`
  font-size: 14px;
  color: ${secondTextColor};
  margin: 6px 0px 0px;
  white-space: nowrap;
`;

type CoinPickerProps = {
  coinFrom: CoinData;
  coinTo: CoinData;
  enteredRate: string | number;
  setEnteredRate?: (value: string | number) => void;
  data: CoinData[];
  changeCoinHandler: (slug: string) => void;
};

export default function CoinPickerForm({
  coinFrom,
  coinTo,
  data,
  enteredRate,
  changeCoinHandler,
  setEnteredRate,
}: CoinPickerProps): JSX.Element {
  const getRate = () => {
    const {
      symbol: symbolFrom,
      values: {
        USD: {price: priceFrom},
      },
    } = coinFrom;

    const {
      symbol: symbolTo,
      values: {
        USD: {price: priceTo},
      },
    } = coinTo;
    const price = priceFrom / priceTo;
    const fixedPrice =
      price < 1 ? fixDecimalsPart(price, 7) : fixDecimalsPart(price, 3);
    return `1 ${symbolFrom} = ${symbolTo} ${fixedPrice}`;
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {value},
    } = e;
    /*
      Проверяю ввденое значение на корректность.
      Если оно не конвертируется в число то заменяем значение на 0.
      Если в введеном значение есть точка то осталяем ее в инпуте.
      Подсчитываю количество сплитов строки по точкам, чтобы исключить случаи когда точек больше 1.
    */
    const dotsLength = value.split(".").length;
    if (value[value.length - 1] !== "." || dotsLength > 2) {
      setEnteredRate!(+value ? +value : 0);
    } else {
      setEnteredRate!(value);
    }
  };

  const getConvertedRate = (rate: number): JSX.Element => {
    const {
      symbol: symbolFrom,
      values: {
        USD: {price: priceFrom},
      },
    } = coinFrom;

    const {
      values: {
        USD: {price: priceTo},
      },
    } = coinTo;

    const convertedRate = (rate * priceTo) / priceFrom;

    return (
      <>
        <b>{symbolFrom}</b> {convertedRate}
      </>
    );
  };

  return (
    <InputForm>
      <RateBlock>
        {setEnteredRate ? (
          <Input
            value={enteredRate}
            placeholder="0"
            onChange={inputChangeHandler}
          />
        ) : (
          <div>{getConvertedRate(+enteredRate)}</div>
        )}
        <P style={{whiteSpace: "nowrap"}}>{getRate()}</P>
      </RateBlock>
      <CoinPickerMenu
        coin={coinFrom}
        data={data}
        changeCoinHandler={changeCoinHandler}
      />
    </InputForm>
  );
}
