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
