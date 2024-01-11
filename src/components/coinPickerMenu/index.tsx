import {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {greyBgColor, textColor} from "../colors";
import {CoinData} from "@/types";

const PickerMenu = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  line-height: normal;
  padding: 0px;
  width: 100%;
  color: ${textColor};
`;

const MenuContainer = styled.div`
  z-index: 16;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 40px;
  width: 100%;
  min-width: 257px;
  position: absolute;
  top: calc(100% + 6px);
  left: 0px;
`;

const MenuHeader = styled.h6`
  margin: 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-right: 15px;
  font-size: 16px;
  list-style: none;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease 0s;

  &:hover {
    background-color: ${greyBgColor};
    filter: contrast(1);
  }
`;

const Menu = styled.menu``;

const OpenMenuButton = ({
  handler,
  isOpen,
}: {
  handler: () => void;
  isOpen: boolean;
}): JSX.Element => {
  return (
    <div style={{cursor: "pointer"}}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handler}
      >
        <path
          d="M18.998 6.994a1.417 1.417 0 0 1 2 2.008L12 18 3.002 9.002a1.417 1.417 0 0 1 2-2.008L12 13.938l6.998-6.944Z"
          fill="#424961"
          transform={`rotate(${isOpen ? 180 : 0})`}
          style={{transformOrigin: "center"}}
        />
      </svg>
    </div>
  );
};

type CoinPickerProps = {
  coin: CoinData;
  data: CoinData[];
  changeCoinHandler: (slug: string) => void;
};

const getMenu = (
  data: CoinData[],
  changeCoinHandler: (name: string) => void,
  setOpen: (value: boolean) => void
): JSX.Element => {
  return (
    <Menu>
      <MenuHeader>Cryptocurrencies</MenuHeader>
      <MenuList>
        {data.slice(0, 6).map(({name, slug}) => (
          <MenuItem
            key={name}
            onClick={() => {
              setOpen(false);
              changeCoinHandler(slug);
            }}
          >
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default function CoinPickerMenu({
  coin,
  data,
  changeCoinHandler,
}: CoinPickerProps): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    setOpen(!isOpen);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {value},
    } = e;
    setInputValue(value);
    const newData = data.filter(({name}) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredData(newData);
  };

  return (
    <PickerMenu>
      {isOpen ? (
        <>
          <Input value={inputValue} type="text" onChange={changeHandler} />
          <MenuContainer>
            {getMenu(filteredData, changeCoinHandler, setOpen)}
          </MenuContainer>
        </>
      ) : (
        <div style={{width: "100%"}} onClick={clickHandler}>
          <b>{coin.name}</b> {coin.symbol}
        </div>
      )}
      <OpenMenuButton handler={clickHandler} isOpen={isOpen} />
    </PickerMenu>
  );
}
