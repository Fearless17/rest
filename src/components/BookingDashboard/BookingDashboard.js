import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import BookingManager from '../BookingManager/BookingManager'
import './bookingdashboard.css'


const BookingDashboard = () => {
    return (
        <div>
            <section className="section-user">
                <div className="container-user">
                    <div className="section-user__content">
                        <div className="section-user__left">
                            <BookingManager />
                        </div>


                        <div className="section-user__right">
                            <h2 className="section-user__title">
                                У вас нет предстоящих бронирований
                            </h2>
                            <span className="section-user__subtitle">Найдите свой столик для любого случая</span>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookingDashboard

