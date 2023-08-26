import { User } from "./../entities/user";
import { CardService, UserService } from "../service";
import { faker } from "@faker-js/faker";
import { CardRepository } from "../repository";

export const dashboard = (
  user: User,
  cardService: CardService,
  userService: UserService
) => {
  const secondUser =
    (document.body.innerHTML = ` <nav class="navbar navbar-light bg-light justify-content-between p-5">
		<h4 class="navbar-brand">${user.firstName} ${user.lastName}</h4>
		<form class="form-inline d-flex gap-2">
				<select class="form-select" id="inputGroupSelect01">
				</select>
				<input
						class="form-control mr-sm-2 searchInput"
						type="search"
						placeholder="Search"
						aria-label="Search"
				/>
				<button class="btn btn-outline-success my-2 my-sm-0 submit" type="submit">
						Search
				</button>
		</form>
</nav>
<header
style="
		height: 80%;
		width: 150px;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
"

`);
  const selOptions: HTMLOptionElement = doc;
  for (let i = 0; i < userService.getUserList().length; i++) {
    const options = document.createElement("option");
    options.className = "option";
  }
};
