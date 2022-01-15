export interface HouseTypes {
  id?: string;
  dateCreated?: string;
  house?: {
    price?: number;
    sqft?: number;
    address?: {
      city?: string;
      state?: string;
      stateAbbv?: string;
      street?: string;
      zipCode?: string;
    };
  };
  owner?: {
    firstName?: string;
    lastName?: string;
    id?: string;
    phoneNumber?: string;
  };
}
