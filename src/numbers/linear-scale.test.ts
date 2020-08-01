import linearScale from './linear-scale';

type OrderedPair = [number, number];
interface TestObject {
  domain: OrderedPair;
  range: OrderedPair;
  value: number;
  result: number;
}

const tests: TestObject[] = [
  {
    domain: [0, 1],
    range: [0, 1],
    value: 0.5,
    result: 0.5,
  },
  {
    domain: [0, 1],
    range: [0, 100],
    value: 0.5,
    result: 50,
  },
  {
    domain: [0, 1],
    range: [100, 200],
    value: 0,
    result: 100,
  },
  {
    domain: [0, 1],
    range: [100, 200],
    value: 1,
    result: 200,
  },
  {
    domain: [0, 1],
    range: [0, 0.5],
    value: 0.5,
    result: 0.25,
  },
  {
    domain: [1, 1],
    range: [0, 0.5],
    value: 1,
    result: 1,
  },

  // The domain/range can be in any order
  {
    domain: [200, 100],
    range: [0, 1],
    value: 110,
    result: 0.9,
  },

  {
    domain: [200, 100],
    range: [1, 0],
    value: 110,
    result: 0.1,
  },

  {
    domain: [100, 200],
    range: [1, 0],
    value: 110,
    result: 0.9,
  },

  // Negative numbers work, too
  {
    domain: [-1, 1],
    range: [0, 1],
    value: 0,
    result: 0.5,
  },
];

describe('linearScale', () => {
  it('is a function', () => {
    expect(typeof linearScale).toBe('function');
  });

  it('works', () => {
    tests.forEach((test) => {
      const result = linearScale({
        domain: test.domain,
        range: test.range,
        value: test.value,
      });

      expect(result).toBeCloseTo(test.result, 5);
    });
  });
});
