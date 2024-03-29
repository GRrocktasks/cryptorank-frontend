import styled from "styled-components";
import {bgColor, mainBlueColor} from "../colors";

const Container = styled.div`
  background-color: ${bgColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-width: 100px;
  height: 54px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 10px;
  background-color: initial;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 0;
  color: ${mainBlueColor};
`;

const SelectWrapper = styled.div`
  margin: 0 10px;
`;

const PageLabel = styled.div`
  width: 20px;
  text-align: center;
`;

type TablePaginationProps = {
  page: number;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  count: number;
  onPageChange: (e: React.MouseEvent, page: number) => void;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CoinsTablePagination({
  rowsPerPageOptions,
  rowsPerPage,
  page,
  onRowsPerPageChange,
  onPageChange,
  count,
}: TablePaginationProps): JSX.Element {
  const getListOptions = (): JSX.Element[] =>
    rowsPerPageOptions.map((value) => <option key={value}>{value}</option>);
  return (
    <Container>
      <ButtonsWrapper>
        <Button
          style={{visibility: page ? "visible" : "hidden"}}
          onClick={(e) => onPageChange(e, page - 1)}
        >
          {"<"}
        </Button>
        <PageLabel>{page + 1}</PageLabel>
        <Button
          style={{
            visibility: (page + 1) * rowsPerPage < count ? "visible" : "hidden",
          }}
          onClick={(e) => onPageChange(e, page + 1)}
        >
          {">"}
        </Button>
      </ButtonsWrapper>
      <SelectWrapper>
        <select onChange={onRowsPerPageChange}>{getListOptions()}</select>
      </SelectWrapper>
    </Container>
  );
}
