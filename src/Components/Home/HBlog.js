import React from 'react'
import BlogCard from '../Blog/BlogCard'
import Title from '../Common/Title/Title'
import { blog } from '../../dummydata'

const HBlog=()=> {
  return (
   <>
   <section className='blog padding'>
   <Title subtitle="our blog" title='recent from blog'/>
        <div className='container grid2'>
      
            {blog.slice(3).map((val)=>{
        return(
            <div className='items shadow'>
                <div className='img'>
                    <img src={val.cover} alt=''/>
                </div>
                <div className='text'>
                    <div className='admin flexSB'>
                        <span>
                            < i className='fa fa-user'></i>
                            <label>{val.type}</label>
                        </span>
                        <span>
                            < i className='fa fa-calendar-alt'></i>
                            <label>{val.date}</label>
                        </span>
                        <span>
                            < i className='fa fa-comments'></i>
                            <label>{val.com}</label>
                        </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                </div>
            </div>
        )
    })}
        </div>
   </section>
   </>
  )
}

export default HBlog