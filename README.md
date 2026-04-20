# Shopping Cart

A simple shopping cart application that demonstrates how users can browse items, add them to a cart, and manage their selections. This project focuses on core e-commerce functionality and state management between components.

## 🚀 Features

* Display list of products
* Add items to cart
* Remove items from cart
* Update item quantity
* Calculate total price
* Dynamic UI updates

Shopping cart systems generally revolve around letting users manage items before checkout, including adding, removing, and adjusting quantities ([GitHub][1])

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* CSS

---

## 📁 Project Structure

```bash
.
├── src/
│   ├── components/    # UI components
│   ├── pages/         # Page-level components
│   ├── context/       # State management (cart logic)
│   └── App.jsx        # Main app component
├── public/
├── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Farzaamm/shopping-cart.git
cd shopping-cart
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the app

```bash
npm run dev
```

---

## 📌 Functionality Overview

### Product Display

* Products are fetched or stored locally
* Rendered dynamically in the UI

### Cart Management

* Add items to cart
* Increase/decrease quantity
* Remove items

### Total Calculation

* Cart automatically updates total price based on items and quantities

---

## 💡 How It Works

* State is managed centrally (e.g. Context API)
* Components read and update cart state
* UI re-renders automatically when state changes

---

## ⚠️ Limitations

* No backend or database
* No authentication
* No real payment system
* Data resets on refresh (if not persisted)
* Not production-ready

---

## 📄 License

MIT License

[1]: https://github.com/topics/shoppingcart?utm_source=chatgpt.com "shoppingcart · GitHub Topics · GitHub"
