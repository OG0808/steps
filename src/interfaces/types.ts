export type inputs = {
    name: string;
    phone: number | string;
    email: string;
  };
  

  //Tipos componente tittle 

  export type tittle ={
    title:string
     description:string
  }

  //tipos componente Plan 
 export  type Plan = {
    image: string;
    title: string;
    priceMo: string | number;
    priceYear: string | number;
    fre: string;
  };
  
 export  type Price = {
    image: string;
    priceYear: string;
    title: string;
  };




  export type Picks = {
    service: string;
    description: string;
    priceYr: number;
    priceMo:  number;
  };
  