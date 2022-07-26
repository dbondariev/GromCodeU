// // так можно получить данные формы - ВАРИАНТ 1:
// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));

// 1 показать валидационное сообщение(рамка для поля ввода) -> required
// 2 у формы есть поведение по умолчанию. оно не подходит и мы его хотим отменить и чтоб работала фрма через js

// получить ссылки на элементы: 
const emailInputElem = document.querySelector('#email')
const passwordInputElem = document.querySelector('#password');

// на каждой изминение в поле ввода нужно выводить сообщение об ошибке или нет
// доступ к email 
const emailErrorText = document.querySelector('.error-text_email');
const passwordErrorText = document.querySelector('.error-text_password');

// нужно проанализировать поле: обязательное должно быть
const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const validatorsFieldName = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsFieldName[fieldName];
  return (
    validators
      .map(validator => validator(value))
      .filter(errorText => errorText)
      // склеить все ошибки что сгенерировались
      .join(', ')
  );
}

const onEmailChange = event => {
  // когда будет менятся поле email, надо сгенерировать ошибку исходя из валидаторов
  const errorText = validate('email', event.target.value);
  emailErrorText.textContent = errorText;
};

const onPasswordChange = event => {
  // когда будет менятся поле email, надо сгенерировать ошибку исходя из валидаторов
  const errorText = validate('password', event.target.value);
  passwordErrorText.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  // отменить дефолтное поведение браузера: если все поля валидные, тогда перезагр страницу и отправляет какой-то запрос. чтоб отменить есть метод
  event.preventDefault();
  // обработать форму: поле и значение поля вывести в виде объекта
  // конструктор FormData(formElem) построит объект:
  const formData = [...new FormData(formElem)]
  .reduce((acc, [field, value]) => ({...acc, [field]: value}), {})
  alert(JSON.stringify(formData));
}
formElem.addEventListener('submit', onFormSubmit)

// const onEmailChange = event => {
//   // когда будет менятся поле email, надо сгенерировать ошибку исходя из валидаторов
//   const errorText = [isRequired, isEmail]
//     .map(validator => validator(event.target.value))
//     .filter(errorText => errorText)
//     // склеить все ошибки что сгенерировались
//     .join(', ');
//   emailErrorText.textContent = errorText;
// }

// const onPasswordChange = event => {
//   // когда будет менятся поле email, надо сгенерировать ошибку исходя из валидаторов
//   const errorText = [isRequired]
//     .map(validator => validator(event.target.value))
//     .filter(errorText => errorText)
//     // склеить все ошибки что сгенерировались
//     .join(', ');
//   passwordErrorText.textContent = errorText;
// };

