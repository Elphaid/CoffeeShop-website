  // Get the navbar and cart items container elements
  let navbar = document.querySelector('.navbar');
  let cartitems = document.querySelector('.cart-items-container');
  let searchform = document.querySelector('.search-form');

  // Toggle the 'active' class on the navbar when the menu button is clicked
  document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
  };

  // Toggle the 'active' class on the cart items container when the cart button is clicked
  document.querySelector('#cart-btn').onclick = () => {
    cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    searchform.classList.remove('active');
  };

  // Toggle the 'active' class on the search form when the search button is clicked
  document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitems.classList.remove('active');
  };

  // Cart item removal logic
  function removeCartItem(element) {
    // Assuming each cart item is a parent element with a class 'cart-item'
    let cartItem = element.closest('.cart-item');

    // Remove the cart item from the DOM
    if (cartItem) {
      cartItem.remove();
    }

    // You may also want to update the total price or perform other actions here
  }

  // Close the navbar, search form, and cart items container when scrolling
  window.onscroll = () => {
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitems.classList.remove('active');
  };
