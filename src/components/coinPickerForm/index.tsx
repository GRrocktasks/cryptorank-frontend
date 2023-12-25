import styled from "styled-components";
import CoinPickerMenu from "../coinPickerMenu";

const bgColor = "#eef4fa";
const borderColor = "#eef4fa";
const textColor = "#424961";
const secondColor = "#789";

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
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  padding: 0px;
  white-space: nowrap;
  font-size: 18px;
  width: 100%;
`;

const P = styled.p`
  font-size: 14px;
  color: ${secondColor};
  margin: 6px 0px 0px;
  white-space: nowrap;
`;

const CoinsMenu = styled.menu``;

export type CoinData = {
  category: string;
  circulatingSupply: number;
  id: number;
  lastUpdated: string;
  maxSupply: number;
  name: string;
  rank: number;
  slug: string;
  symbol: string;
  tokens: any[];
  totalSupply: number;
  type: string;
  values: {
    [key: string]: {
      high24h: number;
      low24h: number;
      marketCap: number;
      percentChange3m: number;
      percentChange6m: number;
      percentChange7d: number;
      percentChange24h: number;
      percentChange30d: number;
      price: number;
      volume24h: number;
    };
  };
  volume24hBase: number;
};

type CoinPickerProps = {
  coin: CoinData;
};

export default function CoinPickerForm({coin}: CoinPickerProps): JSX.Element {
  const getRate = (coin: CoinData) => {
    const {
      symbol,
      values: {
        USD: {price},
      },
    } = coin;
    return `1 ${symbol} = $ ${price.toFixed(2)}`;
  };

  return (
    <InputForm>
      <RateBlock>
        <Input placeholder="0" type="number" />
        <P style={{whiteSpace: "nowrap"}}>{getRate(coin)}</P>
      </RateBlock>
      <CoinPickerMenu coin={coin} />
    </InputForm>
  );
}
