const getDAta =async ()=>{
    const params=new URLSearchParams(window.location.search);
    const id =params.get('id');
  
    
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
getDAta();
const displayproduct=async ()=>{
    const data = await getDAta();
    const images = data.images.map((img)=>{
        return `
        <img src='${img}'/>
        `;
    }).join('')
    const result =`<div class="productt">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <spam>${data.price}</spam>
    </div>`
    document.querySelector(".productss").innerHTML=result;
    document.querySelector(".imagess").innerHTML=images;
}
displayproduct();