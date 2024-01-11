import {CoinData} from "@/types";
import CoinPicker from "../coinPickerForm";
import {useEffect, useState} from "react";
import SwitchCoinButton from "../switchCoinButton";
import styled from "styled-components";

const ConverterWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

type Props = {
  data: CoinData[] | undefined;
};

const getCoinBySlug = (data: CoinData[], slug: string) => {
  return data.find((value) => value.slug === slug);
};

export default function Converter({data}: Props): JSX.Element {
  const [coinFrom, setCoinFrom] = useState<CoinData>();
  const [coinTo, setCoinTo] = useState<CoinData>();
  const [rate, setRate] = useState<string | number>("");

  /*
   Задаются первоначальные значения для конвертации валют.
  */
  useEffect(() => {
    if (data) {
      const firstCoin = data[0];
      const secondCoin = data[1];

      setCoinFrom(firstCoin);
      setCoinTo(secondCoin);
    }
  }, [data]);

  const changeCoinFromHandler = (slug: string) => {
    const coin = getCoinBySlug(data!, slug);
    setCoinFrom(coin);
  };

  const changeCoinToHandler = (slug: string) => {
    const coin = getCoinBySlug(data!, slug);
    setCoinTo(coin);
  };

  const switchCoins = () => {
    setCoinFrom(coinTo);
    setCoinTo(coinFrom);
  };

  if (data && coinTo && coinFrom) {
    return (
      <>
        <ConverterWrapper>
          <CoinPicker
            data={data}
            coinFrom={coinFrom}
            coinTo={coinTo}
            enteredRate={rate}
            setEnteredRate={setRate}
            changeCoinHandler={changeCoinFromHandler}
          />
          <SwitchCoinButton handleClick={switchCoins} />
          <CoinPicker
            data={data}
            enteredRate={rate}
            coinFrom={coinTo}
            coinTo={coinFrom}
            changeCoinHandler={changeCoinToHandler}
          />
        </ConverterWrapper>
      </>
    );
  } else {
    return <>Loading...</>;
  }
}
