import React from 'react'
import './restarauntpage.css'
import RestInfo from '../../components/RestInfo/RestInfo'
import AdditionalInfo from '../../components/AdditionalInfo/AdditionalInfo'
import { useParams } from 'react-router-dom'
const RestarauntPage = () => {
  const {name, description, city} = useParams();

  return (
    <div className='rest'>
      <div className="rest-photo"></div>
      <div className='container'>
        <div className='rest-info'>
          <RestInfo name={name} description={description}/>
          <AdditionalInfo city={city}/>
        </div>
      </div>
    </div>
  )
}

export default RestarauntPage