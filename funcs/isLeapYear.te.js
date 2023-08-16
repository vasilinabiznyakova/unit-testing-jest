/* Requirements to function, requirements to input data and to output data 
1. Receive the year as integer
2. Return true if year is leap (year has 366 days, february has 29 days) or false if the year is not leap.
3. If wrong data type is received throw error with the corresponding text if wrong argument received.

Criteria of leap year:
- divisible by 4
- not divisible by 100
- divisible by 400
- from 42 and >

2008 - true
2003 - false
2000 - true
1900 - false

41 - error "year must be 42 or more"
2008.4 - error "Year must be integer"
() - error "Year must exist"
"2008" - "Year must be number"
null - "Year must be number"
true - "Year must be number"
false - "Year must be number"
()={} - "Year must be number"
{} - "Year must be number"
[] - "Year must be number"
*/

const isLeapYear = require('./isLeapYear');

describe('test isLeapYear function', () => {
  test('2008 - true', () => {
    expect(isLeapYear(2008)).toBe(true); //result === true
  });

  it('2003 - false', () => {
    expect(isLeapYear(2003)).toBe(false);
  });
  test('2000 - true', () => {
    expect(isLeapYear(2000)).toBe(true);
  });
  test('1900 - false', () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test('41 - error "Year must be 42 or more"', () => {
    expect(() => {
      isLeapYear(41);
    }).toThrow('Year must be 42 or more');
  });

  test('2008.4 - error "Year must be integer"', () => {
    expect(() => {
      isLeapYear(2008.4);
    }).toThrow('Year must be integer');
  });

  test('() - error "Year must exist"', () => {
    expect(() => {
      isLeapYear();
    }).toThrow('Year must exist');
  });

  test('"2008" - "Year must be number"', () => {
    expect(() => {
      isLeapYear('2008');
    }).toThrow('Year must be number');
  });

  test('null - "Year must be number"', () => {
    expect(() => {
      isLeapYear('2008');
    }).toThrow('Year must be number');
  });

  test('true - "Year must be number"', () => {
    expect(() => {
      isLeapYear(true);
    }).toThrow('Year must be number');
  });

  test('false - "Year must be number"', () => {
    expect(() => {
      isLeapYear(false);
    }).toThrow('Year must be number');
  });

  test('()=>{} - "Year must be number"', () => {
    expect(() => {
      isLeapYear(()=>{});
    }).toThrow('Year must be number');
  });

  test('{} - "Year must be number"', () => {
    expect(() => {
      isLeapYear({});
    }).toThrow('Year must be number');
  });

  test('[] - "Year must be number"', () => {
    expect(() => {
      isLeapYear([]);
    }).toThrow('Year must be number');
  });
});
