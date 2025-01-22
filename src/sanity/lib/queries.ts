import { defineQuery } from "next-sanity";

export const allproducts = defineQuery(`
  *[_type == "product"]{
    _id,
    productName,
    category,
    price,    
    inventory,
    status, 
    description,    
    "imageUrl": image.asset->url,
    colors
  }
`);

export const fourproducts = defineQuery(`
  *[_type == "product"][0..3]{
    _id,
    productName,
    category,
    price,    
    inventory,
    status, 
    description,    
    "imageUrl": image.asset->url,
    colors
  }
`);
