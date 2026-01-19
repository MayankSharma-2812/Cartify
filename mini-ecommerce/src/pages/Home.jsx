import "./Home.css"

export default function Home() {
    return (
<div>
        <div className="home-container">
            <div className="welcome-section">
                <h1>Welcome to Cartify</h1>
                <p>Your one-stop destination for premium footwear</p>
            </div>
            <div className="hero-section">
                <div className="slider">
                    <figure>
                        {/* Slide 1 - Air Jordan 1 */}
                        <div className="slide">
                            <img 
                                src="https://cdn.shopify.com/s/files/1/0872/5528/6034/files/Air_Jordan_1_Rare_Air.jpg?v=1743594092" 
                                alt="Air Jordan 1 Retro High OG" 
                            />
                            <div className="slide-content">
                                <h1>Air Jordan 1 Retro High OG</h1>
                                <p>OG colorway with premium leather construction</p>
                            </div>
                        </div>

                        {/* Slide 2 - Yeezy Boost */}
                        <div className="slide">
                            <img 
                                src="https://media.blackandwhite-ff.com/10000/2bb1dfe4-78ba-45b2-a43c-b59b64a44445_tophero350.jpg" 
                                alt="Adidas Yeezy Boost 350 V2"
                              />
                            <div className="slide-content">
                                <h1>Yeezy Boost 350 V2 Zebra</h1>
                                <p>Primeknit upper with responsive Boost cushioning</p>
                            </div>
                        </div>

                        {/* Slide 3 - Nike Dunk Low */}
                        <div className="slide">
                            <img 
                                src="https://sothebys-com.brightspotcdn.com/dims4/default/fd636f0/2147483647/strip/true/crop/2184x1228+0+0/resize/684x385/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Faa%2F2d%2F033c971542aa8720dea7d13f9a9d%2Fseo-calendar.jpg" 
                                alt="Nike Dunk Low Retro"
                            />
                            <div className="slide-content">
                                <h1>Nike Dunk Low Retro</h1>
                                <p>Retro basketball style with modern comfort</p>
                            </div>
                        </div>

                        {/* Slide 4 - New Balance 550 */}
                        <div className="slide">
                            <img 
                                src="https://nb.scene7.com/is/image/NB/bb550wt1_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=880&hei=935" 
                                alt="New Balance 550"
                            />
                            <div className="slide-content">
                                <h1>New Balance 550</h1>
                                <p>1989 basketball icon reimagined for today</p>
                            </div>
                        </div>

                        {/* Slide 5 - Air Jordan 4 */}
                        <div className="slide">
                            <img 
                                src="https://wallpapers.com/images/hd/air-jordan-4-32d509rtkijyxord.jpg" 
                                alt="Air Jordan 4 Retro"
                            />
                            <div className="slide-content">
                                <h1>Air Jordan 4 Retro</h1>
                                <p>Iconic silhouette with visible Air cushioning</p>
                            </div>
                        </div>

                        {/* Slide 6 - Air Force 1 */}
                        <div className="slide">
                            <img 
                                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZSUyMGFpciUyMGZvcmNlfGVufDB8fDB8fHww" 
                                alt="Nike Air Force 1 '07"
                            />
                            <div className="slide-content">
                                <h1>Nike Air Force 1 '07</h1>
                                <p>Classic white-on-white court style</p>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
        <div className="features-section">
          <h1>Why Choose Us</h1>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛍️</div>
              <h3>Wide Selection</h3>
              <p>Discover the latest trends in footwear from top brands worldwide.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>Get your favorite shoes delivered to your doorstep in no time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>Shop with confidence using our secure payment methods.</p>
            </div>
          </div>
        </div>

        <div className="hots">
          <h1>Hot Products</h1>
          <div className="hot-products">
            {[
              {
                id: 1,
                name: "Nike Air Force 1 '07",
                price: 100,
                originalPrice: 120,
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?fm=jpg&q=80&w=1000",
                isNew: true
              },
              {
                id: 2,
                name: "Adidas Ultraboost",
                price: 180,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=80&w=1000",
                isNew: false
              },
              {
                id: 3,
                name: "Puma RS-X",
                price: 110,
                originalPrice: 140,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?fm=jpg&q=80&w=1000",
                isNew: true
              },
              {
                id: 4,
                name: "New Balance 574",
                price: 90,
                image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?fm=jpg&q=80&w=1000",
                isNew: false
              }
            ].map(product => (
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
    )
}
 