import React from "react";
import TableReservation from "./BookingForm";

const Booking = (props) => {

    return (

        <TableReservation availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
    )
}

export default Booking;