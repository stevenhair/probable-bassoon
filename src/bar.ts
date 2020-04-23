import moize from 'moize';

export const add = moize(async (a, b) => Promise.resolve(a + b), { maxAge: 1000, isPromise: true });
