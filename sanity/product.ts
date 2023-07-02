import { defineField, defineType } from "sanity";

  export const product = defineType({
    name : "product",
    type:"document",
    title:"Product",
    fields:[
        defineField
        ({
            name:"title",
            title:"Product title",
            type:"string",
        }),
      defineField ( {
            name:"image",
            title:"Product Image",
            type:"array",
            of: [{
                name: "img",
                title: "Image",
                type: "image",
            }]
        }),
       defineField( {
            name:"price",
            title:"Product Price",
            type:"number"   
        }),
       defineField( {
            name:"details",
            title:"Product Details",
            type:"string"
        }),
        defineField({
            name:"care",
            title:"Product Care",
            type:"string"
        }),
        defineField(
            {
                name:"category",
                title:"Product Category",
                type:"reference",
                to:[
                    {
                        type:"category"
                    }
                ]
            }
        ),
        defineField(
            {
                name:"Ptype",
                title:"Product Type",
                type:"reference",
                to:[
                    {
                        type:"Ptype"
                    }
                ]
            }
        )
    
    ]

    })