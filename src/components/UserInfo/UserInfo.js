import React from 'react'
import avatar from '../../images/avatar.png'
import './userinfo.css'

const UserInfo = () => {
    return (
        <header className="header-user">
            <div className="container-user">
                <div className="header-user__content">
                    <div className="header-user__img">
                        <img src={avatar} alt="user" />
                    </div>
                    <div className="header-user__name">
                        MyName
                    </div>
                </div>
            </div>
        </header>
    )
}

export default UserInfo