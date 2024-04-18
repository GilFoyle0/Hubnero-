
// 1 

const numsTransform = (nums) => nums.toSorted((a, b) => a - b);

// 2
const accum = (str) => {
    return Array.from(str.toLowerCase()).reduce((acc, next, idx) => {
        acc.push(next.toUpperCase()+next.repeat(idx));
        return acc;
     }, []).join('-')
 }


 // 3 

 const products = [
    { name: 'Футболка', price: 20, quantity: 2 },
    { name: 'Джинсы', price: 50, quantity: 1 },
    { name: 'Носки', price: 5, quantity: 10 },
    { name: 'Штаны', price: 30, quantity: 1 }
    ];


const cashOut = (products) => {
   return products.reduce((acc, next) => acc+=next.price*next.quantity, 0);
}




