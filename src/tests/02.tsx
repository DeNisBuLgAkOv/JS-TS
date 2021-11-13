
type CityType ={
    title: string
    countryTitle:string
}
type AddressType ={
    streetTitle:string 
    city: CityType
}

type TechType ={
    id:number
    title:string
}

type StudentType ={
    name:string
    age:number
    isActive: boolean
    address:AddressType
    technologies: Array<TechType>

}






const student : StudentType ={
    name: "Denis",
    age:21,
    isActive : false,
    address:{
        streetTitle: "sfjsdf",
        city:{
            title: "Ros",
            countryTitle: "Rus"
        }
    },

    technologies: [
        {   id:1,
            title:"HTML"
        },
        {   id:2,
            title:"Css"
        },
        {   id:3,
            title:"React"
        },
    ]
}