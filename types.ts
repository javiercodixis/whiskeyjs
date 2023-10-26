export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  whiskey: string;
  address: string;
  whiskeyQuantity: number;
  ageVerification: boolean;
};

type Option = {
  value: string;
  label: string;
};

export type Options = Array<Option>;

export type City = {
  id: string;
  name: string;
  country: string;
};

export type Cities = Array<City>;

export type Dog = {
  id: string;
  name: string;
  breed: string;
  color: string;
};

export type Dogs = Array<Dog>;
