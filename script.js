
//accessing elements

const ContainerEle=document.querySelector('#contain1')



function products()
{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(item=>{
        console.log(item)
        item.map((data)=>{
            ContainerEle.innerHTML+=`<div class="card" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><b>${data.title}</b></h5>
              <p class="card-text">${data.description}.</p>
              <p class="price"><b>$ ${data.price}</b></p>
              <p><i class="glyphicon glyphicon-star"></i> <i class="glyphicon glyphicon-star"></i> <i class="glyphicon glyphicon-star"></i>
              <i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i></p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
    })}
    
    )
}
products()