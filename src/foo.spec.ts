import { subtract } from './foo';

describe('Bar', () => {
    describe('When subtracting two numbers', () => {
        it('it subtracts the numbers', async () => {
            await expect(subtract(3, 2)).resolves.toEqual(1);
        });
    });
});
