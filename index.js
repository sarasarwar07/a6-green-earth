// console.log('js file connected')

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

}

const loadAllPlants=()=>{
    const url=`https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then((res)=> res.json())
    .then((data)=>displayCategoryPlant(data.plants))
}

// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500

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
                <button class="bg-[#15803D] text-white px-3 py-1 rounded-3xl hover:bg-slate-500 mt-3">
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
        <li id="category-btn-${list.id}" onclick="loadCategoryId(${list.id})" class="category-btn">${list.category_name}</li>
    `;

    
    categoryContainer.append(btnList);

  });
  
  
}

loadCategory();