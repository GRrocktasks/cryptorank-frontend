import useSWR from "swr";

import Converter from "../../components/converter";

export default function ConverterPage(): JSX.Element {
  const {data} = useSWR<any>(
    "https://api.cryptorank.io/v1/currencies/?api_key=0f0be3468c349558a4cc9c557ebb1bfbc4d7bf6c79cffa5620d42b7b9e5d"
  );
  console.log(data);
  return <main>{<Converter data={data} />}</main>;
}
