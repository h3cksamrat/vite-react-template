/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
export class Logger {
  logger: Console;

  constructor(private readonly name: string) {
    this.name = name;
    this.logger = window.console;
  }

  log = (...args: any[]) => {
    this.logger.log(`[${this.name}]:`, ...args);
  };

  error = (...args: any[]) => {
    this.logger.error(`[${this.name}]:`, ...args);
  };

  warn = (...args: any[]) => {
    this.logger.warn(`[${this.name}]:`, ...args);
  };

  info = (...args: any[]) => {
    this.logger.info(`[${this.name}]:`, ...args);
  };

  debug = (...args: any[]) => {
    this.logger.debug(`[${this.name}]:`, ...args);
  };

  static disable = () => {
    /* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-empty-function */
    Object.keys(window.console).forEach((key) => {
      // @ts-ignore
      window.console[key] = () => {};
    });
  };
}
