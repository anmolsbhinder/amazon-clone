import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="banner"
          src="https://m.media-amazon.com/images/I/617pSVtbf3L._SX3000_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            title="Mi 4K Ultra HD Android Smart LED TV | L43M4-4AIN(Black)"
            price="29,499"
            image="https://m.media-amazon.com/images/I/612oGaxp3DS._SL1188_.jpg"
            rating={5}
          />

          <Product
            title="Mi 4K Ultra HD Android Smart LED TV | L43M4-4AIN(Black)"
            price="29,499"
            image="https://m.media-amazon.com/images/I/612oGaxp3DS._SL1188_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            image="https://m.media-amazon.com/images/I/61ATzURyvbL._SL1100_.jpg"
            title="Steelbird SB-45 R2K Oska ISI Certified Flip Up Helmet"
            price={1499}
            rating={4}
          />
          <Product
            image="https://m.media-amazon.com/images/I/51w0eQD7PTS._SL1000_.jpg"
            title="Durex Pleasure Pack (Durex Stimulating 200ml, Air 10s)"
            price={696}
            rating={5}
          />
          <Product
            image="https://m.media-amazon.com/images/I/71j3bPnm+UL._SL1500_.jpg"
            title="Sony Alpha ILCE-7M3K Full-Frame 24.2MP Mirrorless Digital SLR Camera"
            price="1,72,000"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg"
            title="Harry Potter and the Philosopher's Stone"
            price={500}
            rating={4}
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/514dQQA-rAS._SX365_BO1,204,203,200_.jpg"
            title="Kamasutra"
            price={969}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
