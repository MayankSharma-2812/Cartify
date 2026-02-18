import "./Home.css"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

export default function Home() {
    const { addToCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();

    const hotProducts = products.slice(0, 4);

    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="slider">
                    <figure>
                        {[1, 2, 3, 4, 5, 6].map(slide => (
                            <div className="slide" key={slide}>
                                <img
                                    src={`/images/shoes/${slide}.jpg`}
                                    alt={`Slide ${slide}`}
                                />
                                <div className="slide-content">
                                    <h1>{`Slide ${slide}`}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        ))}
                    </figure>
                </div>
            </div>
            <div className="features-section">
                <h1>Why Choose Us</h1>
                <div className="features-grid">
                    {[1, 2, 3].map(feature => (
                        <div className="feature-card" key={feature}>
                            <div className="feature-icon">{`&#x${feature + 159}`}</div>
                            <h3>{`Feature ${feature}`}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hots">
                <h1>Hot Products</h1>
                <div className="hot-products">
                    {hotProducts.map(product => (
                        <div className="hot-product-card" key={product.id}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} />
                                {product.isNew && <span className="product-badge">New</span>}
                            </div>
                            <div className="product-info">
                                <h2>{product.name}</h2>
                                <div className="product-price">
                                    ${product.price}
                                    {product.originalPrice && (
                                        <span className="original-price">${product.originalPrice}</span>
                                    )}
                                </div>
                                <div className="product-actions">
                                    <button
                                        className="add-to-cart"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        className={`wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                                        onClick={() => addToWishlist(product)}
                                    >
                                        {isInWishlist(product.id) ? '❤️' : '🤍'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-more">
                <button className="show-more-btn">Show More</button>
            </div>
        </div>
    )
}
