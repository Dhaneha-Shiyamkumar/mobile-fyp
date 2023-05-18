export type UserChildren = IChild[];

export interface IChild {
  _id: string;
  firstName: string;
  lastName: string;
  attributes: Attributes;
  __v: number;
}

export interface Attributes {
  height: Height[];
  weight: Weight[];
  vaccination: Vaccination[];
}

export interface Height {
  month: string;
  value: number;
}

export interface Weight {
  month: string;
  value: number;
}

export interface Vaccination {
  month: string;
  type: string;
  date: string;
  done: boolean;
}
