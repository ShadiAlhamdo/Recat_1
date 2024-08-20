import React from 'react'
import Back from '../back/Back'
import  './Contact.css'
const Contact=()=> {
  return (
    <>
    <Back title='Contact us'/>
    <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103019.38695364214!2d37.23098667991994!3d36.206544927015464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1723882752173!5m2!1sar!2s" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='right row'>
                <h1>Contct Us</h1>
                <p>Ullam sit neque atque vitage molestance Plecaeat</p>
                <div className='items grid2'>
                    <div className='box'>
                        <h4>ADDRESS:</h4>
                        <p>Syria,Aleppo</p>
                    </div>
                    <div className='box'>
                        <h4>Email:</h4>
                        <p>shadi9987@gmail.com</p>
                    </div>
                    <div className='box'>
                        <h4>Phone:</h4>
                        <p>+963-933519382</p>
                    </div>
                </div>
                <form>
                    <div className='flexSB'>
                        <input type='text' placeholder='Name'></input>
                        <input type='email' placeholder='Email'></input>
                    </div>
                    <input type='text' placeholder='Subject'></input>
                    <textarea cols='30' rows='10'>
                        Create Message here...
                    </textarea>
                    <button className='primary-btn'>Send Message</button>

                </form>
                <h3>Follow Us Here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact