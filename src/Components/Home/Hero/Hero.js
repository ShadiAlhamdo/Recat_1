import React from 'react'
import './Hero.css'
import Title from '../../Common/Title/Title';
const Hero=()=> {
  return (
    <>
    <section className='hero'>
        <div className='container'>
            <div className='row'>
                <Title subtitle='WELCOME TO ACADEMIA' title='BEST ONLINE EDUCATION'/>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type
                </p>
                <div className='button'>
                    <button className='primary-btn'>
                        GET STARTED NOW<i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button>
                        VIEW COURSES<i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <div className='margin'></div>
    </>
  )
}

export default Hero;