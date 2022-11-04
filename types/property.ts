export type Type = "House" | "MultiFamilyHome" | "Appartement";

export type Property = {
  id: string;
  title: string;
  description: string;
  views: number;
  saves: number;
  price: number;
  area: number;
  type: Type;
  lat: number;
  lon: number;
  bedrooms: number;
  bathrooms: number;
  number: string;
  street: string;
  city: string;
  district: string;
  region: string;
  postcode: string;
  createdAt: Date;
};
