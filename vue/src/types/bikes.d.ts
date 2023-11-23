export {};

declare global {
  interface IBikes {
    id: number;
    number: string;
    status: string;
    kind: {
      id: number;
      label: string;
      price: {
        dollars: number;
        euros: number;
      };
    };
    shop: {
      label: string;
    };
  }
}
