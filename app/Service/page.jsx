import React from 'react'


async function productList(){
  let data = await fetch ("https://dummyapi.online/api/movies");
    data = await data.json();
    return data.movie;
}


async function page() {
  let product =  await productList();
  console.log(product);
  return (
    <div>
      <h1>Service</h1>
      {
        product.map((item) =>{
         <div key={item.id}>
          <p>Name{item.movie}</p>
          </div>
        })
      }
    </div>
  )
}

export default page
