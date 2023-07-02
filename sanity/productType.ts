import { defineType,defineField } from "sanity";

export const productType = defineType({
    name: "Ptype",
    title: "Product Type",
    type: "document",
    fields:[
        defineField( {
        name: "Ptype",
        title:"Product Type",
        type:"string",
        }),
        
    ]
})