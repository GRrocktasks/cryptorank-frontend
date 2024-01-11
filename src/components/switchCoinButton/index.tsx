import styled from "styled-components";
import {mainBlueColor} from "../colors";

const Button = styled.button`
  background-color: ${mainBlueColor};
  height: 33px;
  min-width: 33px;
  padding: 0;
  margin: 10px;
  position: relative;
  display: inline-flex;
  line-height: 1;
  border-radius: 10px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  user-select: none;
  font-family: "Noto Sans";
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid ${mainBlueColor};
`;

export default function SwitchCoinButton({
  handleClick,
}: {
  handleClick: (e: React.MouseEvent) => void;
}): JSX.Element {
  return (
    <Button onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m20.5 14.99-5.01 5.02M3.5 14.99h17M3.5 9.01l5.01-5.02M20.5 9.01h-17"
          stroke="#fff"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
