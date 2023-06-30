  export const product ={
    name : "product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"title",
            title:"Product title",
            type:"string",
        },
        {
            name:"gender",
            title:"Product gender",
            type:"string",
        },
        {
            name:"category",
            title:"Product category",
            type:"string"
        },
        {
            name:"image",
            title:"Product Image",
            type:"array",
            of: [{
                name: "img",
                title: "Image",
                type: "image"
            }]
        },
        {
            name:"price",
            title:"Product Price",
            type:"number"   
        },
        {
            name:"details",
            title:"Product Details",
            type:"string"
        },
        {
            name:"care",
            title:"Product Care",
            type:"string"
        }
    
    ]

    }