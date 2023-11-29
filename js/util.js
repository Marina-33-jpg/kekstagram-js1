const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

const getRandomPositiveInteger  = (a, b) => {
  //реализуем поддержку передачи минимального и максимального
  //значения в любом порядке, вычислив  какое из них большее
  //или меньшее с помощью Math.min  Math.max
  //что границы диапазона даже при получении дробных значений
  //мы округлим границы к ближайшему большему целому Math.ceil
  //соответственно верхнюю границу - к ближайшему меньшему целому
  //Math.floor
  //при передаче отрицательного числа мы берем его модуль Math.abs
  //при расчете результата +1 чтобы включить верхнюю границу диапазонав случайные числа
  //Math.floor округляем полученный результат
  const lower =  Math.ceil(Math.min(Math.abs(a), Math. abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math. abs(b)));
  const result = Math.random( ) * (upper-lower + 1) +lower;
  return Math.floor(result);
};

//случайный выбор элемента массива
const getRandomArrayElement  = (array) => array[getRandomPositiveInteger(0, array.length-1)];


//сравнение строки комментария с максимальнодопустимой длиной
const checkStringLength = (string, length) => string.length <= length;

//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength, showAlert, debounce };
