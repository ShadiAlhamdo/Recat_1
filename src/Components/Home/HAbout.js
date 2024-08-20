import React from 'react'
import Title from '../Common/Title/Title'
import { coursesCard } from '../../dummydata'
import OnlineCourses from '../AllCourses/OnlineCourses'

const HAbout=()=> {
  return (
    <section className='homeAbout'>
      <div className='container'>
        <Title subtitle='our courses' title='explore our popular online courses'/>
      <section className='coursecard'>
    <div className=' grid2'>
        {coursesCard.slice(0,3).map((Val)=>{
            return(
               <div className='items'>
                 <div className='content flex'>
                    <div className='left'>
                        <div className='img'>
                            <img src={Val.cover} alt=''/>
                            
                        </div>
                    </div>
                    <div className='text'>
                        <h1>{Val.coursesName}</h1>
                        <div className='rate'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <label htmlFor=''>(5.0)</label>
                        </div>
                        <div className='details'>
                            {Val.courTeacher.map((details)=>{
                                return(
                                <>
                                    <div className='box'>
                                        <div className='dimg'>
                                            <img src={details.dcover} alt=''/>
                                        </div>
                                        <div className='para'>
                                            <h4>{details.name}</h4>
                                        </div>
                                    </div>
                                    <span>{details.totalTime}</span>
                                </>
                                )
                            })}
                        </div>
                    </div>
                 </div>
                 <div className='price'>
                    <h3>{Val.priceAll}/ {Val.pricePer}</h3>
                 </div>
                 <button className='outline-btn'>ENROLL NOW !</button>
               </div>
            )
        })}
    </div>
   </section>
      </div>
      <OnlineCourses/>
    </section>
  )
}

export default HAbout