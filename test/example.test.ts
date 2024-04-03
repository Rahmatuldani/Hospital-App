import Sum from './example';

describe.skip('example test', () => {
    it('can sum', () => {
        const result = Sum(10, 20);
        expect(result).toBe(30);
    });
});