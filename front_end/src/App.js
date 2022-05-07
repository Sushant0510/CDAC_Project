import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import HomeScreen from "./Screens/HomeScreen";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ViewUsersScreen from "./Screens/ViewUsersScreen";
import ViewPropertyScreen from "./Screens/ViewPropertyScreen";
import AddPropertyScreen from "./Screens/AddPropertyScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import OwnerProfileScreen from "./Screens/OwnerProfileScreen";
import AdminProfileScreen from "./Screens/AdminProfileScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import SeekerProfileScreen from "./Screens/SeekerProfileScreen";
import PropertyDetailsScreen from "./Screens/PropertyDetailsScreen";
import GetContact from "./Screens/GetContact";
import ForgotPassScreen from "./Screens/ForgotPassScreen";
import AddFacilities from "./Screens/AddFacilities";
import DeleteProperty from "./Screens/DeleteProperty";

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Routes>
          <Route path="/viewusers" element={<ViewUsersScreen/>} />
          <Route path="/viewproperty" element={<ViewPropertyScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/registration" element={<RegistrationScreen/>} />
          <Route path="/addproperty" element={<AddPropertyScreen/>} />
          <Route path="/payment" element={<PaymentScreen/>} />
          <Route path="/adminprofile" element={<AdminProfileScreen/>} />
          <Route path="/ownerprofile" element={<OwnerProfileScreen/>} />
          <Route path="/seekerprofile" element={<SeekerProfileScreen/>} />
          <Route path="/editprofile" element={<EditProfileScreen/>} />
          <Route path="/propertydetails" element={<PropertyDetailsScreen/>} />
          <Route path="/getcontact" element={<GetContact/>} />
          <Route path="/forgotpass" element={<ForgotPassScreen/>} />
          <Route path="/addfacilities" element={<AddFacilities/>} />
         <Route path="/delete/:propid" element={<DeleteProperty/>} /> 

          <Route path="/" element={<HomeScreen/>} />
        </Routes>
        <Footer>
          <Footer />
        </Footer>
      </Router>
    </div>
  );
}

export default App;
