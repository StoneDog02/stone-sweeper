import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

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
  display: flex;
  flex-flow: row wrap;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  background: grey;
  cursor: pointer;
`;
const NoMine = styled.div`
  height: 30px;
  width: 30px;
  background: grey;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function GameButton() {
  const [buttonClicked, setButtonClicked] = useState(false);
  if (buttonClicked) {
    return <NoMine>1</NoMine>;
  }
  return <Button onClick={() => setButtonClicked(true)}>0</Button>;
}

export default function App() {
  return (
    <GameContainer>
      <Timer>25</Timer>
      <FlagCounter>10</FlagCounter>
      <MineField>
        {new Array(100).fill(undefined).map((item, i) => (
          <GameButton />
        ))}
      </MineField>
      <Smiley>😎</Smiley>
    </GameContainer>
  );
}
