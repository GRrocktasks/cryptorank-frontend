import styled from "styled-components";
import {bgColor} from "../colors";

const THead = styled.thead`
  background-color: ${bgColor};

  height: 54px;
`;

const TRow = styled.tr`
  background-color: ${bgColor};
`;

const Th = styled.th`
  position: relative;
  text-align: end;
  padding-left: 24px;
  padding-right: 9px;
  white-space: nowrap;
  min-width: auto;
`;

export default function CoinsTable(): JSX.Element {
  return (
    <THead>
      <TRow>
        <Th style={{textAlign: "start", borderRadius: "10px 0px 0px"}}>Name</Th>
        <Th>Price USD</Th>
        <Th>Circulating Supply</Th>
        <Th>Market Cap</Th>
        <Th>Category</Th>
        <Th>Price 3m</Th>
        <Th>Price 6m</Th>
        <Th>Price 24h</Th>
        <Th>Price 7d</Th>
        <Th style={{borderRadius: "0px 10px 0px 0px"}}>Price 30d</Th>
      </TRow>
    </THead>
  );
}
