import React from 'react'
import './Footer.css'
import { blog } from '../dummydata'
const Footer=()=> {
  return (
    <>
    <section className='newletter'>
        <div className='container flexSB'>
            <div className='left row'>
                <h1>Newsletter -Stay tyne and get the latest udpate </h1>
                <span>far far away, behind the word mountains</span>
            </div>
            <div className='tight row'>
                <input type='text' placeholder='Enter email address'/>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>
    <footer>
    <div className='container padding'>
        <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>online education & learning</span>
            <p>Aut ipsam pariatur vel inventore velit eum pariatur animi est illo aspernatur vel illo deleniti.
            </p>
                <i class="fab fa-facebook icon"></i>
                <i class="fab fa-instagram icon"></i>
                <i class="fab fa-twitter icon"></i> 
        </div>
        <div className='box link'>
            <h3>Explore</h3>
            <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='bxo'>
            <h3>Recent Post</h3>
            {blog.slice(0,3).map((val)=>{
                return(
                    <div className='items flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt=''/>
                        </div>
                        <div className='text'>
                            <span>
                                <i className='fa fa-user'></i>
                                <label>{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calendar-alt'></i>
                                <label>{val.date}</label>
                            </span>
                            <h4>{val.title}</h4>
                        </div>
                    </div>
                    
                )
            })}
        </div>
        <div className='box last'>
            <h3>Have & Questions?</h3>
            <ul>
                <li>
                    <i className='fa fa-map'></i>
                    syria-Aleppo
                </li>
                <li>
                    <i className='fa fa-phone-alt'></i>
                    +963-933519382
                </li>
                <li>
                    <i className='fa fa-paper-plane'></i>
                    shadi9987@gmail.com
                </li>
            </ul>
        </div>
    </div>
    </footer>
    <div className='legal'>
        <p>This template Made By <span><i className='fa fa-heart'></i>Shadi Alhamdo</span></p>
    </div>
    </>
  )
}

export default Footer