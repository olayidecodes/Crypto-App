import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Home = () => {
  // const { data, isFetching } = useGetCryptosQuery()
  // console.log(data)

  return (
    <div className=' ml-5 mt-5'>
      <div className=''>
        <h1 className=' text-3xl text-white mb-7'>Global Crypto Stats</h1>
        <div className=' flex flex-wrap gap-12'>
          <div className=' w-72'>
            <h6 className=' mb-3'>Total Cryptocurrencies</h6>
            <h1 className=' text-xl text-gray-200'>5</h1>
          </div>

          <div className=' w-72'>
            <h6 className=' mb-3'>Total Exchanges</h6>
            <h1 className=' text-xl text-gray-200'>5</h1>
          </div>

          <div className=' w-72'>
            <h6 className=' mb-3'>Total Market Cap</h6>
            <h1 className=' text-xl text-gray-200'>5</h1>
          </div>

          <div className=' w-72'>
            <h6 className=' mb-3'>Total 24h Volume</h6>
            <h1 className=' text-xl text-gray-200'>5</h1>
          </div>

          <div className=' w-72'>
            <h6 className=' mb-3'>Total Markets</h6>
            <h1 className=' text-xl text-gray-200'>5</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
