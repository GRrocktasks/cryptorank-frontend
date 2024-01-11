import useSWR from "swr";

import Converter from "../../components/converter";
import {CoinData} from "@/types";

export default function ConverterPage(): JSX.Element {
  const {data} = useSWR<CoinData[]>(
    "https://api.cryptorank.io/v1/currencies/?api_key=0f0be3468c349558a4cc9c557ebb1bfbc4d7bf6c79cffa5620d42b7b9e5d"
  );

  // const [coins, setCoins] = useState(data);

  // useEffect(() => {
  //   const getChainFetch = async (
  //     index: number,
  //     data: CoinData[],
  //     rv = []
  //   ): Promise<never[]> => {
  //     if (index >= data.length - 1) {
  //       return rv;
  //     }
  //     try {
  //       console.log(index, "index");
  //       console.log(data.length - 1, "data.length - 1");

  //       const {slug} = data[index];
  //       const coinInfo = await fetch(
  //         `https://tstapi.cryptorank.io/v0/coins/${slug}`
  //       );
  //       const coinData = (await coinInfo.json()) as never;
  //       rv.push(coinData);
  //     } catch (e) {
  //       console.log(e);
  //     } finally {
  //       return getChainFetch(index + 1, data, rv);
  //     }
  //   };
  // const fetchMoreData = async (data: CoinData[] | undefined) => {
  //   if (data) {
  //     // let i = 0;
  //     // const result = [];
  //     // while (true) {
  //     //   if (i === data.length - 1) {
  //     //     break;
  //     //   }
  //     //   const {slug} = data[i];
  //     //   const coinInfo = Promise.resolve().then(() =>
  //     //     fetch(`https://tstapi.cryptorank.io/v0/coins/${slug}`)
  //     //   );
  //     //   result.push(coinInfo);
  //     //   i++;
  //     // }
  //     // const rv = await Promise.allSettled(result);
  //     // const rv = await getChainFetch(0, data);

  //     console.log(rv);

  //     setCoins(coins);
  //   }
  // };

  // fetchMoreData(data);
  // }, [data]);
  console.log(data);
  return data ? (
    <>
      <main>{<Converter data={data} />}</main>
    </>
  ) : (
    <></>
  );
}
