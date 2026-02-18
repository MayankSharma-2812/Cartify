import { useCart } from '../context/CartContext';
import './Home.css';

export default function Cart() {
    const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, parseInt(newQuantity));
    };

    const handleRemoveItem = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            clearCart();
        }
    };

    if (items.length === 0) {
        return (
            <div className="cart-page">
                <div className="empty-cart">
                    <h1>Your Cart</h1>
                    <p>Your cart is currently empty.</p>
                    <button className="continue-shopping-btn">Continue Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-header">
                <h1>Your Cart</h1>
                <button className="clear-cart-btn" onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>

            <div className="cart-content">
                <div className="cart-items">
                    {items.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-price">${item.price}</p>
                            </div>
                            <div className="cart-item-quantity">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className="quantity-input"
                                />
                            </div>
                            <div className="cart-item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <button
                                className="remove-item-btn"
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-content">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                        <button className="continue-shopping-btn">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}