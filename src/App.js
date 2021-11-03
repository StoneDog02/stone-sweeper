import { css } from "@emotion/react";
import styled from "@emotion/styled";

const GameContainer = styled.div`
  height: 330px;
  width: 300px;
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
  left: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlagCounter = styled.div`
  height: 30px;
  width: 50px;
  background: black;
  color: red;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Smiley = styled.button`
  height: 30px;
  width: 30px;
  background: black;
  color: red;
  position: absolute;
  display: flex;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translate(-50%);
  cursor: pointer;
  &:hover {
    background: #00000099;
  }
`;

const MineField = styled.div`
  height: 300px;
  width: 300px;
  background: grey;
  position: absolute;
  bottom: 0px;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  background: grey;
  cursor: pointer;
`;

export default function App() {
  return (
    <GameContainer>
      <Timer>25</Timer>
      <FlagCounter>10</FlagCounter>
      <MineField>
        <Button></Button>
      </MineField>
      <Smiley>😎</Smiley>
    </GameContainer>
  );
}
