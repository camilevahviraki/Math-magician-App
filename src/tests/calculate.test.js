import calculate from '../logic/calculate';

const obj1 = {
  total: '762',
  next: '45768',
  operation: null,
};
const respAC = { total: null, next: null, operation: null };
const respDot = {
  total: '762',
  next: '45768.',
  operation: null,
};
const obj2 = {
  total: '76',
  next: '8',
  operation: '-',
};
const respEqual = {
  total: '68',
  next: null,
  operation: null,
};

const noNext = {
  total: '76',
  next: null,
  operation: '-',
};

const respNoNext = {
  total: '76',
  next: null,
  operation: '+',
};

describe('test calculate', () => {
  it('test AC', () => {
    expect(calculate(obj1, 'AC')).toStrictEqual(respAC);
  });

  it('test .', () => {
    expect(calculate(obj1, '.')).toStrictEqual(respDot);
  });

  it('test =', () => {
    expect(calculate(obj2, '=')).toStrictEqual(respEqual);
  });

  it('test no Next', () => {
    expect(calculate(noNext, '+')).toStrictEqual(respNoNext);
  });
});
