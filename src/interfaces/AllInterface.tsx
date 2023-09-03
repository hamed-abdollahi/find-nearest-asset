export interface ComboType {
  label: string;
  value: number;
}

export interface DetailType {
  detail: boolean;
  id: number;
}

export interface FoodType {
  image: string;
  name: string;
  price: number;
}

export interface PointType {
  id: string,
  lat: number,
  lng: number
}

export interface FuncType {
  showOnMap(point:PointType) : void;
}



export interface CountriesList {
  countries: ComboType[];
}



export interface PlaceModel {
  id: string;
  name: string;
  category: string[];
  description: string;
  icon: string;
  rate: number;
  lat?: number;
  lng?: number;
  count? : number 
}


export interface DetailModel {
  id: string;
  resId : string;
  backImage: string;
  foods: FoodType[];
  placeImage: string[];
  description: string;
  address: string;
  openingTime: string;
  tel: string;
  website: string;
  email: string;
}


export interface PlaceList {
  places: PlaceModel[];
}

export interface RestaurantInventoryData {
  getRestaurantsLst: PlaceModel[];
}

export interface RestaurantInventoryVars {
  start: number;
}

export interface RestaurantDetailInventoryData {
  getRestaurantDetail: DetailModel;
}

export interface RestaurantDetailInventoryVars {
  resId: string;
}