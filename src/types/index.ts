export type BlobJsonType = {
  name: string;
  description: string;
  image: string;
  dna: string;
  edition: number;
  date: number;
  seller_fee_basis_points: number;
  collection: {
    name: string;
    family: string;
  };
  properties: {
    files: {
      uri: string;
      type: string;
    }[];
    category: string;
    creators: {
      address: string;
      share: number;
    }[];
  };
  attributes: {
    trait_type: string;
    value: string;
  }[];
  compiler: string;
};

export interface HomeSectionsProps {
  backgroundColor: string;
}

export interface CustomContainerProps {
  children?: React.ReactNode;
  backgroundColor?: string;
}
