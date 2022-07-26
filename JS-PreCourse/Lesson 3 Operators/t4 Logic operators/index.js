/* eslint-disable */

/* оператор || (OR) */
false || true;
console.log("false || true:", false || true);
false || true || false;
console.log("false || true || false:", false || true || false);
false || false || false;
console.log("false || false || false:", false || false || false);

/* оператор && (AND) */
false && true;
console.log("false && true:", false && true);
false && true && false;
console.log("false && true && false:", false && true && false);
true && true && true;
console.log("true && true && true:", true && true && true);

/* Логические операторы могут применятся к любым типам данных */

/* || находит первое истинное значение */
'text' || false;
console.log("'text' || false:", 'text' || false);
true || 'text';
console.log("true || 'text':", true || 'text');
undefined || null || 0 || '' || null;
console.log("undefined || null || 0 || '' || null:", null || 0 || '' || null);

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значение переменной amount в формате console.log('amount:', amount);
console.log('amount:', amount);

/* && находит первое ложное значение */
'text' && false;
console.log("'text' && false:", 'text' && false);
true && 'text';
console.log("true && 'text':", true && 'text');
undefined && null && 0 && '' && null;
console.log("undefined && null && 0 && '' && null:", undefined && null && 0 && '' && null);

/* оператор отрицания (OR) */
!true;
console.log("!true:", !true);
!false;
console.log("!false:", !false);
!'text';
console.log("!'text':", !'text');
!!'text';
console.log("!!'text':", !!'text');

