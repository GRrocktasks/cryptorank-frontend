import {CoinData} from "@/types";
import CoinsTableHeader from "../coinsTableHeader";
import styled from "styled-components";
import {formatValue, getHistoricPrice} from "../helpers";
import TablePagination from "../tablePagination";
import {useState} from "react";

const Table = styled.table`
  width: 100%;
  padding: 0 20px;
  border-collapse: collapse;
`;

const Td = styled.td`
  text-align: end;
`;

export default function CoinsTable({data}: {data: CoinData[]}): JSX.Element {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (e: React.MouseEvent, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getRows = (
    data: CoinData[],
    page: number,
    rowsPerPage: number
  ): JSX.Element[] =>
    data
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((coin) => {
        const {
          name,
          circulatingSupply,
          category,
          values: {
            USD: {
              price,
              marketCap,
              percentChange3m,
              percentChange6m,
              percentChange24h,
              percentChange7d,
              percentChange30d,
            },
          },
        } = coin;
        return (
          <tr key={coin.slug}>
            <td>{name}</td>
            <Td>{formatValue(price)}</Td>
            <Td>{formatValue(circulatingSupply)}</Td>
            <Td>{formatValue(marketCap)}</Td>
            <Td>{category}</Td>
            <Td>{formatValue(getHistoricPrice(percentChange3m, price))}</Td>
            <Td>{formatValue(getHistoricPrice(percentChange6m, price))}</Td>
            <Td>{formatValue(getHistoricPrice(percentChange24h, price))}</Td>
            <Td>{formatValue(getHistoricPrice(percentChange7d, price))}</Td>
            <Td>{formatValue(getHistoricPrice(percentChange30d, price))}</Td>
          </tr>
        );
      });

  return (
    <>
      <Table>
        <CoinsTableHeader />
        <tbody>{getRows(data, page, rowsPerPage)}</tbody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
