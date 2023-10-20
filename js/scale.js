const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller'); //50 кнопка Уменьшить
const biggerButton = document.querySelector('.scale__control--bigger'); //52 кнопка Увеличить
const inputScale = document.querySelector('.scale__control--value'); //51
const imageScale = document.querySelector('.img-upload__preview img'); //57

const changeImageScale = (value = DEFAULT_SCALE) => {
  imageScale.style.transform = `scale(${value / 100})`;  // 75% => transform: scale(0.75) -сдвиг от 0 шкалы
  inputScale.value = `${value}%`;
};
//-
const onSmallerButtonClick = () => {
  const  currentInputValue = parseInt(inputScale.value, 10); // 10 ??? парсим %строку
  let InputValue = currentInputValue - STEP_SCALE;
  if (InputValue < MIN_SCALE) {
    InputValue = MIN_SCALE;
  }
  changeImageScale(InputValue);
};
//+
const onBiggerButtonClick = () => {
  const currentInputValue = parseInt(inputScale.value, 10);
  let InputValue = currentInputValue + STEP_SCALE;
  if (InputValue > MAX_SCALE) {
    InputValue = MAX_SCALE;
  }
  changeImageScale(InputValue);
};

const resetScale = () => changeImageScale();

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };
