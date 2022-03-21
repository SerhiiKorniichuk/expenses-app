
## 👋 Вступ 

Цей проект слугує підготовкою перед реальним проектом.
Тут у вас буде змога попрактикувати вже набутті, та здобути нові навички та знання, познайомитись з новими бібліотеками тощо. 
В наступних розділах буде розписана вся необхідна інформація, яка знадобиться для виконання завдання.

🚀 *Не бійтесь проявити себе, можете імпровізувати та проявляти фантазію.*
*Зробіть цей додаток унікальним!*

## 👩‍💻 Технічне завдання

Потрібно створити веб-додаток для відображення доходів та витрат. 

Додаток має містити як мінімум 3 основних екрани (деталі в розділі - ```Основні екрани```).

Список технологій які мають бути застосовані, описані в розділі - ```Технології```. Використання будь-яких додаткових бібліотек дозволено. Але не потрібно засмічувати проект "зайвими" бібліотеками, без яких можна спокійно обійтись.

Основні "сущності" які є в проекті, описані в розділі - ```Сущності```. Ви можете розширювати як основні, так і створювати нові "сущності", якщо є бажання додати більше функціоналу.

Додаток має бути адаптований під планшети та мобільні девайси (деталі в розділі - ```Адаптивна версія```).

*_Використовуйте mock данні замість данних з API._

*_Використовуйте ```localStorage``` як аналог бази данних додатку._
 
*_Усі бібліотеки мають бути останньої версії (на момент створення додатку)._

## 🖥️ Основні екрани

- 🔐 **Aутентифікація**. Екран з формою для авторизації користувача. Оскільки ми працюємо з mock данними, можете створити список облікових записів і перевіряти на відповідість при спробі авторизації того чи іншого користувача. Після успішного входу має відбутись перехід на головний екран. 

- 📝 **Головний екран**. Екран додатку після авторизації. На цьому екрані має бути таблиця транзакцій та форма для додавання нових транзакцій. Користувачі не повинні мати можливості видаляти транзакції. Також на цьому екрані має бути список категорій із можливістю додавання / видалення категорій. Ви самі повинні вирішити, що станеться з транзакціями в категорії, коли буде видалено категорію.

- 📈 **Графіки та статистика**. На цьому екрані має бути графік або кілька графіків для відображення даних. Ви самі вирішуєте, як візуалізувати дані. Як приклад можна додати графік, що відображає загальні витрати за категоріями.

## 🛠 Технології

⚡️ **Основні**
- ```React``` + ```TypeScript```
- ```Redux Toolkit```
- ```Redux Thunk``` | ```Redux Saga```
- ```Axios```
- ```React Router```
- ```ESLint``` / ```Prettier``` - можете поєднати разом, або використовувати тільки ESLint, якщо знаєте як налаштовувати.

⚡️ **Обробка та валідація форм**
- ```Formik``` | ```React Hook Form```
- ```Yup```

⚡️ **UI бібліотека**
- ```MUI - Material UI```

⚡️ **Графіки**
- ```Recharts```

⚡️ **Стилізація (на вибір)**
- ```Стилізація від MUI```
- ```SASS/SCSS modules```
- ```styled-component```

## 🗃️ Сущності

У додатку є три основні сущності: 

⚡️ **Користувач**

Являє собою одного користувача.

Ця сущність нам потрібна щоб зробити імітацію авторизації.

Створіть завчасно список з декількох облікових записів користувачів, щоб мати можливість перевіряти на відповідність при спробі авторизації.
І якщо користувач вказав ```username``` який є в базі, то авторизацію можна вважати успішною. 
Пароль може бути будь-яким. 

*_При бажанні можете додати також валідацію пароля._

Обовʼязкові поля обʼєкту ```Користувач```:

```
{
    id,
    username
}
```

*_Можуть бути додані додаткові поля для розширення функціоналу._

⚡️ **Категорія**

Являє собою одну категорію.

Приклади категорій: 
```Зарплата```, ```Подарунки```, ```Їжа```, ```Подорож```, ```Інше```.

Користувач повинен мати можливість створювати нові та видаляти або перейменовувати існуючі категорії.

Виключенням є категорія ```Інше```, вона має існувати завжди та є незмінною, не підлягає видаленню або перейменуванню.

*_По замовчуванню мають відображатись хочаб декільки категорій, окрім ```Інше```._

Обовʼязкові поля обʼєкту ```Категорія```:

```
{
    id,
    label
}
```

*_Можуть бути додані додаткові поля для розширення функціоналу._

⚡️ **Транзакція**

Являє собою одну транзакцію (має залежність від категорії).

Обовʼязкові поля обʼєкту ```Транзакція```:

```
{
    id,
    label,
    date,
    amount (негативне значення - витрата, позитивне – дохід),
    category (посилання на ID категорії)
}
```

*_Можуть бути додані додаткові поля для розширення функціоналу._

## 📱 Адаптивна версія

Додаток повинен включати в себе адаптацію під усі сучасні пристрої, починаючи з ```>= 320px``` і закінчуючи розмірами для desktop моніторів.

Breakpoints:
- ```xs: 320px - 600px```
- ```sm: 601px - 900px```
- ```md: 901px - 1200px```
- ```lg: 1200px - 1536px```
- ```xl: >= 1537px```

Ця сітка взята з ```MUI```, щоб вам було зручно робити адаптацію з використанням ```useMediaQuery```.
Але ви можете використвати інші подібні методи, інших бібліотек.

## 📌 Порядок виконання завдання

Всього є 4 простих кроки:

1. Зробити ```fork``` цього репозиторія.
2. Виконати завдання в вашому репозиторії.
3. Зробити ```deploy``` проекту на ```GitHub pages```.
4. Створити ```pull request``` для цього репозиторія.

Гайд про те [як розвернути проект](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)  на ```GitHub pages```.

🔔 І не забудьте повідомити про успішне виконання завдання ту людину, яка дала вам це завдання.
