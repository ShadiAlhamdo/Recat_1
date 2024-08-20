 import React from 'react'
import Title from '../Common/Title/Title'
import { testimonal } from '../../dummydata'
import './Test.css'
 const Test=()=> {
   return (
     <>
     <section className='testimonial padding'>
        <div className='container'>
            <Title subtitle='testimonial' title='our sccessful student'/>

            <div className='contnet grid2'>
                {testimonal.map((val)=>{
                    return(
                        <div className='items shadow'>
                            < div className='box flex'>
                                <div className='img'>
                                    <img src={val.cover} alt=''/>
                                    <i className='fa fa-quote-left icon'></i>
                                </div>
                                <div className='name'>
                                    <h2>{val.name}</h2>
                                    <p>{val.post}</p>
                                </div>
                            </div>
                            <p>{val.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
     </section>
     </>
   )
 }
 
 export default Test