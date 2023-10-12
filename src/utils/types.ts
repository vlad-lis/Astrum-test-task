export type TFeature = {
  id: number;
  name: string;
  free: string;
  paid: string;
  img: string;
};

export type TBundleData = {
  name: string;
  price: number;
  features: TFeature[];
};
