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
  background: ${(props) => (props.isMarked ? "rebeccapurple" : "grey")};
  cursor: pointer;
`;
const NoBomb = styled.div`
  height: 30px;
  width: 30px;
  background: grey;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bomb = styled.div`
  height: 30px;
  width: 30px;
  background: red;
`;

function getRandomBomb(max) {
  return Math.floor(Math.random() * max);
}

function getNBombs(n, max) {
  const bombs = [];
  while (bombs.length < n) {
    const randomBomb = getRandomBomb(max);
    if (!bombs.includes(randomBomb)) bombs.push(randomBomb);
  }
  return bombs;
}

function getBombCount(bombs, pos) {
  let bombCount = 0;
  if (bombs.includes(pos - 1) && pos % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos + 1) && (pos + 1) % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos - 10)) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos + 10)) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos - 10 + 1) && (pos + 1) % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos + 10 + 1) && (pos + 1) % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos - 10 - 1) && pos % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  if (bombs.includes(pos + 10 - 1) && pos % 10 !== 0) {
    bombCount = bombCount + 1;
  }
  return bombCount ? bombCount : "";
}

function GameButton({ bombs, isBomb, pos }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  if (buttonClicked && isBomb) {
    return <Bomb></Bomb>;
  }
  if (buttonClicked && !isBomb) {
    return <NoBomb>{getBombCount(bombs, pos)}</NoBomb>;
  }
  return (
    <Button
      isMarked={isMarked}
      onContextMenu={(event) => {
        event.preventDefault();
        setIsMarked(!isMarked);
      }}
      onClick={() => setButtonClicked(true)}
    ></Button>
  );
}

export default function App() {
  const [bombs, setBombs] = useState(getNBombs(25, 100));
  // const [bombs, setBombs] = useState([1, 3, 25, 15, 13]);
  console.log(bombs);
  return (
    <GameContainer>
      <Timer>25</Timer>
      <FlagCounter>10</FlagCounter>
      <MineField>
        {new Array(100).fill(undefined).map((item, pos) => (
          <GameButton
            key={pos}
            bombs={bombs}
            isBomb={bombs.includes(pos)}
            pos={pos}
          />
        ))}
      </MineField>
      <Smiley>😎</Smiley>
    </GameContainer>
  );
}
