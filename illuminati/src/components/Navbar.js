import React, { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);
  let popupTimeout;

  const showUserPopup = () => {
    clearTimeout(popupTimeout);
    setIsUserPopupVisible(true);
  };

  const hideUserPopup = () => {
    popupTimeout = setTimeout(() => {
      setIsUserPopupVisible(false);
    }, 300); // Adjust the delay as needed
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>
        <div className="nav-links">
          {/* Men Section */}
          <div className="nav-item">
            <a href="#" className="nav-link">MEN</a>
            <div className="dropdown-container">
              <div className="dropdown-section">
                {/* 1st Column: Topwear and Indian Festive Wear */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Topwear</span>
                  <a href="#" className="dropdown-link">T-Shirts</a>
                  <a href="#" className="dropdown-link">Casual Shirts</a>
                  <a href="#" className="dropdown-link">Formal Shirts</a>
                  <a href="#" className="dropdown-link">Sweatshirts</a>
                  <a href="#" className="dropdown-link">Sweaters</a>
                  <a href="#" className="dropdown-link">Jackets</a>
                  <a href="#" className="dropdown-link">Blazers & Coats</a>
                  <a href="#" className="dropdown-link">Suits</a>
                  <a href="#" className="dropdown-link">Rain Jackets</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Indian & Festive Wear</span>
                  <a href="#" className="dropdown-link">Kurtas & Kurta Sets</a>
                  <a href="#" className="dropdown-link">Sherwanis</a>
                  <a href="#" className="dropdown-link">Nehru Jackets</a>
                  <a href="#" className="dropdown-link">Dhotis</a>
                </div>

                {/* 2nd Column: Bottom Wear, Innerwear, Plus Size */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Bottom Wear</span>
                  <a href="#" className="dropdown-link">Jeans</a>
                  <a href="#" className="dropdown-link">Casual Trousers</a>
                  <a href="#" className="dropdown-link">Formal Trousers</a>
                  <a href="#" className="dropdown-link">Shorts</a>
                  <a href="#" className="dropdown-link">Track Pants & Joggers</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Innerwear & Sleepwear</span>
                  <a href="#" className="dropdown-link">Briefs & Trunks</a>
                  <a href="#" className="dropdown-link">Boxers</a>
                  <a href="#" className="dropdown-link">Vests</a>
                  <a href="#" className="dropdown-link">Sleepwear & Loungewear</a>
                  <a href="#" className="dropdown-link">Thermals</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Plus Size</span>
                </div>

                {/* 3rd Column: Footwear, Personal Care, Sunglasses, Watches */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Footwear</span>
                  <a href="#" className="dropdown-link">Casual Shoes</a>
                  <a href="#" className="dropdown-link">Sports Shoes</a>
                  <a href="#" className="dropdown-link">Formal Shoes</a>
                  <a href="#" className="dropdown-link">Sneakers</a>
                  <a href="#" className="dropdown-link">Sandals & Floaters</a>
                  <a href="#" className="dropdown-link">Socks</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading" >Personal Care & Grooming</span>
                  <span className="sub-dropdown-heading">Sunglasses & Frames</span>
                  <span className="sub-dropdown-heading" >Watches</span>
                </div>

                {/* 4th Column: Sports and Gadgets */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Sports & Active Wear</span>
                  <a href="#" className="dropdown-link">Sports T-Shirts</a>
                  <a href="#" className="dropdown-link">Track Pants & Shorts</a>
                  <a href="#" className="dropdown-link">Tracksuits</a>
                  <a href="#" className="dropdown-link">Jackets & Sweatshirts</a>
                  <a href="#" className="dropdown-link">Sports Shoes</a>
                  <a href="#" className="dropdown-link">Sports Sandals</a>
                  <a href="#" className="dropdown-link">Accessories</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Gadgets</span>
                  <a href="#" className="dropdown-link">Smart Wearables</a>
                  <a href="#" className="dropdown-link">Fitness Gadgets</a>
                  <a href="#" className="dropdown-link">Headphones</a>
                  <a href="#" className="dropdown-link">Speakers</a>
                  <a href="#" className="dropdown-link">VR Headsets</a>
                </div>

                {/* 5th Column: Fashion Accessories, Bags, Luggages */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Fashion Accessories</span>
                  <a href="#" className="dropdown-link">Wallets</a>
                  <a href="#" className="dropdown-link">Belts</a>
                  <a href="#" className="dropdown-link">Perfumes & Body Mists</a>
                  <a href="#" className="dropdown-link">Trimmers</a>
                  <a href="#" className="dropdown-link">Deodorants</a>
                  <a href="#" className="dropdown-link">Ties, Cufflinks & Pocket Squares</a>
                  <a href="#" className="dropdown-link">Accessory Gift Sets</a>
                  <a href="#" className="dropdown-link">Caps & Hats</a>
                  <a href="#" className="dropdown-link">Mufflers, Scarves & Gloves</a>
                  <a href="#" className="dropdown-link">Phone Cases</a>
                  <a href="#" className="dropdown-link">Rings & Wrist Wear</a>
                  <a href="#" className="dropdown-link">Helmets</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading"  >Bags & Backpacks</span>
                  <span className="sub-dropdown-heading"  >Luggages & Trolleys</span>
                </div>
              </div>
            </div>
          </div>

          {/* Women Section */}
          <div className="nav-item">
            <a href="#" className="nav-link">WOMEN</a>
            <div className="dropdown-container">
              <div className="dropdown-section">
                {/* 1st Column: Indian & Fusion Wear */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Indian & Fusion Wear</span>
                  <a href="#" className="dropdown-link">Kurtas & Suits</a>
                  <a href="#" className="dropdown-link">Kurtis, Tunics & Tops</a>
                  <a href="#" className="dropdown-link">Sarees</a>
                  <a href="#" className="dropdown-link">Ethnic Wear</a>
                  <a href="#" className="dropdown-link">Leggings, Salwars & Churidars</a>
                  <a href="#" className="dropdown-link">Skirts & Palazzos</a>
                  <a href="#" className="dropdown-link">Dress Materials</a>
                  <a href="#" className="dropdown-link">Lehenga Cholis</a>
                  <a href="#" className="dropdown-link">Dupattas & Shawls</a>
                  <a href="#" className="dropdown-link">Jackets</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Belts, Scarves & More</span>
                  <span className="sub-dropdown-heading">Watches & Wearables</span>
                </div>

                {/* 2nd Column: Western Wear */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Western Wear</span>
                  <a href="#" className="dropdown-link">Dresses</a>
                  <a href="#" className="dropdown-link">Tops</a>
                  <a href="#" className="dropdown-link">Tshirts</a>
                  <a href="#" className="dropdown-link">Jeans</a>
                  <a href="#" className="dropdown-link">Trousers & Capris</a>
                  <a href="#" className="dropdown-link">Shorts & Skirts</a>
                  <a href="#" className="dropdown-link">Co-ords</a>
                  <a href="#" className="dropdown-link">Playsuits</a>
                  <a href="#" className="dropdown-link">Jumpsuits</a>
                  <a href="#" className="dropdown-link">Shrugs</a>
                  <a href="#" className="dropdown-link">Sweaters & Sweatshirts</a>
                  <a href="#" className="dropdown-link">Jackets & Coats</a>
                  <a href="#" className="dropdown-link">Blazers & Waistcoats</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Plus Size</span>
                </div>

                {/* 3rd Column: Maternity, Sunglasses & Frames, Footwear, Sports & Active Wear */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Maternity</span>
                  <span className="sub-dropdown-heading">Sunglasses & Frames</span>
                  <span className="sub-dropdown-heading">Footwear</span>
                  <a href="#" className="dropdown-link">Flats</a>
                  <a href="#" className="dropdown-link">Casual Shoes</a>
                  <a href="#" className="dropdown-link">Heels</a>
                  <a href="#" className="dropdown-link">Boots</a>
                  <a href="#" className="dropdown-link">Sports Shoes & Floaters</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Sports & Active Wear</span>
                  <a href="#" className="dropdown-link">Clothing</a>
                  <a href="#" className="dropdown-link">Footwear</a>
                  <a href="#" className="dropdown-link">Sports Accessories</a>
                  <a href="#" className="dropdown-link">Sports Equipment</a>
                </div>

                {/* 4th Column: Lingerie & Sleepwear, Beauty & Personal Care */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Lingerie & Sleepwear</span>
                  <a href="#" className="dropdown-link">Bra</a>
                  <a href="#" className="dropdown-link">Briefs</a>
                  <a href="#" className="dropdown-link">Shapewear</a>
                  <a href="#" className="dropdown-link">Sleepwear & Loungewear</a>
                  <a href="#" className="dropdown-link">Swimwear</a>
                  <a href="#" className="dropdown-link">Camisoles & Thermals</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Beauty & Personal Care</span>
                  <a href="#" className="dropdown-link">Makeup</a>
                  <a href="#" className="dropdown-link">Skincare</a>
                  <a href="#" className="dropdown-link">Premium Beauty</a>
                  <a href="#" className="dropdown-link">Lipsticks</a>
                  <a href="#" className="dropdown-link">Fragrances</a>
                </div>

                {/* 5th Column: Gadgets, Jewellery */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Gadgets</span>
                  <a href="#" className="dropdown-link">Smart Wearables</a>
                  <a href="#" className="dropdown-link">Fitness Gadgets</a>
                  <a href="#" className="dropdown-link">Headphones</a>
                  <a href="#" className="dropdown-link">Speakers</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Jewellery</span>
                  <a href="#" className="dropdown-link">Fashion Jewellery</a>
                  <a href="#" className="dropdown-link">Fine Jewellery</a>
                  <a href="#" className="dropdown-link">Earrings</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Backpacks</span>
                  <span className="sub-dropdown-heading">Handbags, Bags & Wallets</span>
                  <span className="sub-dropdown-heading">Luggages & Trolleys</span>
                </div>
              </div>
            </div>
          </div>


          {/* Kids Section */}
          <div className="nav-item">
            <a href="#" className="nav-link">KIDS</a>
            <div className="dropdown-container">
              <div className="dropdown-section">
                {/* 1st Column: Boys Clothing */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Boys Clothing</span>
                  <a href="#" className="dropdown-link">T-Shirts</a>
                  <a href="#" className="dropdown-link">Shirts</a>
                  <a href="#" className="dropdown-link">Shorts</a>
                  <a href="#" className="dropdown-link">Jeans</a>
                  <a href="#" className="dropdown-link">Trousers</a>
                  <a href="#" className="dropdown-link">Clothing Sets</a>
                  <a href="#" className="dropdown-link">Ethnic Wear</a>
                  <a href="#" className="dropdown-link">Track Pants &amp; Pyjamas</a>
                  <a href="#" className="dropdown-link">Jacket, Sweater &amp; Sweatshirts</a>
                  <a href="#" className="dropdown-link">Party Wear</a>
                  <a href="#" className="dropdown-link">Innerwear &amp; Thermals</a>
                  <a href="#" className="dropdown-link">Nightwear &amp; Loungewear</a>
                  <a href="#" className="dropdown-link">Value Packs</a>
                </div>

                {/* 2nd Column: Girls Clothing */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Girls Clothing</span>
                  <a href="#" className="dropdown-link">Dresses</a>
                  <a href="#" className="dropdown-link">Tops</a>
                  <a href="#" className="dropdown-link">Tshirts</a>
                  <a href="#" className="dropdown-link">Clothing Sets</a>
                  <a href="#" className="dropdown-link">Lehenga choli</a>
                  <a href="#" className="dropdown-link">Kurta Sets</a>
                  <a href="#" className="dropdown-link">Party wear</a>
                  <a href="#" className="dropdown-link">Dungarees &amp; Jumpsuits</a>
                  <a href="#" className="dropdown-link">Skirts &amp; shorts</a>
                  <a href="#" className="dropdown-link">Tights &amp; Leggings</a>
                  <a href="#" className="dropdown-link">Jeans, Trousers &amp; Capris</a>
                  <a href="#" className="dropdown-link">Jacket, Sweater &amp; Sweatshirts</a>
                  <a href="#" className="dropdown-link">Innerwear &amp; Thermals</a>
                  <a href="#" className="dropdown-link">Nightwear &amp; Loungewear</a>
                  <a href="#" className="dropdown-link">Value Packs</a>
                </div>

                {/* 3rd Column: Footwear and Toys & Games */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Footwear</span>
                  <a href="#" className="dropdown-link">Casual Shoes</a>
                  <a href="#" className="dropdown-link">Flipflops</a>
                  <a href="#" className="dropdown-link">Sports Shoes</a>
                  <a href="#" className="dropdown-link">Flats</a>
                  <a href="#" className="dropdown-link">Sandals</a>
                  <a href="#" className="dropdown-link">Heels</a>
                  <a href="#" className="dropdown-link">School Shoes</a>
                  <a href="#" className="dropdown-link">Socks</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Toys &amp; Games</span>
                  <a href="#" className="dropdown-link">Learning &amp; Development</a>
                  <a href="#" className="dropdown-link">Activity Toys</a>
                  <a href="#" className="dropdown-link">Soft Toys</a>
                  <a href="#" className="dropdown-link">Action Figure / Play set</a>
                </div>

                {/* 4th Column: Infants and Home & Bath / Personal Care */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Infants</span>
                  <a href="#" className="dropdown-link">Bodysuits</a>
                  <a href="#" className="dropdown-link">Rompers &amp; Sleepsuits</a>
                  <a href="#" className="dropdown-link">Clothing Sets</a>
                  <a href="#" className="dropdown-link">Tshirts &amp; Tops</a>
                  <a href="#" className="dropdown-link">Dresses</a>
                  <a href="#" className="dropdown-link">Bottom wear</a>
                  <a href="#" className="dropdown-link">Winter Wear</a>
                  <a href="#" className="dropdown-link">Innerwear &amp; Sleepwear</a>
                  <a href="#" className="dropdown-link">Infant Care</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Home &amp; Bath</span>
                  <span className="sub-dropdown-heading">Personal Care</span>
                </div>

                {/* 5th Column: Kids Accessories and Brands */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Kids Accessories</span>
                  <a href="#" className="dropdown-link">Bags &amp; Backpacks</a>
                  <a href="#" className="dropdown-link">Watches</a>
                  <a href="#" className="dropdown-link">Jewellery &amp; Hair accessory</a>
                  <a href="#" className="dropdown-link">Sunglasses</a>
                  <a href="#" className="dropdown-link">Masks &amp; Protective Gears</a>
                  <a href="#" className="dropdown-link">Caps &amp; Hats</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Brands</span>
                  <a href="#" className="dropdown-link">H&amp;M</a>
                  <a href="#" className="dropdown-link">Max Kids</a>
                  <a href="#" className="dropdown-link">Pantaloons</a>
                  <a href="#" className="dropdown-link">United Colors Of Benetton Kids</a>
                  <a href="#" className="dropdown-link">YK</a>
                  <a href="#" className="dropdown-link">U.S. Polo Assn. Kids</a>
                  <a href="#" className="dropdown-link">Mothercare</a>
                  <a href="#" className="dropdown-link">HRX</a>
                </div>
              </div>
            </div>
          </div>


          {/*Home and Living Section */}
          <div className="nav-item">
            <a href="#" className="nav-link">HOME & LIVING</a>
            <div className="dropdown-container">
              <div className="dropdown-section">

                {/* 1st Column: Bed Linen & Furnishing */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Bed Linen & Furnishing</span>
                  <a href="#" className="dropdown-link">Bed Runners</a>
                  <a href="#" className="dropdown-link">Mattress Protectors</a>
                  <a href="#" className="dropdown-link">Bedsheets</a>
                  <a href="#" className="dropdown-link">Bedding Sets</a>
                  <a href="#" className="dropdown-link">Blankets, Quilts & Dohars</a>
                  <a href="#" className="dropdown-link">Pillows & Pillow Covers</a>
                  <a href="#" className="dropdown-link">Bed Covers</a>
                  <a href="#" className="dropdown-link">Diwan Sets</a>
                  <a href="#" className="dropdown-link">Chair Pads & Covers</a>
                  <a href="#" className="dropdown-link">Sofa Covers</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Flooring</span>
                  <a href="#" className="dropdown-link">Floor Runners</a>
                  <a href="#" className="dropdown-link">Carpets</a>
                  <a href="#" className="dropdown-link">Floor Mats & Dhurries</a>
                  <a href="#" className="dropdown-link">Door Mats</a>
                </div>

                {/* 2nd Column: Bath */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Bath</span>
                  <a href="#" className="dropdown-link">Bath Towels</a>
                  <a href="#" className="dropdown-link">Hand & Face Towels</a>
                  <a href="#" className="dropdown-link">Beach Towels</a>
                  <a href="#" className="dropdown-link">Towels Set</a>
                  <a href="#" className="dropdown-link">Bath Rugs</a>
                  <a href="#" className="dropdown-link">Bath Robes</a>
                  <a href="#" className="dropdown-link">Bathroom Accessories</a>
                  <a href="#" className="dropdown-link">Shower Curtains</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Lamps & Lighting</span>
                  <a href="#" className="dropdown-link">Floor Lamps</a>
                  <a href="#" className="dropdown-link">Ceiling Lamps</a>
                  <a href="#" className="dropdown-link">Table Lamps</a>
                  <a href="#" className="dropdown-link">Wall Lamps</a>
                  <a href="#" className="dropdown-link">Outdoor Lamps</a>
                  <a href="#" className="dropdown-link">String Lights</a>
                </div>

                {/* 3rd Column: Home Décor */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Home Décor</span>
                  <a href="#" className="dropdown-link">Plants & Planters</a>
                  <a href="#" className="dropdown-link">Aromas & Candles</a>
                  <a href="#" className="dropdown-link">Clocks</a>
                  <a href="#" className="dropdown-link">Mirrors</a>
                  <a href="#" className="dropdown-link">Wall Décor</a>
                  <a href="#" className="dropdown-link">Festive Decor</a>
                  <a href="#" className="dropdown-link">Pooja Essentials</a>
                  <a href="#" className="dropdown-link">Wall Shelves</a>
                  <a href="#" className="dropdown-link">Fountains</a>
                  <a href="#" className="dropdown-link">Showpieces & Vases</a>
                  <a href="#" className="dropdown-link">Ottoman</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Cushions & Cushion Covers</span>
                  <span className="sub-dropdown-heading">Curtains</span>
                </div>

                {/* 4th Column: Furniture */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Furniture</span>
                  <span className="sub-dropdown-heading">Home Gift Sets</span>
                  <span className="sub-dropdown-heading">Kitchen & Table</span>
                  <a href="#" className="dropdown-link">Table Runners</a>
                  <a href="#" className="dropdown-link">Dinnerware & Serveware</a>
                  <a href="#" className="dropdown-link">Cups and Mugs</a>
                  <a href="#" className="dropdown-link">Bakeware & Cookware</a>
                  <a href="#" className="dropdown-link">Kitchen Storage & Tools</a>
                  <a href="#" className="dropdown-link">Bar & Drinkware</a>
                  <a href="#" className="dropdown-link">Table Covers & Furnishings</a>
                </div>

                {/* 5th Column: Storage */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Storage</span>
                  <a href="#" className="dropdown-link">Bins</a>
                  <a href="#" className="dropdown-link">Hangers</a>
                  <a href="#" className="dropdown-link">Organisers</a>
                  <a href="#" className="dropdown-link">Hooks & Holders</a>
                  <a href="#" className="dropdown-link">Laundry Bags</a>
                </div>

              </div>
            </div>
          </div>


          {/*Beauty Section */}
          <div className="nav-item">
            <a href="#" className="nav-link">BEAUTY</a>
            <div className="dropdown-container">
              <div className="dropdown-section">

                {/* 1st Column: Makeup */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Makeup</span>
                  <a href="#" className="dropdown-link">Lipstick</a>
                  <a href="#" className="dropdown-link">Lip Gloss</a>
                  <a href="#" className="dropdown-link">Lip Liner</a>
                  <a href="#" className="dropdown-link">Mascara</a>
                  <a href="#" className="dropdown-link">Eyeliner</a>
                  <a href="#" className="dropdown-link">Kajal</a>
                  <a href="#" className="dropdown-link">Eyeshadow</a>
                  <a href="#" className="dropdown-link">Foundation</a>
                  <a href="#" className="dropdown-link">Primer</a>
                  <a href="#" className="dropdown-link">Concealer</a>
                  <a href="#" className="dropdown-link">Compact</a>
                  <a href="#" className="dropdown-link">Nail Polish</a>
                </div>

                {/* 2nd Column: Skincare, Bath & Body */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Skincare, Bath &amp; Body</span>
                  <a href="#" className="dropdown-link">Face Moisturiser</a>
                  <a href="#" className="dropdown-link">Cleanser</a>
                  <a href="#" className="dropdown-link">Masks &amp; Peel</a>
                  <a href="#" className="dropdown-link">Sunscreen</a>
                  <a href="#" className="dropdown-link">Serum</a>
                  <a href="#" className="dropdown-link">Face Wash</a>
                  <a href="#" className="dropdown-link">Eye Cream</a>
                  <a href="#" className="dropdown-link">Lip Balm</a>
                  <a href="#" className="dropdown-link">Body Lotion</a>
                  <a href="#" className="dropdown-link">Body Wash</a>
                  <a href="#" className="dropdown-link">Body Scrub</a>
                  <a href="#" className="dropdown-link">Hand Cream</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Baby Care</span>
                  <span className="sub-dropdown-heading">Masks</span>
                </div>

                {/* 3rd Column: Haircare & Fragrances */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Haircare</span>
                  <a href="#" className="dropdown-link">Shampoo</a>
                  <a href="#" className="dropdown-link">Conditioner</a>
                  <a href="#" className="dropdown-link">Hair Cream</a>
                  <a href="#" className="dropdown-link">Hair Oil</a>
                  <a href="#" className="dropdown-link">Hair Gel</a>
                  <a href="#" className="dropdown-link">Hair Color</a>
                  <a href="#" className="dropdown-link">Hair Serum</a>
                  <a href="#" className="dropdown-link">Hair Accessory</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Fragrances</span>
                  <a href="#" className="dropdown-link">Perfume</a>
                  <a href="#" className="dropdown-link">Deodorant</a>
                  <a href="#" className="dropdown-link">Body Mist</a>
                </div>

                {/* 4th Column: Appliances & More */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Appliances</span>
                  <a href="#" className="dropdown-link">Hair Straightener</a>
                  <a href="#" className="dropdown-link">Hair Dryer</a>
                  <a href="#" className="dropdown-link">Epilator</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Men's Grooming</span>
                  <a href="#" className="dropdown-link">Trimmers</a>
                  <a href="#" className="dropdown-link">Beard Oil</a>
                  <a href="#" className="dropdown-link">Hair Wax</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Beauty Gift &amp; Makeup Set</span>
                  <a href="#" className="dropdown-link">Beauty Gift</a>
                  <a href="#" className="dropdown-link">Makeup Kit</a>
                  <hr className="custom-hr" />
                  <span className="sub-dropdown-heading">Premium Beauty</span>
                  <span className="sub-dropdown-heading">Wellness &amp; Hygiene</span>
                </div>

                {/* 5th Column: Top Brands */}
                <div className="dropdown-column">
                  <span className="dropdown-heading">Top Brands</span>
                  <a href="#" className="dropdown-link">Lakme</a>
                  <a href="#" className="dropdown-link">Maybelline</a>
                  <a href="#" className="dropdown-link">LOreal</a>
                  <a href="#" className="dropdown-link">Philips</a>
                  <a href="#" className="dropdown-link">Bath &amp; Body Works</a>
                  <a href="#" className="dropdown-link">THE BODY SHOP</a>
                  <a href="#" className="dropdown-link">Biotique</a>
                  <a href="#" className="dropdown-link">Mamaearth</a>
                  <a href="#" className="dropdown-link">MCaffeine</a>
                  <a href="#" className="dropdown-link">Nivea</a>
                  <a href="#" className="dropdown-link">Lotus Herbals</a>
                  <a href="#" className="dropdown-link">LOreal Professionnel</a>
                  <a href="#" className="dropdown-link">KAMA AYURVEDA</a>
                  <a href="#" className="dropdown-link">M.A.C</a>
                  <a href="#" className="dropdown-link">Forest Essentials</a>
                </div>

              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FiSearch className="search-icon" />
      </div>

      <div className="nav-right">
        <div
          className="user-icon-container"
          onMouseEnter={showUserPopup}
          onMouseLeave={hideUserPopup}
        >
          <FiUser className="icon" />
          {isUserPopupVisible && (
            <div
              className="user-popup"
              onMouseEnter={showUserPopup}
              onMouseLeave={hideUserPopup}
            >
              <h2>Welcome</h2>
              <p>To access account and manage orders</p>
              <button className="login-btn">Login / SignUp</button>
              <hr />
              <ul>
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Gift Cards</li>
                <li>Contact Us</li>
                <hr />
                <li>Coupons</li>
                <li>Saved Cards</li>
                <li>Saved VPA</li>
                <li>Saved Addresses</li>
              </ul>
            </div>
          )}
        </div>

        <a href="#">
          <FiHeart className="icon" />
        </a>
        <a href="#">
          <FiShoppingCart className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;