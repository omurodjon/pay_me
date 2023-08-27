import { User } from "./../entities/user";
import { CardService, UserService } from "../service";
import { BANK_NAME, CARD_TYPE, EXPIRE } from "../types";
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
				<option class="all-option">All</option>
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
<table class="table table-striped">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">First-name</th>
    <th scope="col">Card number</th>
    <th scope="col">Card type</th>
    <th scope="col">Bank name</th>
    <th scope="col">Expire</th>
  </tr>
</thead>
<tbody class="tbody">
</tbody>
</table>


`);
  const table: HTMLTableElement = document.querySelector(".table");
  const expire: EXPIRE[] = ["01/27", "23/28", "6/26", "17/29"];
  const card: CARD_TYPE[] = ["UZCARD", "HUMO", "VISA", "MASTERCARD"];
  const bankName: BANK_NAME[] = ["NBU", "TBC", "SQB", "GRANT"];
  const tbody: HTMLTableElement = document.querySelector(".tbody");
  const selOptions: HTMLSelectElement = document.querySelector(
    "#inputGroupSelect01"
  );
  const searchInput: HTMLInputElement = document.querySelector(".searchInput");
  const submit: HTMLInputElement = document.querySelector(".submit");

  for (let i = 0; i < userService.getUserList().length; i++) {
    const options = document.createElement("option");
    options.className = "option";
    options.innerText = userService.getUserList()[i].firstName;
    options.value = `${userService.getUserList()[i].firstName}`;
    selOptions.appendChild(options);
  }

  for (let i = 0; i < userService.getUserList().length; i++) {
    const tr = document.createElement("tr");
    tr.className = "tbody-tr";
    const typeIdx: number = Math.floor(Math.random() * 4);
    const th = document.createElement("th");
    th.scope = "row";
    th.innerText = `${i + 1}`;
    th.className = "tbody-th";
    tr.append(th);
    tbody.appendChild(tr);

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td1.innerText = `${userService.getUserList()[i].firstName}`;
    td2.innerText = `${cardService.cardNumbers()}`;
    td3.innerText = `${card[i]}`;
    td4.innerText = `${bankName[i]}`;
    td5.innerText = `${expire[i]}`;
  }

  const th: HTMLTableHeaderCellElement = document.querySelector(".tbody-th");
  const tr: HTMLTableRowElement = document.querySelector(".tbody-tr");
  selOptions.addEventListener("change", (e) => {
    e.preventDefault();
    tbody.innerHTML = "";
    for (let i = 0; i < userService.getUserList().length; i++) {
      if (selOptions.selectedIndex === i + 1) {
        th.scope = "row";
        th.innerText = `${i + 1}`;
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        td1.innerText = `${userService.getUserList()[i].firstName}`;
        td2.innerText = `${cardService.cardNumbers()}`;
        td3.innerText = `${card[i]}`;
        td4.innerText = `${bankName[i]}`;
        td5.innerText = `${expire[i]}`;
        const tr = document.createElement("tr");
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
      }
    }
  });

  // submit.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   tbody.innerHTML = "";

  //   // for (let i = 0; i < userService.getUserList().length; i++) {
  //   //   const typeIdx: number = Math.floor(Math.random() * 4);
  //   //   const th: HTMLTableHeaderCellElement =
  //   //     document.querySelector(".tbody-th");
  //   //   const tr: HTMLTableRowElement = document.querySelector(".tbody-tr");
  //   //   if (searchInput.value === card[i]) {
  //   //     th.scope = "row";
  //   //     th.innerText = `${i + 1}`;
  //   //     th.className = "tbody-th";
  //   //     tr.append(th);
  //   //     tbody.appendChild(tr);

  //   //     const td1 = document.createElement("td");
  //   //     const td2 = document.createElement("td");
  //   //     const td3 = document.createElement("td");
  //   //     const td4 = document.createElement("td");
  //   //     const td5 = document.createElement("td");
  //   //     tr.appendChild(td1);
  //   //     tr.appendChild(td2);
  //   //     tr.appendChild(td3);
  //   //     tr.appendChild(td4);
  //   //     tr.appendChild(td5);
  //   //     td1.innerText = `${userService.getUserList()[i].firstName}`;
  //   //     td2.innerText = `${cardService.cardNumbers()}`;
  //   //     td3.innerText = `${card[i]}`;
  //   //     td4.innerText = `${bankName[i]}`;
  //   //     td5.innerText = `${expire[i]}`;
  //   //   }
  //   // }
  // });
};
