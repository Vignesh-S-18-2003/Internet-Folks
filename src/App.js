import React from 'react';
import truckImage from './truck.png'; // Import truck image
import image1 from './image1.png'; // Import image1
import image2 from './image2.png'; // Import image2
import image3 from './image3.png'; // Import image3
import image4 from './image4.png'; 
import truc from './truck-removebg-preview.png'
const App = () => {
    return (
        <>
            <section className="main">
                <div className="left">
                    <div className="truck">
                        <img src={truckImage} alt="" />
                    </div>
                    <div className="text">
                        <h1>Discover the <br /> <span>Best</span> Food <br /> and Drinks</h1>
                        <p>Naturally made Healthcare Products for <br /> better care and support of your body</p>
                        <h2>Explore Now!</h2>
                    </div>
                </div>
                <div className="right">
                    <h2>Get In Touch</h2>
                </div>
            </section>
            <section className="base1">
                <div className="base-left">
                    <div className="base-img">
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="base-right">
                    <div className="base-text">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloremque explicabo, molestiae sapiente ut iure fugit sint animi architecto esse laboriosam natus voluptate fuga modi suscipit rerum consequatur non. Minus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis consequatur ut placeat cum fugit ipsam, culpa quidem consectetur id aliquam sequi reiciendis minima suscipit corporis rem! Distinctio, quod corrupti.</p>
                        <h2>Read More</h2>
                    </div>
                </div>
            </section>
            <div className="art">
                <h1>Latest Articles</h1>
            </div>
            <section className="article">
                <div className="images">
                    <div className="image"><img src={image2} alt="" /></div>
                    <h2>Grilled  Tomatoes at Home</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias natus quasi excepturi ducimus et? Similique voluptas ipsa nam minima odit adipisci beatae cumque, ipsum, dolor alias laudantium architecto quisquam.</p>
                    <h3>Read More</h3>
                </div>
                <div className="images">
                    <div className="image"><img src={image3} alt="" /></div>
                    <h2>Snacks for Travel Time</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias natus quasi excepturi ducimus et? Similique voluptas ipsa nam minima odit adipisci beatae cumque, ipsum, dolor alias laudantium architecto quisquam.</p>
                    <h3>Read More</h3>
                </div>
                <div className="images">
                    <div className="image"><img src={image4} alt="" /></div>
                    <h2>Post-workout Recipes</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias natus quasi excepturi ducimus et? Similique voluptas ipsa nam minima odit adipisci beatae cumque, ipsum, dolor alias laudantium architecto quisquam.</p>
                    <h3>Read More</h3>
                </div>
            </section>
            <section className="foot">
                <div className="truck-foot">
                    <img src={truc} alt="" />
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                    <p>example2020@gmail.com</p>
                    <p>(904) 443-0343</p>
                </div>
                <div className="more">
                    <h3>More</h3>
                    <p>About Us</p>
                    <p>Products</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>
                <div className="social">
                    <h3>Social Links</h3>
                    <p><i className="fa-brands fa-facebook"></i>     <i className="fab fa-skype"></i>     <i className="fa-brands fa-instagram"></i></p>
                    <p> &copy; Food Truck Example</p>
                </div>
            </section>
        </>
    );
}

export default App;
