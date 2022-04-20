import { gql } from "@apollo/client";

export default gql`
  query Prodotti {
     products {
       products {
         id
         name
         image
         price
         sku
         categories {
          id
          name
        }
         attributeValues {
           attributeId
           id
           name
           htmlColor
         }
         productVariants {
           id
           name
           image
           price
           categories {
             id
             name
           }
         }
       }

     }
   }
 
`;
