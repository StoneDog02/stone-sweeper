import { css } from "@emotion/react";
import styled from "@emotion/styled";

const GameContainer = styled.div`
  height: 330px;
  width: 330px;
  background: rebeccapurple;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Timer = styled.div`
  height: 30px;
  width: 50px;
  background: black;
  color: red;
  position: absolute;
  left: 280px;
`;

export default function App() {
  return (
    <GameContainer>
      <Timer>25</Timer>
    </GameContainer>
  );
}
