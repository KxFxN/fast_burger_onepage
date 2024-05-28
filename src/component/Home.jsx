import React from 'react'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import '../CSS/Home.css'

const Home = () => {
  return (
    <section className='container-home' id='Home'>
        <div className='background'>
            <img src="/img/berger4.jpg" alt="" />
        </div>
        <article className="text">
          <h1>Fast Burger</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis hic, illum sed blanditiis nihil similique repudiandae, provident quibusdam, saepe distinctio velit dolor ullam corrupti voluptates optio officiis magni nisi!
          </p>
          <div className="social">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleFill/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle/>
            </a>
          </div>
        </article>
    </section>
  )
}

export default Home