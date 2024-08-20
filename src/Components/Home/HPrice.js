import React from 'react'
import Title from '../Common/Title/Title'
import PriceCard from '../Pricing/PriceCard'

const HPrice=()=> {
  return (
    <>
    <section className='hprice padding'>
        <Title subtitle='our pricing' title='pricing & packages'/>
        <div className=' price container grid'>
        <PriceCard/>
        </div>
    </section>
    </>
  )
}

export default HPrice