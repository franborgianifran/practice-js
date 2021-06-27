calcDiscount=(originalPrice, discount)=>{
    var originalPrice = document.getElementById('originalPrice');
    const valueOriginalPrice = originalPrice.value;
    var discount = document.getElementById('discount');
    const valueDiscount = discount.value;
    let discountPrice = (valueOriginalPrice *(100 - valueDiscount))/100;
    const paragraph = document.getElementById('priceParagraph');
    const cupon = document.getElementById('cupon');
    let cuponValue = cupon.value;
    let lastPrice = discountPrice - cuponValue;

    paragraph.innerText = `El precio con descuento es de $${lastPrice}`;
}