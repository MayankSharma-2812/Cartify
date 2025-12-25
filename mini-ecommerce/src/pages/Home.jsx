import "./Home.css"

export default function Home() {
    return (
        <div>
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
                                src="https://sothebys-com.brightspotcdn.com/dims4/default/fd636f0/2147483647/strip/true/crop/2184x1228+0+0/resize/684x385!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Faa%2F2d%2F033c971542aa8720dea7d13f9a9d%2Fseo-calendar.jpg" 
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
    );
}