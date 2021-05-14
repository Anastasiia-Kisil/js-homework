//task 10
//Задание. Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
//Она объявляет два параметра, значения которых будут задаваться во время её вызова.
//name - название товара; price - цена товара
//Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item i

function makeMessage(name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
}

//task 12 Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.
//orderedQuantity - количество дроидов в заказе
//pricePerDroid - цена одного дроида
//deliveryFee - стоимость доставки
//Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
//Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const message = `You ordered droids worth ${
        orderedQuantity * pricePerDroid + deliveryFee
    } credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
}

//task 13 Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова.
//Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
    const passed = age >= 18;
    return passed;
}

//task 14 Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.
//Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = password === SAVED_PASSWORD;
    return isMatch;
}

//task 15 Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
//Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
//В противном случае должен выполняться блок else и записывается строка "You are a minor"
function checkAge(age) {
    let message;
    if (age >= 18) {
        message = 'You are an adult';
    } else {
        message = 'You are a minor';
    }
    return message;
}

//task 16 Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
//available - общее количество товаров на складе, ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:
//Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
//В противном случае записывается строка "Order is processed, our manager will contact you.".

function checkStorage(available, ordered) {
    let message;
    if (ordered > available) {
        message = `Not enough goods in stock!`;
    } else {
        message = `Order is processed, our manager will contact you.`;
    }
    return message;
}
//task 17 Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.
let a = 5;
let b = 10;
let c = 15;
let d = 20;
// Change code below this line
a = a + 2;
b = b - 4;
c = c * 3;
d = d / 10;

a += 2;
b -= 4;
c *= 3;
d /= 10;

//task 18 Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
//pricePerDroid - цена одного дроида, orderedQuantity - кол-во заказанных дроидов, customerCredits - сумма средств на счету клиента
//Дополни её следующим функционалом:
//Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
//Добавь проверку сможет ли клиент оплатить заказ:
//если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
//в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left"
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    let totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
        message = `Insufficient funds!`;
    } else {
        customerCredits -= totalPrice;
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
    }
    return message;
}

//TASK 19 Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
//Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    if (password === null) {
        // Change this line
        message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) {
        // Change this line
        message = 'Welcome!';
    } else {
        message = 'Access denied, wrong password!';
    }
    return message;
}

//TASK 20. Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
//available - доступное количество товаров на складе, ordered - единиц товара в заказе
//Используя ветвления дополни код функции так, что:
//Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
//Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
//В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".
function checkStorage(available, ordered) {
    let message;
    if (ordered === 0) {
        message = `There are no products in the order!`;
    } else if (ordered > available) {
        message = `Your order is too large, there are not enough items in stock!`;
    } else {
        message = `The order is accepted, our manager will contact you`;
    }
    return message;
}

//TASK 21 Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
//number - число, вхождение которого проверяется, start - начало числового промежутка, end - конец числового промежутка
//Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false
function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line
    return isInRange;
}

//TASK 22 Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
//Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.
function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

    return canAccessContent;
}

//TASK 23 Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.
//Она объявляет три параметра, значения которых будут задаваться во время её вызова:
//number - число, не вхождение которого проверяется, start - начало числового промежутка, end - конец числового промежутка
//Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line
    return isNotInRange;
}

//TASK 24 Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.
//Используя ветвления и логические операторы, дополни код функции.
//Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
//Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
//Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
//Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
//Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    if (totalSpent < 5000) {
        discount = BASE_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT;
    }
    return discount;
}

//TASK 25 Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
function checkStorage(available, ordered) {
    let message;
    if (ordered > available) {
        message = 'Not enough goods in stock!';
    } else {
        message = 'The order is placed, the manager will contact you';
    }
    return message;
}

function checkStorage(available, ordered) {
    let message;
    message =
        ordered > available
            ? 'Not enough goods in stock!'
            : 'The order is accepted, our manager will contact you';
    return message;
}

//TASK 26 Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.
//Используя тернарный оператор дополни функцию так, что:
//Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
//В противном случае, присвой message строку "Access denied, wrong password!".
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    message =
        password === ADMIN_PASSWORD
            ? 'Access is allowed'
            : 'Access denied, wrong password!';
    return message;
}

//TASK 27 Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
//Если значение параметра type это строка:
//"starter" - цена подписки 0 кредитов., "professional" - цена подписки 20 кредитов.,"organization" - цена подписки 50 кредитов.
//Изначально в теле функции была инструкция if...else, которая выглядела вот так.
//if (type === "starter") {
//  price = 0;
//} else if (type === "professional") {
//  price = 20;
//} else if (type === "organization") {
//  price = 50;}
//После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.
function getSubscriptionPrice(type) {
    let price;
    switch (type) {
        case 'starter':
            price = 0;
            break;

        case 'professional':
            price = 20;
            break;

        case 'organization':
            price = 50;
            break;
    }
    return price;
}

//TASK 28 Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
//Если значение параметра password:
//равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
//совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
//не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
//Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    switch (password) {
        case null:
            message = 'Canceled by user!';
            break;

        case ADMIN_PASSWORD:
            message = 'Welcome!';
            break;

        default:
            message = 'Access denied, wrong password!';
    }

    return message;
}

//TASK 29 Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.
//Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.
//Список стран и стоимость доставки:
//China - 100 кредитов
//Chile - 250 кредитов
//Australia - 170 кредитов
//Jamaica - 120 кредитов
//Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"
function getShippingCost(country) {
    let message;
    switch (country) {
        case 'China':
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;

        case 'Chile':
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;

        case 'Australia':
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;

        case 'Jamaica':
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;

        default:
            message = `Sorry, there is no delivery to your country`;
    }
    return message;
}

//TASK 30 Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.
function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line

    return message;
}

//TASK 31 Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
//courseTopicLength - длина строки, firstElement - первый символ строки, lastElement - последний символ строки.
const courseTopic = 'JavaScript essentials';
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

//TASK 32 Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
//string - оригинальная строка, length - количество символов с начала строки для подстроки
//Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
function getSubstring(string, length) {
    const substring = string.slice(0, length); // Change this line
    return substring;
}

//TASK 33 Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
//Дополни код функции так, что если длина строки:не превышает maxLength, функция возвращает её в исходном виде.больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
function formatMessage(message, maxLength) {
    let result;
    result =
        message.length > maxLength
            ? message.slice(0, maxLength) + '...'
            : message;
    return result;
}

//TASK 34 Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input
function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line

    return normalizedInput;
}

//TASK 35 Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
//fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом, name - имя для проверки вхождения в полное имя.
//Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
    return result;
}

//TASK 36 Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
//Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
//Если в строке нет запрещенных слов, функция возвращает буль false
function checkForSpam(message) {
    let result;
    // Change code below this line
    message = message.toLowerCase();
    result = message.includes('spam') || message.includes('sale');
    // Change code above this line
    return result;
}
