// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
export const setLocalStorage = (key: string, value: any) => window.localStorage.setItem(key, value);
export const removeLocalStorage = (key: string) => window.localStorage.removeItem(key);
export const getLocalStorage = (key: string) => window.localStorage.getItem(key);
