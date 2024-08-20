import React from 'react'
import Back from '../back/Back'
import CourseCard from './CourseCard';
import OnlineCourses from './OnlineCourses';

const CourseHome=() =>{
  return (
   <>
   <Back title="Exploer Courses"/>
   <CourseCard/>
   <OnlineCourses/>
   </>
  )
}

export default CourseHome;