import { defineType,defineField } from "sanity";

export const category = defineType({
    name: "category",
    title: "Category",
    type: "document",
    fields:[
        defineField( {
        name: "Cname",
        title:"Category Name",
        type:"string",

        }),
        
    ]
})