// TASK 1 Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    orderedItems.forEach(function (number, index) {
        totalPrice += orderedItems[index];
    });
    return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// TASK 2
function filterArray(numbers, value) {
    const filteredNumbers = [];
    numbers.forEach(function (number) {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
}

filterArray([1, 2, 3, 4, 5], 3);
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 38));

// TASK 3 Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    firstArray.forEach(function (firstNum) {
        if (secondArray.includes(firstNum)) {
            commonElements.push(firstNum);
        }
    });
    return commonElements;
}

// TASK 4 Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
    // Пиши код выше этой строки
    return quantity * pricePerItem;
};

// TASK 5 Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// TASK 6 Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию
const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach(item => (totalPrice += item));

    return totalPrice;
};

// TASK 7 Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });
    return filteredNumbers;
};

// TASK 8 Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach(element => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Пиши код выше этой строки
    return commonElements;
};

// TASK 9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const numbersEven = [];
    numbers.forEach(element => {
        if (element % 2 !== 0) {
            numbersEven.push(element);
        }
        if (element % 2 === 0) {
            numbersEven.push(element + value);
        }
    });
    return numbersEven;
    // Пиши код выше этой строки
}
changeEven([1, 2, 3, 4, 5], 10);
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// TASk 10 Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
const planetsLengths = planets.map(planet => planet.length);

// TASK 11 Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
const titles = books.map(book => book.title);

// TASK 12 Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое'],
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика'],
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика'],
    },
];

const genres = books.flatMap(book => book.genres);

// TASK 13 Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
const getUserNames = users => {
    return users.map(user => user.name);
};
console.log(getUserNames);

// TASK 14 Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
const getUserEmails = users => {
    return users.map(user => user.email);
};

// TASK 15 Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// TASK 16 Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое'],
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика', 'мистика'],
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика', 'приключения'],
    },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
    (genre, index, array) => array.indexOf(genre) === index,
);
console.log(uniqueGenres);

// TASK 17
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// TASK 18 Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

// TASK 19 Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age > minAge && user.age < maxAge);
};

// TASK 20 Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName));
};

// TASK 21 Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
const getFriends = users => {
    return users
        .flatMap(user => user.friends)
        .filter((elem, index, arr) => arr.indexOf(elem) === index);
};

// TASK 22 Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
const getActiveUsers = users => {
    return users.filter(user => user.isActive === true);
};

// TASK 23
const getInactiveUsers = users => {
    return users.filter(user => user.isActive === false);
};

// TASK 24 Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

// TASK 25 Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
const getUserWithEmail = (users, email) => {
    return users.find(user => user.email === email);
};

// TASK 26 Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// TASK 27 Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
const isEveryUserActive = users => {
    return users.every(user => user.isActive === true);
};

// Task 28 Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(value => value % 2 !== 0);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);

// TASK 29 Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
const isAnyUserActive = users => {
    return users.some(user => user.isActive === true);
};

// TASK 30 Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, number) => {
    return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// TASK 31 Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = players.reduce((total, player) => {
    return total + player.playtime / player.gamesPlayed;
}, 0);

// TASK 32 Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
