

document.addEventListener('DOMContentLoaded',loadpage);

let itemList=[];
 function loadpage(){
     loadContent();
   
 }
 function loadContent(){


   let addingcart=document.querySelectorAll(".addtocart");
   addingcart.forEach((btn=>{
      btn.classList.add("yourcart");
   }))
  /* let addactive= document.querySelectorAll(".yourcart");
   addactive.forEach((btn)=>{
      btn.addEventListener('click',cartactive);
   })*/
   
   let cartlayout=document.querySelector(".cart");

   let cartbtn=document.querySelectorAll(".yourcart")
   cartbtn.forEach((btn)=>{
     // btn.addEventListener('click',cartactive);
   })
    let cartbn=document.querySelectorAll(".yourcart")
   cartbn.forEach((btn)=>{
      btn.addEventListener('click',addcart);
   })
   

   let itemList=[];

   let imagebox=document.querySelectorAll('img');
   imagebox.forEach((img)=>{
      img.classList.add("dressimg");
   })
 
let closed=document.querySelector(".closebutton");
closed.addEventListener('click',()=>{
   cartlayout.style="right:-100%;"
})


let price=document.querySelectorAll(".cart-price");
let quantity=document.querySelectorAll(".cart-qty");
quantity.forEach((input)=>{
   input.addEventListener('change',changeqty)
})



let trash= document.querySelectorAll(".svgtrash");
trash.forEach((btn)=> {
   btn.addEventListener('click',remove)
 });

 updateTotal();
}
 
function changeqty(){
console.log("qty")
   if(isNaN (this.value)|| this.value<1){
      this.value=1;
 
      alert("please enter a valid number")
   }
   loadContent();
   
}

function cartactive(){
   
   let cartlayout=document.querySelector(".cart");
  cartlayout.style="right:0;"

  loadContent(); 
 
}
 function remove(){
  //  itemList=[];
   loadContent();
    let mainContent=this.parentElement;
    let name1=mainContent.querySelector(".cart-title").innerHTML.trim();

if(confirm("Are You Sure To Remove From Cart?")){
   console.log(name1);
  itemList = itemList.filter(item => item.trim().toLowerCase() !== name1.trim().toLowerCase());

//itemList=itemList.filter((item)=>item.title!=name1);
   console.log(itemList)
   this.parentElement.remove();
   updateTotal();

}
}
 

 

  // itemList=[];
 //add to cart
 function addcart(){

   loadContent();
  var mainbox=this.parentElement;
  var product_name=mainbox.querySelector(".product").innerHTML.trim();
  let product_price=mainbox.querySelector(".price");
  let price=product_price.childNodes[0].textContent.trim();
  let product_img=mainbox.querySelector(".dressimg").src;
  //console.log(product_name,price,product_img);

   if(itemList.includes(product_name)){
      alert("Product Is Already In The Cart! ");
      
   }
   else{
      itemList.push(product_name);
    console.log(itemList);
  function newitem(name,rupees,image){
   alert(`  Your ${name} Is Added To Cart! 🛍️`);
   updateTotal();
   return `
         <div class="cart-items">
    <div class="cart-box">
            <img src="${image}">
               <div class="content-cart">
                   <div class="cart-title">${name}   </div>
                  <div class="cart-price">${rupees}     </div>
                 </div>
                 <div class="Qty"><input type="number" value="1"class="cart-qty"></div>
                   <div class="cart-amt">₹299 </div>
          <svg  class="svgtrash"   xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
             </div> 
        
             
             </div>`

  }
  let store_product=newitem(product_name,price,product_img);
  let creatediv=document.createElement('div');
  creatediv.innerHTML=store_product;
  let cart=document.querySelector(".cart-items");
  cart.append(creatediv);
 
loadContent();
//end to add cart
 }}
 //update total 
function updateTotal(){
  //total 
  let cartBox=document.querySelectorAll(".cart-box");

let totalVal=document.querySelector(".total-price");

let total=0;
cartBox.forEach((product)=>{
   //for each product 
   //select--price& qty
let priceElement=product.querySelector(".cart-price");
let priceValue= parseFloat(priceElement.innerHTML.replace("₹"," "));
let cartQty=product.querySelector(".cart-qty").value;
//console.log(priceValue,cartQty);
let cartAmount=priceValue*cartQty;
total+=(priceValue*cartQty);
product.querySelector(".cart-amt").innerText="₹ "+ cartAmount;

});
totalVal.innerHTML=  "Rs. "+total;
}

