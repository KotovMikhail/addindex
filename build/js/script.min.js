const btnBurger = document.querySelector(`.btn--burger`);
const body = document.body;

const onBtnMenuOpened = () => {
  body.classList.toggle(`menu-opened`);
};

const onEscMenuClosed = (evt) => {
  if (evt.keyCode === 27 && body.classList.contains(`menu-opened`)) {
    body.classList.remove(`menu-opened`);
    return;
  }
};

document.addEventListener(`keydown`, onEscMenuClosed)

btnBurger.addEventListener(`click`, onBtnMenuOpened);
