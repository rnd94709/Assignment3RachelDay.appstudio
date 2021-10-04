
let products = ["Crocheted Dog Toy $10.00", " Slow Feeder Bowl $14.00", " Pawz Grey Treat Jar $20.00", " Blue Sweet Dreams Thermal Pajamas $30.00", " Checker Chewy Vuiton Bowl $32.00", " Red Heart Sweater Dress $27.00", " Velvet Hair Bow - Sun Kissed $12.00", " Into the Wild Leash $27.00"]
let wishList = []

btnViewProducts.onclick=function(){
  lblProducts.value = products
}



btnAddWishlist.onclick=function(){
  let addList = inptWishList.value
  i = products.includes(addList)
  if (i == true) {
    wishList.push(addList)
    lblSuccess.value = ("Successfully Added!")
  }
  else {
    lblSuccess.value = ("Input Error")
}
}

btnSeeWishList.onclick=function(){
  lblviewWishList.value = wishList
}
