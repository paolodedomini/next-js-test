import { gql } from "@apollo/client";

export default gql`
  query Prodotti {
     
     products(pageSize: 150) {
       products {
         id
         name
         image
         price
         sku
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
