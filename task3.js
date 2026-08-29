//Restaurant Order Management System
orders=[{
    orderId: 501,
    customer: "Kavi",
    items: [
        { name: "Pizza", price: 300, quantity: 2 },
        { name: "Burger", price: 150, quantity: 1 }
    ],
    address: {
        city: "Dindigul",
        pincode: 624001
    },
    payment: {
        method: "UPI",
        status: "Paid"
    }}]

const displayOrderDeatils=(_order)=>{
    for(const deatil of orders){
        console.log(deatil);
    }
}
displayOrderDeatils(orders[0]);
console.log("=========================================");


const displayFoodItems=(order)=>{
    for(const item of order.items){
        console.log(item);
    }
}
displayFoodItems(orders[0])

console.log("=========================================");

const findOrderById=(order, id) =>{
    const target = order.find(order => order.orderId === id);
    console.log(target);
}
findOrderById(orders,501);
console.log("=========================================");

const filterOrderByPayment = (order,paymentStatus) => {
    const target=order.filter(order => order.payment.status === paymentStatus );
    console.log(target);
}
filterOrderByPayment(orders,"Paid");
console.log("=========================================");

const customerName=orders.map(orders=>orders.customer);
console.log(customerName);
console.log("=========================================");

const addFood=(orders,newFood)=>{
    orders.items.push(newFood);
};
addFood(orders[0],{ name: "sandwages", price: 200, quantity: 1 })
console.log(orders[0].items);
console.log("=========================================");

 