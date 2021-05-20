// TASK 1 Запиши условие в инструкции if так, чтобы функция работала правильно.
function checkAge(age) {
    if (age >= 18) {
        // Change this line
        return 'You are an adult';
    }

    return 'You are a minor';
}

console.log(checkAge(14));

// TASK 2 Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';

    if (password === ADMIN_PASSWORD) {
        return 'Welcome!';
    }
    return 'Access denied, wrong password!';
}

// TASK 3 Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».
function checkStorage(available, ordered) {
    // Change code below this line

    if (ordered === 0) {
        return `Your order is empty!`;
    }
    if (ordered > available) {
        return `Your order is too large, not enough goods in stock!`;
    }

    return `The order is accepted, our manager will contact you`;
}

console.log(checkStorage(100, 50));

// TASK 4 Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
const fruits = ['apple', 'plum', 'pear', 'orange'];

// TASK 5 Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива
const fruitss = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruitss[0];
const secondElement = fruitss[1];
const lastElement = fruitss[3];

// TASK 6 Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
const fruites = ['apple', 'plum', 'pear', 'orange'];
fruites[1] = 'peach';
fruites[3] = 'banana';

// TASK 7 Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
const fruitts = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruitts.length;

// TASK 8 Объяви две перемнные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива
const fruitse = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruitse.length - 1;
const lastElement = fruitse[lastElementIndex];

// TASK 9 Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
function getExtremeElements(array) {
    const firstElement = array[0];
    const lastElement = array[array.length - 1];
    return [firstElement, lastElement];
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));

// TASK 10 Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.
function splitMessage(message, delimeter) {
    let words;
    words = message.split(delimeter);
    return words;
}

console.log(splitMessage('Mango hurries to the train', ' '));

// TASK 11 Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
function calculateEngravingPrice(message, pricePerWord) {
    let total;
    message = message.split(' ');
    const messageLen = message.length;
    total = messageLen * pricePerWord;
    return total;
}

console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// TASK 12 Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
function makeStringFromArray(array, delimeter) {
    let string;
    string = array.join(delimeter);
    return string;
}
console.log(
    makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
);

// TASK 13 Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
function slugify(title) {
    const slug = title.toLowerCase().split(' ').join('-');
    return slug;
}

console.log(slugify('Arrays for begginers'));

// TASK 14 Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов
const ffruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = ffruits.slice(0, 2);
const nonExtremeEls = ffruits.slice(1, 4);
const lastThreeEls = ffruits.slice(2, 5);

console.log(lastThreeEls);

// TASK 15 Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);

// TASK 16 Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
    let allArray = firstArray.concat(secondArray);
    if (allArray.length > maxLength) {
        allArray = allArray.slice(0, maxLength);
    }

    return allArray;
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));

// TASK 17 Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
    // Change this line
    console.log(i);
}

// TASK 18 Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6
function calculateTotal(number) {
    let total = 0;
    for (let i = 0; i <= number; i += 1) {
        total += i;
    }

    return total;
}

console.log(calculateTotal(1));

// TASK 19 Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
const frruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < frruits.length; i += 1) {
    const fruit = frruits[i];
    console.log(fruit);
}

// TASK 20 Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
    let total = 0;
    for (let i = 0; i < order.length; i += 1) {
        total += order[i];
    }
    return total;
}

// TASK 21 Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
function findLongestWord(string) {
    const wordString = string.split(' ');
    let longestWord = wordString[0];
    for (let i = 0; i < wordString.length; i += 1) {
        if (longestWord.length < wordString[i].length) {
            longestWord = wordString[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));

// TASK 22 Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
function createArrayOfNumbers(min, max) {
    const numbers = [];
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
    return numbers;
}

console.log(createArrayOfNumbers(14, 17));

// Task 23 Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
function filterArray(numbers, value) {
    const allArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            allArray.push(numbers[i]);
        }
    }

    return allArray;
}

console.log(filterArray([12, 24, 8, 41, 76], 38));

// TASK 24 Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
    const fruits = ['apple', 'plum', 'pear', 'orange'];

    return fruits.includes(fruit);
}

// TASK 25 Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
    const newArray = [];

    for (const uniqe of array1) {
        if (array2.includes(uniqe)) {
            newArray.push(uniqe);
        }
    }

    return newArray;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// TASK 26 Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line

    //for (let i = 0; i < order.length; i += 1) {total += order[i];}
    for (const i of order) {
        total += i;
    }
    // Change code above this line
    return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

// TASK 27 Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of
function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (const number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    }

    return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 38));

// TASK 28 Дополни выражения остатка от деления так, чтобы код проходил тесты.
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// TASK 29 Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
function getEvenNumbers(start, end) {
    const array = [];

    for (let i = start; i <= end; i += 1) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array;
}

console.log(getEvenNumbers(3, 11));

// TASK 30 Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}

// TASK 31 Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
function findNumber(start, end, divisor) {
    let number;

    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
            return i;
        }
    }
}

// TASK 32 Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
function includes(array, value) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
