import React from 'react'
import './restarauntpage.css'
import RestInfo from '../../components/RestInfo/RestInfo'
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo'

const RestarauntPage = () => {
  return (
    <div className='rest'>
      <div className="rest-photo"></div>
      <div className='container'>
        <div className='rest-info'>
          <RestInfo />
          <AdditionalInfo />
        </div>
      </div>
    </div>
  )
}

export default RestarauntPage