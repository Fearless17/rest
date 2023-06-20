import React from 'react'
import './profilepage.css'
import UserInfo from '../../components/UserInfo/UserInfo'
import BookingDashboard from '../../components/BookingDashboard/BookingDashboard'
import './profilepage.css'

const ProfilePage = () => {
    return (
        <div className='profile-page'>
            <UserInfo />
            <BookingDashboard />
        </div>
    )
}

export default ProfilePage