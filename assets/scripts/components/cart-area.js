const cartAreaArray = document.querySelectorAll('[data-element="cart-area"]')

for (let i = 0; i < cartAreaArray.length; i++) {
  cartAreaInit(cartAreaArray[i])
}

function cartAreaInit (cartArea) {
  const button = cartArea.querySelector('[data-element="cart-area-button"]')
  button.addEventListener('click', areaToggle)

  function areaToggle () {
    cartArea.classList.toggle('cart__area_active')
  }
}
