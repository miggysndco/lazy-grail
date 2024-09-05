import React from 'react'
import './About.css';

function About() {
  return (
    <div class="about-container">
      <div class="hero-about">
        <h1>ABOUT US</h1>
      </div>
      <section class="about--container">
        <div class="about-items">
            <h2 class="about-text">The Current Culture Marketplace</h2>
            <p>Our mission is to inspire and connect sneaker enthusiasts by 
              offering a curated selection of exclusive, high-quality sneakers. 
              We are committed to creating a community where every customer feels 
              valued, whether they’re buying, selling, or trading. 
              Our goal is to provide an exceptional shopping experience driven 
              by our passion for sneakers and dedication to authenticity, style, 
              and customer satisfaction.</p>
        </div>
        <div class="about-items">
        <img src="./images/aboutpic.jpg" alt="logo" width={750} height={580}/>
        </div>
      </section>
      <section class="faqs">
        <h1 class="faqs-title">FAQS</h1>
        <div class="faqs-container">
            <div class="faqs-items">
                <h3>
                    What is the return policy?
                </h3>
                <p>
                    We accept returns within 30 days of purchase for unworn sneakers 
                    in their original packaging. Please ensure the tags are intact and include the receipt.
                </p>
            </div>
            <div class="faqs-items">
                <h3>
                    Do you sell authentic sneakers?
                </h3>
                <p>
                    Yes, all our sneakers are 100% authentic. We source them 
                    directly from authorized distributors and trusted resellers.
                </p>
            </div>
            <div class="faqs-items">
                <h3>
                    Do you offer international shipping?
                </h3>
                <p>
                    Yes, we ship worldwide. Shipping fees and delivery times vary depending on the destination.
                </p>
            </div>
            <div class="faqs-items">
                <h3>
                    Can I trade or sell my sneakers at your store?
                </h3>
                <p>
                    Absolutely! We offer a Buy-Sell-Trade service where you can trade in your sneakers for store credit or cash.
                </p>
            </div>
            <div class="faqs-items">
                <h3>
                    Do you offer size exchanges?
                </h3>
                <p>
                    Yes, we offer size exchanges within 14 days of purchase, provided the sneakers are unworn and in original condition.
                </p>
            </div>
            <div class="faqs-items">
                <h3>
                    Can I reserve sneakers for a later purchase?
                </h3>
                <p>
                    We do offer reservations for select items. Please contact our store directly to inquire about specific sneakers.
                </p>
            </div>
        </div>    
      </section>
    </div>
  )
}

export default About
