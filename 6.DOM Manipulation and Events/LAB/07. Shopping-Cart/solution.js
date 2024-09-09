function solve() {
   const productEl = document.querySelector('.shopping-cart');
   const resultElement = document.querySelector('textarea[disabled]');
      const checkoutButton = document.querySelector('button.checkout');
   const arr=Array.from(productEl);
   const products = [];
   productEl.addEventListener('click', (e)=>{
      if (e.target.tagName !== 'BUTTON') {
         return;
      }

      if (e.target.textContent.trim() !== 'Add') {
         return;
      }

      const tempElement = e.target.closest('.product');
      const name = tempElement.querySelector('.product-title').textContent;
      const price = Number(tempElement.querySelector('.product-line-price').textContent);

      // Print in text area
      resultElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      products.push({
         name,
         price,
      });
   })
   checkoutButton.addEventListener('click', (e)=>{
      const totalPrice = products.reduce((price,product)=> price+product.price, 0);
      const productList = Array.from(new Set(products.map(product => product.name)));
      resultElement.value += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      document.querySelectorAll('button')
         .forEach(el => el.setAttribute('disabled', 'disabled'));
   });
      
}