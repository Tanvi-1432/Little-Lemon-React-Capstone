import ConfirmedBooking from "./ConfirmedBooking"
import Booking from "./Booking"
import About from "./About"
import Menu from "./Menu"
import OrderOnline from "./OrderOnline"
import Login from "./Login"
import { useReducer } from "react"
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import Home from "./Home"

export default function Main() {

    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function (date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function (formData) {
        return true;
    };

    const navigate = useNavigate();
    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("Little-Lemon-React-Capstone/confirmedbooking");
        }
    }

    const initialState = { availableTimes: fetchAPI(new Date()) }
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return { availableTimes: fetchAPI(new Date(date)) }
    }

    return (
        <main>
            <Routes>
                <Route path="Little-Lemon-React-Capstone/" element={<Home />}></Route>
                <Route path="Little-Lemon-React-Capstone/about" element={<About />}></Route>
                <Route path="Little-Lemon-React-Capstone/menu" element={<Menu />}></Route>
                <Route path="Little-Lemon-React-Capstone/reservation" element={<Booking availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
                <Route path="Little-Lemon-React-Capstone/order-online" element={<OrderOnline />}></Route>
                <Route path="Little-Lemon-React-Capstone/login" element={<Login />}></Route>
                <Route path="Little-Lemon-React-Capstone/confirmedbooking" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}