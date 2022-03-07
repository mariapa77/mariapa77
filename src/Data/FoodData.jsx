export function formatPrice(price){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const foodItems =[
    {
        name: "Peperoni Pizza",
        img: "/img/peperoni.jpeg",
        section:"Pizza",
        price: 3
        
    },
    {
        name: "Cheese Pizza",
        img: "/img/queso.jpeg",
        section:"Pizza",
        price: 2.5
    
    },
    {
        name: "Avocado Salad",
        img: "/img/Salad.jpeg",
        section: "Salad",
        price: 5

    },
    {
        name: "Pesto Salad",
        img: "/img/Salad2.jpeg",
        section: "Salad",
        price: 4.5

    },
    {
        name: "Marina Pasta",
        img: "/img/pasta.jpeg",
        section: "Pasta",
        price: 4.5
    },
    {
        name: " Fetuchini Pasta",
        img: "/img/pasta3.jpeg",
        section: "Pasta",
        price: 4.5
    },
    {
        name: "Tomato Soup",
        img: "/img/sopa.jpeg",
        section: "Soup",
        price: 4
    },
    {
        name: " Mushrooms Soup",
        img: "/img/hongos.jpeg",
        section: "Soup",
        price: 4
    },
   
    {
        name: 'Soda',
        img: '/img/drinks.jpeg',
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Root Beer'],
        price: 3
    },
    {
        name: 'Coffe',
        img: '/img/coffe.jpeg',
        section: 'Drinks',
        price: 2.5
    }
];

export const foods = foodItems.reduce((res,food) => {
    if(!res[food.section]){
        res[food.section]= [];
    }
    res[food.section].push(food);
    return res;
    

}, {});