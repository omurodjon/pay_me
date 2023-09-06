import "bootstrap/dist/css/bootstrap.min.css";
import "./projects/pay-me/typescript/index";
import { register } from "./projects/pay-me/typescript/pages";
import { userService, cardService } from "./projects/pay-me/typescript/index";
const logInBtn: HTMLButtonElement = document.querySelector(".log-In");

logInBtn.addEventListener("click", () => {
  function init() {
    register(cardService, userService);
  }
  init();
});
