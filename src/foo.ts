import moize from 'moize';

export const subtract = moize(async (a, b) => Promise.resolve(a - b), { maxAge: 1000, isPromise: true });
