export type UserObject = {
  id: string,
  isAdmin: boolean;
};

export type OfferObject = {
  id: number,
  createdAt: string,
  updatedAt: string,
  amount: number,
  buyerId: string,
  propertyId: number;
};

export type PropertyObject = {
  id: number,
  description: string,
  address: string,
  startingPrice: number;
};