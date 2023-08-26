import { login } from "./pages";
import { CardService, UserService } from "./service";

const cardService = new CardService();
const userService = new UserService();

function init() {
	login(cardService, userService);
}

init();
