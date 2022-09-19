// array map methods

const phones=[
    {brand:'Iphone',price:100000},
    {brand:'Samsung',price:10000},
    {brand:'oppo',price:12000},
    {brand:'vivo',price:15000},
    {brand:'micromax',price:9000},
    {brand:'nokia',price:5000},
]

const newArray=phones.map((phone)=>{
    return phone.price
})
console.log(newArray)
console.log(phones)