import React from 'react'
import {AiFillStar} from 'react-icons/ai'

import '../CSS/Product.css'

const Product = () => {
  return (
    <section className='container-card' id='Product'>
        <article className='text-card'>
            <h2>Best Menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </article>
        <article className='box-card'>
            <div className='star-menu'>
                <AiFillStar id='star-top'/> 
                <small>recommended menu</small>
            </div>
            <figure className="card">
                <img src="/img/cheeseburgers2.jpg" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            Cheeseburger
                        </h2>
                        <span>10 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                        <AiFillStar id='star'/> 
                    </footer> 
                </figcaption>
            </figure>

            <figure className="card">
                <img src="/img/BBQ Berger.png" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            BBQ Bacon Burger
                        </h2>
                        <span>12 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                        <AiFillStar id='star'/> 
                    </footer> 
                </figcaption>
            </figure>

            <figure className="card">
                <img src="/img/Mushroom Swiss Burger.jfif" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            Mushroom Burger
                        </h2>
                        <span>13 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                        <AiFillStar id='star'/>
                    </footer>
                </figcaption>
            </figure>

            <figure className="card">
                <img src="/img/Veggie Burger.jpg" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            Veggie Burger
                        </h2>
                        <span>13 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                    </footer> 
                </figcaption>
            </figure>

            <figure className="card">
                <img src="/img/Hawaiian Burger.png" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            Hawaiian Burger
                        </h2>
                        <span>15 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                    </footer> 
                </figcaption>
            </figure>

            <figure className="card">
                <img src="/img/Breakfast Burger.jpg" alt="" />
                <figcaption className="text-des">
                    <header>
                        <h2>
                            Breakfast Burger 
                        </h2>
                        <span>9 $</span>
                    </header>
                    <footer>
                        <small>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </small>
                    </footer> 
                </figcaption>
            </figure>
        </article> 
    </section>
  )
}

export default Product