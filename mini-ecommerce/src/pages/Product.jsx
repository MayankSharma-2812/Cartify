import { useState, useEffect } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './Home.css';

export default function Product() {
    const { addToCart } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filteredProducts = products.filter(product => {
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        setSelectedProducts(filteredProducts);
    }, [selectedCategory, searchTerm]);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleSearch = (e) => setSearchTerm(e.target.value);

    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

    return (
        <div className="products-page">
            <div className="products-header">
                <h1>All Products</h1>
                <div className="products-controls">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="category-select"
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="products-grid">
                {selectedProducts.length > 0 ? (
                    selectedProducts.map(product => (
                        <div className="hot-product-card" key={product.id}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} />
                                {product.isNew && <span className="product-badge">New</span>}
                                {product.originalPrice && (
                                    <span className="sale-badge">Sale</span>
                                )}
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
                    ))
                ) : (
                    <div className="no-products">
                        <p>No products found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}