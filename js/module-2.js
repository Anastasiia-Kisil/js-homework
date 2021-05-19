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
const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// TASK 6 Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".
const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[3] = 'banana';

// TASK 7 Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.
const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;

// TASK 8 Объяви две перемнные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива
const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

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
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2, 5);

console.log(lastThreeEls);

// TASK 15 Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);

// TASK 16 Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    let allArray = firstArray.concat(secondArray);
    if (allArray.length > maxLength) {
        allArray = allArray.slice(0, maxLength);
    }

    return allArray;
    // Change code above this line
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
