import { FC } from "react";

import { GameFromServer } from "./data";

type GameFromApp = Pick<GameFromServer, "name" | "description" | "version">;

const Game: FC<GameFromApp> = ({ name, description, version }) => {
  return (
    <div>
      <p>Имя: {name}</p>
      <p>Описание: {description}</p>
      <p>Версия: {version}</p>
    </div>
  );
};

export default Game;
