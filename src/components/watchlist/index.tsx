import {CoinData} from "@/types";
import CoinsTable from "../coinsTable";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 5px;
`;

export default function Watchlist({
  data,
}: {
  data: CoinData[] | undefined;
}): JSX.Element {
  if (data) {
    return (
      <Wrapper>
        <h1>Watchlist Element</h1>
        <CoinsTable data={data} />
      </Wrapper>
    );
  } else {
    return <>Loading...</>;
  }
}
