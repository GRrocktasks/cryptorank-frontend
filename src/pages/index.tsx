import useSWR from "swr";
import {CoinData} from "@/types";
import Watchlist from "@/components/watchlist";

export default function Home(): JSX.Element {
  const {data} = useSWR<CoinData[]>(
    "https://api.cryptorank.io/v1/currencies/?api_key=0f0be3468c349558a4cc9c557ebb1bfbc4d7bf6c79cffa5620d42b7b9e5d"
  );

  return (
    <>
      <Watchlist data={data} />
    </>
  );
}
