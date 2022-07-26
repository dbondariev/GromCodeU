// пример работы finally
// window.addEventListener('error', function onUnhandledError(err) {
//   console.log('error', err.message);
// });
// // задача: получем JSON и задача преодбарить его в скриптовый объект
// try {
//   const jsonString = '{"name":"Tom"';
//   throw new ReferenceError();
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch (err) {
//   // чаще всего обрабат. ошибки, которые знаем
//   if (err instanceof SyntaxError) {
//     console.error('Handled');
//   } else {
//     // пробросить ошибку дальше
//     throw err; // result -> Uncaught ReferenceError
//   }
// } finally {
//   console.log('Some actions');
// }




window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"name":"Tom"}');
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"mark":"Audi"');
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}