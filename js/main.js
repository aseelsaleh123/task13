const getDATA =async ()=>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    console.log(data);
    return data;
    
};
getDATA();

    
const display =async ()=>{
    const data=await getDATA();
    const products = data.products;
    const result = products.map((product)=>{
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}"/>
        <a href="main.html?id=${product.id}">Details</a>
        </div>
        `;
    }).join('');
    document.querySelector(".products").innerHTML=result;

}
display();