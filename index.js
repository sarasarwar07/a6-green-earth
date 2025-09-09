// console.log('js file connected')
const cart=[];

const loadCategory=()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then((res)=> res.json())
    .then((json)=> displayCategory (json.categories))
}

const removeActive=()=>{
    const categoryButtons=document.querySelectorAll('.category-btn')
    // console.log(categoryButtons);
    categoryButtons.forEach(btn=>btn.classList.remove('active'));
}

const loadCategoryId=(id)=>{
    manageSpinner(true);
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url);
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        removeActive();
        const clikBtn=document.getElementById(`category-btn-${id}`)
        // console.log(clikBtn);
        clikBtn.classList.add('active');
        displayCategoryPlant(data.plants)
    });
    manageSpinner(false);
}

const loadAllPlants=()=>{
    manageSpinner(true);
    const url=`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>displayCategoryPlant(data.plants))

    manageSpinner(false);
}

const displayCategoryPlant=(plants)=>{
    const plantContainer=document.getElementById('plant-container')
    plantContainer.innerHTML='';

    plants.forEach(plant =>{
       
       const card=document.createElement('div');
       card.className = "bg-white shadow rounded-lg p-3 flex flex-col justify-between"
       card.innerHTML=`
            <img class="h-40 w-full object-cover rounded mb-2" src="${plant.image}" alt="">

                <h3 class="font-medium">${plant.name}</h3>
                <p class="text-xs text-gray-600 mb-2">${plant.description.slice(0, 100)}</p>
                <div>
                  <span class="inline-block bg-[#F0FDF4] text-[#15803D] px-2 py-1 rounded-3xl text-xs ">${plant.category}</span>
                  <span class="font-bold ml-35"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
                </div>
                <button  onclick="addToCart('${plant.name}', ${plant.price})" class="bg-[#15803D] text-white px-3 py-1 rounded-3xl hover:bg-slate-500 mt-3">
                Add to Cart</button>      
       
       `;
       plantContainer.append(card);
    })
    
}

const displayCategory= (category) =>{
    const categoryContainer=document.getElementById('category-container')
    categoryContainer.innerHTML='';

    categoryContainer.innerHTML= `
    <button onclick="loadAllPlants()" class="category-btn w-full text-left hover:bg-[#15803D] hover:text-white">All Plants</button>
    `

    category.forEach((list) => {
        
    const btnList = document.createElement('ul');
    btnList.innerHTML = `
        <li id="category-btn-${list.id}" onclick="loadCategoryId(${list.id})" class="category-btn hover:bg-[#15803D] hover:text-white">${list.category_name}</li>
    `;

    
    categoryContainer.append(btnList);

  });
  
  
}

const addToCart=(name,price)=>{
    const itemQuantity = cart.find(item => item.name === name);
    if (itemQuantity) {
      itemQuantity.qty += 1; 
    } else {
      cart.push({ name, price, qty: 1 });
    }
    // console.log(cart);
    displayCart();
}

const removeCart = (index) => {

  if (cart[index].qty > 1) {
    cart[index].qty -= 1; 
  } else {
    cart.splice(index, 1); 
  }
  displayCart();
};

const displayCart=()=>{
    const cartContainer=document.getElementById('cart-container')
    const cartTotal=document.getElementById('cart-total')
    cartContainer.innerHTML='';
    let total = 0;

    cart.forEach((item,index)=>{
        total += item.price * item.qty;

        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded";
        li.innerHTML = `
          
            <div class="flex flex-col">
               <span>${item.name}</span>
               <span class="text-xs text-gray-600"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${item.price} x ${item.qty}</span>
            </div>
            <button onclick="removeCart(${index})" class="hover:bg-slate-200">x</button>
        `;
        cartContainer.append(li);
        
    })
    cartTotal.innerText='৳' + total;
}

const manageSpinner=(status)=>{
    if(status == true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('plant-container').classList.add('hidden')
    }
    else{
        document.getElementById('spinner').classList.add('hidden')
        document.getElementById('plant-container').classList.remove('hidden')
    }

}

loadCategory();
loadAllPlants();