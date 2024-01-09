const menu = [
{
  id:1,
  img:"./img/cup-829527_640.jpg",
  title:"cup of tea",
  categorie:"drink",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:2,
  img:"./img/drink-84533_640.jpg",
  title:"juice",
  categorie:"drink",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:3,
  img:"./img/drink-1532300_640.jpg",
  title:"water",
  categorie:"drink",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:4,
  img:"./img/girl-1561989_640.jpg",
  title:"girl",
  categorie:"sport",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:5,
  img:"./img/hamburger-494706_640.jpg",
  title:"hamburger",
  categorie:"food",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:6,
  img:"./img/hamburger-1414422_640.jpg",
  title:"hamburger",
  categorie:"food",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:7,
  img:"./img/jogging-2343558_640.jpg",
  title:"jogging",
  categorie:"sport",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:8,
  img:"./img/meal-337073_640.jpg",
  title:"meal",
  categorie:"food",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:9,
  img:"./img/mountain-biking-95032_640.jpg",
  title:"mountain",
  categorie:"sport",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:10,
  img:"./img/seal-3997128_640.jpg",
  title:"animals",
  categorie:"animals",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
{
  id:11,
  img:"./img/hot-chocolate-1782623_640.jpg",
  title:"coffee",
  categorie:"drink",
  desc:"lorem this cup of tea in the very nice is amazing the cup of tea in usa and britsh a lot coffee"
},
]

let itemsMenu = document.querySelector(".items");
let ct = document.querySelector(".categorie");

window.addEventListener("DOMContentLoaded",()=>{
  displayMenu(menu);
  filterMenu();
})

// Load Menu

displayMenu = (items) =>{
  let menuItems = items.map((menuItem)=>{
    return `
              <div class="item original-transform">
                  <img src="${menuItem.img}" alt="${menuItem.img}"/>
                  <div class="info">
                     <h3>${menuItem.title}</h3>
                     <p>${menuItem.desc}</p>
                  </div>
              </div> 
           `
  })
  menuItems = menuItems.join("");
  itemsMenu.innerHTML = menuItems;
}

// Filter Menu 

filterMenu = () => {
  const unique = menu.reduce((v,i)=>{
    if(!v.includes(i.categorie)){
      v.push(i.categorie);
    }
    return v;
  },["all"]);
 
  const arr = unique.map((e)=>{
    return `
    <button data-id="${e}">${e}</button>
    `
  }).join("");
  ct.innerHTML = arr;
  let btns = document.querySelectorAll("button");
  btns.forEach((e)=>{
    e.addEventListener("click",(ele)=>{
      const bt = ele.currentTarget.dataset.id;
      const fil = menu.filter((item)=>{
        if(item.categorie === bt){
          return item
        }
      })
      if(bt === "all"){
        displayMenu(menu);
      }
      else {
        displayMenu(fil)
      }
      console.log(fil);
    })
  })
}

