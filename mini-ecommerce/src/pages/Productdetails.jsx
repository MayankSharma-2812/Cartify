import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Home.css';

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="product-details-page">
                <div className="product-not-found">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="product-details-page">
            <div className="product-details-container">
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                    {product.isNew && <span className="product-badge">New</span>}
                    {product.originalPrice && (
                        <span className="sale-badge">Sale</span>
                    )}
                </div>

                <div className="product-info-section">
                    <h1 className="product-detail-title">{product.name}</h1>

                    <div className="product-detail-price">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice && (
                            <span className="original-price">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                        <h3>Features:</h3>
                        <ul>
                            {product.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="product-detail-actions">
                        <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                        <button
                            className={`wishlist-detail-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                            onClick={() => addToWishlist(product)}
                        >
                            {isInWishlist(product.id) ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
