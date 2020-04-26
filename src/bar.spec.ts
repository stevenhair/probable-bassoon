import { add } from './bar';

describe('Bar', () => {
    afterEach(() => {
        add.expirations.forEach((expiration) =>
            clearTimeout(expiration.timeoutId)
        );
        add.expirations.length = 0;
    });

    describe('When adding two numbers', () => {
        it('it adds the numbers', async () => {
            await expect(add(3, 2)).resolves.toEqual(5);
        });
    });
});
