import { User } from "./../entities/user";
import { CardService, UserService } from "../service";
import { BANK_NAME, CARD_TYPE, EXPIRE } from "../types";
export const dashboard = (
  user: User,
  cardService: CardService,
  userService: UserService
) => {
  const secondUser =
    (document.body.innerHTML = `    <nav class="navbar bg-body-tertiary d-flex justify-content-between">
  <div class="container-fluid">
    <a class="navbar-brand">Shopping</a>
    <div class="w-25 h-25">
      <div
        class="w-50 h-25 nav-right d-flex align-items-end justify-content-between gap-2"
      >
        <img
          class="w-25 h-auto"
          src="https://www.svgrepo.com/show/194563/shopping-cart.svg"
        />
        <button type="button" class="btn btn-info">Log In</button>
      </div>
    </div>
  </div>
</nav>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5 pb-5">
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="https://i.ebayimg.com/images/g/~C4AAOSwT-Rj7H8k/s-l500.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title">Iphone 14 pro</h5>
          <p class="card-text">US $1,429.49</p>
          <a href="#" class="btn btn-primary">Add to Basket</a>
        </div>
      </div>
    </div>
  </div>
</div>`);
};
