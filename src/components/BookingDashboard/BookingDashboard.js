import React from 'react'
import BookingForm from '../BookingForm/BookingForm'
import BookingManager from '../BookingManager/BookingManager'
import './bookingdashboard.css'


const BookingDashboard = () => {
    return (
        <div>
            <section class="section-user">
                <div class="container-user">
                    <div class="section-user__content">
                        <div class="section-user__left">
                            <BookingManager />
                        </div>


                        <div class="section-user__right">
                            <h2 class="section-user__title">
                                У вас нет предстоящих бронирований
                            </h2>
                            <span class="section-user__subtitle">Найдите свой столик для любого случая</span>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookingDashboard

