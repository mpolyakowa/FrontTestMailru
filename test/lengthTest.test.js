import Numbers from '../src/components/NumberVerify';

test('mask <+7(985)0II-**-**> should be correct', () => {
  expect(Numbers({ mask: '+7(985)0II-**-**' })).toBe(true);
})
test('mask <+7(985)0II-**-**-1> should be incorrect', () => {
  expect(Numbers({ mask: '+7(985)0II-**-**-1' })).toBe(false);
});
