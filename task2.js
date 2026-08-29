//Mobile Store Management System
phoneDeatils=[{
    phoneId:1,
    brand:"samsung",
    model:"s23",
    price:60000,
    stock:10,
    colors:["Black","white","Green"],
    specifications:{ram:["8GB"],storage:["256GB"],camara:["50MP"]}

}]

const displayPhoneDeatils=(phoneDeatil)=>{
    for(const key in  phoneDeatil){
        console.log(key +":" +phoneDeatil[key],);
    }
}
displayPhoneDeatils(phoneDeatils[0]);


const filterPhoneByBrand=(phoneDeatils,target)=>{
    const filterPhone=phoneDeatils.filter( phoneDeatils => phoneDeatils.brand === target);
    console.log("\n",filterPhone);
    return filterPhone;
}
filterPhoneByBrand(phoneDeatils,"samsung");

const filterPhoneById=(Deatil,targetId)=>{
      const filterPhone=Deatil.filter(phoneDeatil => phoneDeatil.phoneId === targetId); 
      console.log(JSON.stringify(filterPhone,null,1));
   
}

filterPhoneById(phoneDeatils,1);

const phoneModels=phoneDeatils.map(phone=>phone.model);
console.log(phoneModels);

const addcolor=(phoneDeatil,newcolor)=>{
    phoneDeatil.colors.push(newcolor);
};
addcolor(phoneDeatils[0],'Yellow');
console.log(phoneDeatils[0].colors);

