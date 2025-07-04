let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");
  const whatsapp = document.getElementById("whatsapp");
  cartItems.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    sum += item.price;
  });
  total.textContent = `Total: $${sum}`;
  const msg = encodeURIComponent(
    "Hola, quiero hacer un pedido mayorista:\n" +
    cart.map(i => `- ${i.name}: $${i.price}`).join("\n") +
    `\nTotal: $${sum}`
  );
  whatsapp.href = "https://wa.me/549XXXXXXXXXX?text=" + msg;
  document.getElementById("whatsapp-float").href = whatsapp.href;
}
