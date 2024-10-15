import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman(null)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman(-1024)).toBe(false);
  expect(convertBytesToHuman(-9999999)).toBe(false);
});

// Тесты на корректные значения
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');
});

test('Не возвращает неправильные значения для корректных чисел', () => {
  expect(convertBytesToHuman(1024)).not.toBe('1024 B');
  expect(convertBytesToHuman(123123123)).not.toBe('120 MB');
});
