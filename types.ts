export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  whiskey: string;
  whiskeyQuantity: 1,
  address: string;
};

type Option = {
  value: string;
  label: string;
};

export type Options = Array<Option>;
