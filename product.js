fetch("https://kea-alt-del.dk/t7/api/products")
.then((response) => response.json())
.then((data) => showProduct(data)); 

function showProduct(product) {
  console.log(product);
  document.querySelector(".hejmeddig h1").textContent =
      product.productdisplayname;


}  

//     Object { id: 1163, gender: "Men", category: "Apparel", … }
// ​​
// articletype: "Tshirts"
// ​​
// brandname: "Nike"
// ​​
// category: "Apparel"
// ​​
// discount: null
// ​​
// gender: "Men"
// ​​
// id: 1163
// ​​
// price: 895
// ​​
// productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
// ​​
// productionyear: 2011
// ​​
// season: "Summer"
// ​​
// soldout: 0
// ​​
// subcategory: "Topwear"
// ​​
// usagetype: "Sports"