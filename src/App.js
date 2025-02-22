import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import RegisterPage from "./component/auth/Register";
import LoginPage from "./component/auth/Login";
import HomePage from "./component/home/HomePage";
import AllRoomsPage from "./component/booking_rooms/AllRoomsPage";
import RoomDetailsPage from "./component/booking_rooms/RoomDetailsPage";
import { CustomerRoute } from "./service/Guard";
import FindBookingPage from "./component/booking_rooms/FindBookingPage";
import ProfilePage from "./component/profile/ProfilePage";
import EditProfilePage from "./component/profile/EditProfile";
import PaymentPage from "./component/payment/PaymentPage";
import PaymentSuccess from "./component/payment/PaymentSuccess";
import PaymentFailure from "./component/payment/PaymentFailue";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />

            {/* ROOM PAGES */}
            <Route path="/rooms" element={<AllRoomsPage />} />
            <Route
              path="/room-details/:roomId"
              element={<CustomerRoute element={<RoomDetailsPage />} />}
            />

            {/* USER PAGES */}
            <Route
              path="/profile"
              element={<CustomerRoute element={<ProfilePage />} />}
            />
            <Route
              path="/edit-profile"
              element={<CustomerRoute element={<EditProfilePage />} />}
            />

            {/* BOOKING PAGES */}
            <Route path="/find-booking" element={<FindBookingPage />} />

            {/* PAYMENT PAGES */}
            <Route
              path="/payment/:bookingReference/:amount"
              element={<CustomerRoute element={<PaymentPage />} />}
            />
            <Route
              path="/payment-success/:bookingReference"
              element={<CustomerRoute element={<PaymentSuccess />} />}
            />
            <Route
              path="/payment-failed/:bookingReference"
              element={<CustomerRoute element={<PaymentFailure />} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
