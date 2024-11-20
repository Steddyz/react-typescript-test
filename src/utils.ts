import { GAMES, GamesFromServer } from "./data";

export function getGamesFromServer(): Promise<GamesFromServer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(price: number) {
  return `${price} Руб.`;
}
