export {};

declare global {
  interface IToken {
    access_token: string;
    access_expires: Date;
  }
}
