import { add } from './bar';

describe('Bar', () => {
    describe('When adding two numbers', () => {
        it('it adds the numbers', async () => {
            await expect(add(3, 2)).resolves.toEqual(5);
        });
    });
});
