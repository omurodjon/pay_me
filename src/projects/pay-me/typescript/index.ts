import { dashboard, login, register } from "./pages";
import { CardService, UserService } from "./service";

export const cardService = new CardService();
export const userService = new UserService();

export function init() {
  // login(cardService, userService);
  // register(cardService, userService);
}

init();
