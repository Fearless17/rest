import React from 'react'
import avatar from '../../images/avatar.png'

const UserInfo = () => {
    return (
        <header class="header-user">
            <div class="container-user">
                <div class="header-user__content">
                    <div className="header-user__img">
                        <img src={avatar} alt="user" />
                    </div>
                    <div class="header-user__name">
                        MyName
                    </div>
                </div>
            </div>
        </header>
    )
}

export default UserInfo