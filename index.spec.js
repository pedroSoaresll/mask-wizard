const { time } = require('.')

test('mask time input', () => {
   expect(time(1)).toBe('0h01m')
   expect(time(13)).toBe('0h13m')
   expect(time(131)).toBe('1h31m')
   expect(time(1312)).toBe('13h12m')
})