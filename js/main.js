//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

function getRandomPositiveInteger (a, b) {
//реализуем поддержку передачи минимального и максимального 
//значения в любом порядке, вычислив  какое из них большее 
//или меньшее с помощью Math.min  Math.max

//что границы диапазона даже при получении дробных значений
//мы округлим границы к ближайшему большему целому Math.ceil 
//соответственно верхнюю границу - к ближайшему меньшему целому 
//Math.floor
//при передаче отрицательного числа мы берем его модуль Math.abs
const lower =  Math.ceil(Math.min(Math.abs(a), Math. abs(b)));
const upper = Math.floor(Math.max(Math.abs(a), Math. abs(b)));

const result = Math.random( ) * (upper-lower + 1) +lower;
//+1 чтобы включить верхнюю границу диапазонав случайные числа
return Math.floor(result);
//Math.floor округляем полученный результат 
}

function checkStringLength (string, length) {
    return string.length <= length;
}

//Функция взята  из интернета и доработана
//Источник - http://github.com/you-dont-need/You-Dont-
//Need-Ladash-Underscore#_random

function getRandomPositiveFloat (a, b, digits = 1) {
    //реализуем поддержку передачи минимального и максимального 
    //значения в любом порядке, вычислив  какое из них большее 
    //или меньшее с помощью Math.min  Math.max
    //при передаче отрицательного числа мы берем его модуль Math.abs
    const lower = Math.min(Math.abs(a), Math. abs(b));
    const upper = Math.max(Math.abs(a), Math. abs(b));
    
    const result = Math.random( ) * (upper-lower + 1) +lower;
    
    return +result.toFixed(digits);
    //метод toFixed  числа возвращает строку числа с указанным
    //числом знаков после запятой 
    //унарный плюс превращает строку в число
}

