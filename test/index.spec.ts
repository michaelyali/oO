import { oO } from '../src/index';

describe('#oO', () => {
  it('should be a function', () => {
    expect(typeof oO).toBe('function');
  });

  it('should return an error', async () => {
    const call = async () => {
      throw new Error();
    };
    const test = await oO(call());
    expect(test[0]).toBeInstanceOf(Error);
    expect(test[1]).toBeUndefined();
  });

  it('should return data', async () => {
    const call = async () => 10;
    const test = await oO(call());
    expect(test[0]).toBeUndefined();
    expect(test[1]).toBe(10);
  });

  it('should return an error with retry', async () => {
    const call = async () => {
      throw new Error();
    };
    const test = await oO(call(), { retry: 3 });
    expect(test[0]).toBeInstanceOf(Error);
    expect(test[1]).toBeUndefined();
  });

  it('should return custom error', async () => {
    class TestError extends Error {}
    const call = async () => {
      throw new Error();
    };
    const test = await oO(call(), { err: new TestError() });
    expect(test[0]).toBeInstanceOf(TestError);
    expect(test[1]).toBeUndefined();
  });
});
