import CoinPicker from "../coinPickerForm";

type Props = {
  data: {
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
  }[];
};

export default function Converter(props: Props): JSX.Element {
  if (props.data) {
    return (
      <div>
        Converter Element
        <CoinPicker coin={props.data[0]} />
        <CoinPicker coin={props.data[1]} />
      </div>
    );
  }else{
    return <>hi</>
  }
}
