export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  whiskey: string;
  quantity: number;
  address: string;
  ageVerified: boolean;
};

type Option = {
  value: string;
  label: string;
};

export type Options = Array<Option>;
