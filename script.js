// const data = [];

// // Fetch all the Value 
const product_Name = document.getElementById("product_name");
const product_Price = document.getElementById("price");
const add_product_btn = document.getElementById("add_product");
const products = document.getElementById("products");
const cart = document.getElementById("cart");
const product_info = document.getElementById("product_info");

let total = 0;
let totalDisplay = document.createElement("p");
totalDisplay.textContent = `Total : Rs ${total}`;
cart.appendChild(totalDisplay);


add_product_btn.addEventListener("click", function(e){
    e.preventDefault();
    let name = product_Name.value;
    let price = parseInt(product_Price.value);

    if(name && price){
        product_info.style.display = "none";
        let productItem = document.createElement("li");
        productItem.style.listStyle = "none";
        productItem.style.display = "flex";
        productItem.style.justifyContent = "space-between";
        productItem.style.padding = "10px";
        productItem.style.borderBottom = "1px solid #ccc";
        productItem.textContent = `${name} - Rs ${price}`;
        products.appendChild(productItem);


        let add_Btn = document.createElement("button");
        add_Btn.textContent = "+";
        let substract_Btn = document.createElement("button")
        substract_Btn.textContent = "-";
        let num = document.createElement("p")
        num.textContent = 1;


        let value = 1;
        total += price;
        totalDisplay.textContent = `Total : Rs ${total}`

        let cartItems = document.createElement("li");
        cartItems.style.alignSelf = "center";
        cartItems.style.listStyle = "none";
        cartItems.textContent = `${name} ${price} x ${value}`;
        cart.appendChild(cartItems);

        add_Btn.addEventListener("click", function() {
            value++
            num.textContent = value;
            cartItems.textContent = `${name} ${price} x ${value}`;
            total += price;
            totalDisplay.textContent = `Total : Rs ${total}`
        })


        substract_Btn.addEventListener("click", function() {
            value--;
            if (value < 1) {
                num.textContent = value;
                products.removeChild(productItem);
                cart.removeChild(cartItems);
                total -= price;
                if (total === 0) {
                    product_info.style.display = "block";
                }

            } else {
                num.textContent = value;
                cartItems.textContent = `${name} ${price} x ${value}`;
                total -= price;
            }
            totalDisplay.textContent = `Total : Rs ${total}`
        })

        productItem.appendChild(substract_Btn);
        productItem.appendChild(num);
        productItem.appendChild(add_Btn);


        product_Name.value = "";
        product_Price.value = "";

        cart.appendChild(totalDisplay);

    } else {
        alert("Please fill all the fields");
        return;
    }
})


