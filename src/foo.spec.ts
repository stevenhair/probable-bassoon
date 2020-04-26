import { subtract } from './foo';

describe('Bar', () => {
    afterEach(() => {
        subtract.expirations.forEach((expiration) =>
            clearTimeout(expiration.timeoutId)
        );
        subtract.expirations.length = 0;
    });

    describe('When subtracting two numbers', () => {
        it('it subtracts the numbers', async () => {
            await expect(subtract(3, 2)).resolves.toEqual(1);
        });
    });
});
