document.addEventListener("DOMContentLoaded", function() {
 

   const button = document.querySelector("#button");
   const disclaimer = document.querySelector("#disclaimer");
   let showing = false;

   const onClick = function() {
      if (!showing) {
         disclaimer.innerHTML = "Oat milk, almond milk adds $0.60. Ingredient substitutions and additions adds $1.00";
         showing = true;
      } else {
         disclaimer.innerHTML = "";
         showing = false;
      }
   }

   button.addEventListener("click", onClick);

   let cart = [];

   // Function to add items to the cart
   function addToCart(item) {
      console.log("Adding to cart:", item); // Debug: Check if addToCart is called
      const itemName = item.dataset.name;
      const itemPrice = item.dataset.price;
      cart.push({ name: itemName, price: itemPrice });
      updateCartCount();
      updateCartDropdown();
   }

   // Function to update the cart count in the icon
   function updateCartCount() {
      const cartCount = document.getElementById('cart-count');
      cartCount.textContent = cart.length;
   }

   // Function to update the cart dropdown
   function updateCartDropdown() {
      const cartItemsList = document.getElementById('cart-items');
      cartItemsList.innerHTML = ''; // Clear the list

      // Add each item to the dropdown list
      cart.forEach(item => {
         const listItem = document.createElement('li');
         listItem.textContent = `${item.name} - $${item.price}`;
         cartItemsList.appendChild(listItem);
      });
   }

   // Add event listeners to all "Add to Cart" buttons
   document.querySelectorAll('.add').forEach(button => {
      button.addEventListener('click', function() {
         console.log("Button clicked!"); // Debug: Check if button is clicked
         const menuItem = button.closest('.item');
         console.log(menuItem); // Check if we are correctly selecting the item
         if (menuItem) {
            addToCart(menuItem);  // Add the clicked item to the cart
         }
      });
   });
});
// Checkout function
function checkout() {
   alert("Proceeding to checkout...");
   cart = []; // Clear the cart
   updateCartCount(); // Reset the cart count
   updateCartDropdown(); // Clear the cart dropdown
}

// Attach the event listener to the Checkout button
document.querySelector("button[onclick='checkout()']").addEventListener('click', checkout);

