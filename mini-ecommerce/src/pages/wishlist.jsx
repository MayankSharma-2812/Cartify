import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Home.css';

export default function Wishlist() {
    const { items, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
    };

    if (items.length === 0) {
        return (
            <div className="wishlist-page">
                <div className="empty-wishlist">
                    <h1>Your Wishlist</h1>
                    <p>Your wishlist is currently empty.</p>
                    <button className="continue-shopping-btn">Continue Shopping</button>
                </div>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <div className="wishlist-header">
                <h1>Your Wishlist</h1>
                <p>{items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist</p>
            </div>

            <div className="wishlist-items">
                {items.map(item => (
                    <div key={item.id} className="wishlist-item">
                        <div className="wishlist-item-image">
                            <img src={item.image} alt={item.name} />
                            {item.isNew && <span className="product-badge">New</span>}
                            {item.originalPrice && (
                                <span className="sale-badge">Sale</span>
                            )}
                        </div>
                        <div className="wishlist-item-details">
                            <h3>{item.name}</h3>
                            <div className="wishlist-item-price">
                                <span className="current-price">${item.price}</span>
                                {item.originalPrice && (
                                    <span className="original-price">${item.originalPrice}</span>
                                )}
                            </div>
                            <p className="wishlist-item-description">{item.description}</p>
                        </div>
                        <div className="wishlist-item-actions">
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="remove-wishlist-btn"
                                onClick={() => handleRemoveFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="wishlist-summary">
                <div className="summary-content">
                    <h2>Wishlist Summary</h2>
                    <div className="summary-row">
                        <span>Total Items:</span>
                        <span>{items.length}</span>
                    </div>
                    <div className="summary-row">
                        <span>Total Value:</span>
                        <span>${items.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                    </div>
                    <button className="add-all-to-cart-btn">
                        Add All to Cart
                    </button>
                    <button className="continue-shopping-btn">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}