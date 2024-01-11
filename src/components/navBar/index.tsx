import styled from "styled-components";
import {useRouter} from "next/router";
import {mainBlueColor, secondTextColor} from "../colors";

const Nav = styled.nav`
  padding: 10px;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0;
  justify-content: start;
  list-style: none;
`;

const Li = styled.li`
  margin-left: 15px;
`;

const A = styled.a`
  cursor: pointer;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
`;

export default function NavBar(): JSX.Element {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Nav>
      <Ul>
        <Li>
          <A
            style={{
              color: router.asPath === "/" ? mainBlueColor : secondTextColor,
            }}
            onClick={(e) => handleClick(e, "/")}
          >
            Watch list
          </A>
        </Li>
        <Li>
          <A
            onClick={(e) => handleClick(e, "/converter")}
            style={{
              color:
                router.asPath === "/converter"
                  ? mainBlueColor
                  : secondTextColor,
            }}
          >
            Converter
          </A>
        </Li>
      </Ul>
    </Nav>
  );
}
