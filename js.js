// Як можна оголосити змінну у Javascript?
//у Javascript оголосити змінну можна через "let", "var" чи "const"
//але var засторівше та не можемо її контролювати в блочному баченні
// У чому різниця між функцією prompt та функцією confirm?
//спільне те, що вони блокують виконання коду
//prompt це функція,що дає можливість запитати у користувача якесь значення та повернути його у вигляді строки або null якщо введено відміну 
//confirm це функція, що дає можливість тільки погоджуватися чи не погоджуватися від чого й піде true чи false
// Що таке неявне перетворення типів? Наведіть один приклад.
//за деяких умов коли йде порівняння або математичні опепрації дані з одним типом перетворюються в дані з іншим
//робить це js автоматично без допомоги розробника. наприклад: "11" + 2


// Оголосіть дві змінні: admin та name. Встановіть ваше ім'я в якості значення змінної name. 
// Скопіюйте це значення в змінну admin і виведіть його в консоль.
// Оголосити змінну days і ініціалізувати її числом від 1 до 10. 
// Перетворіть це число на кількість секунд і виведіть на консоль.
// Запитайте у користувача якесь значення і виведіть його в консоль.
let admin 
let name = "alina"
admin = name 
console.log(admin)

let days = 7
let sec = 7 * 24 * 60 * 60
console.log(sec)

let number = +prompt("your number?")
console.log(number)