import styled from "styled-components";
import {bgColor} from "../colors";

const Wrapper = styled.div`
  background-color: ${bgColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 54px;
`;

type TablePaginationProps = {
  page: number;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  count: number;
  onPageChange: (e: React.MouseEvent, page: number) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function TablePagination({
  rowsPerPageOptions,
  page,
  onRowsPerPageChange,
}: TablePaginationProps): JSX.Element {
  const getListOptions = (): JSX.Element[] =>
    rowsPerPageOptions.map((value) => <option>{value}</option>);
  return (
    <Wrapper>
      <div>
        <button>{"<"} </button>
        {page}
        <button>{">"} </button>
      </div>
      <div>
        <select onChange={onRowsPerPageChange}>{getListOptions()}</select>
      </div>
    </Wrapper>
  );
}
