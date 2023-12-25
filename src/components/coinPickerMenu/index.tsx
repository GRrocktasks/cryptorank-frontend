import {useState} from "react";
import styled from "styled-components";

const bgColor = "#eef4fa";
const borderColor = "#eef4fa";
const textColor = "#424961";
const secondColor = "#789";

const PickerMenu = styled.div`
  width: 100%;
  display: flex;
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
// 8 X 8

export default function CoinPickerMenu({coin}: CoinPickerProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <PickerMenu onClick={clickHandler}>
      {isOpen ? (
        <div>
          <b>{coin.name}</b> {coin.symbol}
        </div>
      ) : (
        <div>close</div>
      )}
      <div style={{marginLeft: "auto"}}>{isOpen ? "/\\" : "\\/"}</div>
    </PickerMenu>
  );
}
//<CoinPickerMenu />
