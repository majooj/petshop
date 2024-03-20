document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    const checkoutButton = document.querySelector('.checkout');
  
    let cart = [];
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = button.getAttribute('data-id');
        const productName = button.parentElement.querySelector('h2').textContent;
        const productPrice = parseFloat(button.getAttribute('data-price'));
  
        cart.push({ id: productId, name: productName, price: productPrice });
        renderCart();
      });
    });
  
    function renderCart() {
      cartItemsList.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function() {
          removeFromCart(item.id);
        });
        cartItem.appendChild(removeButton);
        cartItemsList.appendChild(cartItem);
        total += item.price;
      });
      totalElement.textContent = total.toFixed(2);
    }
  
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      renderCart();
    }
  
    checkoutButton.addEventListener('click', function() {
      alert('Compra finalizada. Obrigado!');
      cart = [];
      renderCart();
    });
  });
  