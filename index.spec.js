const { time } = require('.')

test('mask time input', () => {
   expect(time(1312)).toBe('13h12m');
});