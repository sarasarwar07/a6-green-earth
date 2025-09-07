// console.log('js file connected')

const loadCategory=()=> {
    fetch('https://openapi.programming-hero.com/api/categories')
    .then((res)=> res.json())
    .then((json)=> displayCategory (json.categories))
}

const displayCategory= (category) =>{
    const categoryContainer=document.getElementById('category-container')
    categoryContainer.innerHTML='';
    category.forEach((list) => {
        
    const btnList = document.createElement('ul');
    btnList.innerHTML = `
        <li id="${list.category_id}" class=" hover:bg-[#15803D] hover:text-white ">${list.category_name}</li>
    `;

    
    categoryContainer.append(btnList);

  });
  
  
}

loadCategory();