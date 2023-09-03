import { gql} from "@apollo/client";

export const GET_Restaurant_INVENTORY = gql`
query Get($start: Int!){
    getRestaurantsLst(start :$start) {
        id
        name
        category
        rate
        icon
        description
        lat
        lng
        count
    }
  }
`;

export const GET_RestaurantDetail_INVENTORY = gql`
query Get($resId: String!){
    getRestaurantDetail(resId :$resId) {
      id
      resId
      backImage
      foods{
         image
         name
         price
      }
      placeImage
      description
      address
      openingTime
      tel
      website
      email
    }
  }
`;