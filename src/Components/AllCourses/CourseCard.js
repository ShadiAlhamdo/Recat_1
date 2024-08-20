import React from 'react'
import { coursesCard } from '../../dummydata'
import   './Courses.css'
function CourseCard() {
  return (
   <>
   <section className='coursecard'>
    <div className='container grid2'>
        {coursesCard.map((Val)=>{
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
   </>
  )
}

export default CourseCard