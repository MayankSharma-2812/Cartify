import "./Home.css"

export default function Home() {
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
                            <div className="feature-icon">{`&#x${feature+159}`}</div>
                            <h3>{`Feature ${feature}`}</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hots">
                <h1>Hot Products</h1>
                <div className="hot-products">
                    {[1, 2, 3, 4].map(product => (
                        <div className="hot-product-card" key={product}>
                            <div className="product-image-container">
                                <img src={`/images/shoes/${product}.jpg`} alt={`Product ${product}`} />
                                {product === 1 && <span className="product-badge">New</span>}
                            </div>
                            <div className="product-info">
                                <h2>{`Product ${product}`}</h2>
                                <div className="product-price">
                                    ${product * 10}
                                    {product === 2 && (
                                        <span className="original-price">${product * 15}</span>
                                    )}
                                </div>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-more">
                <button className="show-more-btn">Show More</button>
            </div>
        </div>
