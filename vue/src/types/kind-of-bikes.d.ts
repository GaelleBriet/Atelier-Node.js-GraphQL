export {};

declare global {
  interface IKindOfBike {
    id: number;
    label: string;
    price: {
      dollars: number;
      euros: number;
    };
  }
}
