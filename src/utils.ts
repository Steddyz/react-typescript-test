import { GAMES, Currency, GamesFromServer, GameFromServer } from "./data";

export function getGamesFromServer(): Promise<GamesFromServer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(
  price: NonNullable<GameFromServer["price"]>,
  currency: GameFromServer["currency"]
) {
  if (currency === Currency.RUB) {
    return `${price} ₽.`;
  } else if (currency === Currency.USD) {
    return `${price} $.`;
  } else if (currency === Currency.EUR) {
    return `${price} €.`;
  }
}
