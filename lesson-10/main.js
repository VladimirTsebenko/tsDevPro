`Реализовать createSummator на прототипах. Значение счетчика не нужно инкапсулировать.
 Методы вынести в прототип.
 Написать функцию createSummator(initialValue), с опциональным первым параметром,
  который является точкой отчета счетчика. Если аргумент initialValue не передан,
   то отчет начинается с 0. При каждом вызове функция возвращает объект с методами inc(num), 
   dec(num), get(). Объектов, которые возвращает функция createSummator(initialValue),
    может быть любое количество. 
    Реализация должна позволять манипуляции со значением счетчика только с 
    использованием этих методов. Вызов метода inc(num) увеличивает значение счетчика
     на значение аргумента num. Если метод вызван без аргумента, то значение
      счетчика увеличивается на 1 Вызов метода dec(num) уменьшает значение счетчика на 
      значение num, если метод вызван с аргументом. 
 Если метод вызван без аргумента, то значение счетчика уменьшается на 1 Вызов метода get() `;
// export function sum(b, c) {
//   return b + c;
// }
export function multi(b, c) {
  return b * c;
}

export const sum = {
  getValuePlus2(a) {
    return a + 2;
  },
  setValue(s) {
    this.getValuePlus2(s + 3);
  },
};