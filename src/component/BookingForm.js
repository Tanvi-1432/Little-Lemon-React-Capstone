import { useState } from "react"

export default function TableReservation(props) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        specialInstruction: "",
        fullname: "",
        email: "",
        phone: "",
        isTouched: false,
    })

    // console.log(formData)

    const [numOfGuests, setNumOfGuets] = useState(1);


    // todays date;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;

    //

    function clearForm() {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                date: "",
                time: "",
                specialInstruction: "",
                fullname: "",
                email: "",
                phone: "",
                isTouched: false,
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const getIsFormValid = () => {
        return (
            formData.date &&
            formData.time &&
            formData.fullname.trim().length > 3 &&
            formData.phone
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearForm();
        props.submitForm(e);
    }

    return (
        <div className="reservation-form">
            <form onSubmit={handleSubmit}>
                <h2>Reserve Table</h2>
                <label htmlFor="date">Date<sup>*</sup></label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    min={today}
                    value={formData.date}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                    onChange={handleChange}
                />
                {formData.isTouched && formData.date.trim().length < 3 ? <div className="field-error">Select a Date</div> : null}
                <br />
                <label htmlFor="time">Time<sup>*</sup></label>
                <select
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                >
                    <option value="">Select a time</option>
                    {props.availableTimes?.map((availableTime) => { return <option key={availableTime}>{availableTime}</option> })}
                </select>
                {formData.isTouched && formData.time.trim().length < 3 ? <div className="field-error">Select a Date</div> : null}
                <div className="num-of-guests">
                    <label>Number of Guests</label>
                    <div className="num">
                        <span onClick={() => numOfGuests < 10 ? setNumOfGuets(numOfGuests + 1) : null}>+</span>
                        <h5>{numOfGuests}</h5>
                        <span onClick={() => numOfGuests > 1 ? setNumOfGuets(numOfGuests - 1) : null}>-</span>
                    </div>
                </div>
                <textarea
                    cols={30}
                    rows={10}
                    placeholder="Special Instruction..."
                    onChange={handleChange}
                    value={formData.specialInstruction}
                    name="specialInstruction"
                >
                </textarea>
                <h2>Contact Info</h2>
                <label htmlFor="fullname">Full Name<sup>*</sup></label>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                />
                {formData.isTouched && formData.fullname.trim().length < 3 ? <div className="field-error">should have atleast 3 characters</div> : null}
                <br />
                <label htmlFor="email">email<sup>*</sup></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                />
                {formData.isTouched && formData.email.trim().length < 8 ? <div className="field-error">enter a valid email</div> : null}
                <br />
                <label htmlFor="phone">Phone Number<sup>*</sup></label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10,11}"
                    onBlur={() => setFormData({ ...formData, isTouched: true })}
                />
                {formData.isTouched && formData.phone.trim().length < 10 ? <div className="field-error">enter a valid number</div> : null}
                <button aria-label='On Click' type="submit" className="submitBtn" disabled={!getIsFormValid()}>Confirm Booking</button>
            </form>
        </div>
    )
}