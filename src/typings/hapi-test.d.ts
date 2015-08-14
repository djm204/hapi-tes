declare namespace HapiTest {
  export interface Person {
    id: number;
    name: string;
  }
}

declare module "hapi-test" {
  export interface Programmer {
    id: number;
    username: string;
  }
}
