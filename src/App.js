
//defult Fatching Navbar and Footer with dynmaic
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footerrs';

//imported bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import DoctorPopUp from './components/DoctorEdit/DoctorPopUp';
//Landing page imported
import Section from './components/Home/section/section';

//all components imported
import ChangePassword from './components/login/changepassword';
import DoctorEdit from './components/DoctorEdit/doctorEdit';
import DoctorProfile from './components/DoctorProfile/doctorProfile';
import ProfileRoutes from './components/Routes/ProfileRoutes';
import ConnectedRoutes from './components/ProfileItem/DashboardAll/ConnectedRoutes/ConnectedRoutes';
import FilterPage from './components/FilterPage/FilterPage';
import VerifyLogin from './components/login/VerifyLogin';
import Verification from './components/login/Verification';
import  Blog from './components/patientBlog/blog';
import  BlogPage from './components/patientBlog/BlogPage';
import Nestednavbar from './components/Nestednavbar2/Nestednavbar';
import SubscriptionPlans from './components/Subscription/SubscriptionPlans';
import { SearchProvider } from './components/context/context';
import Message from './components/Subscription/Message';
import FaqSection from './components/Footerpage/FaqSection';
import About from './components/Footerpage/About';
import TermsAndConditions from './components/Footerpage/TermsAndConditions';
import Editdoctorprofile from './components/Editdoctorprofile/Editdoctorprofile';
import Adminroute from './components/Admin/Admindashboard/Adminroute/Adminroute';
import SignupCard from './components/signup/signup';
import PrivacyPolicy from './components/Footerpage/PrivacyPolicy';
import DoctorEditPatient from './components/PatientProfile/doctorEdit';
import MainDoc from "./components/DoctorProfileH/MainDoc/MainDoc";
import PatientFrofile from "./components/DoctorProfileH/MainDoc/PatientFrofile"
import PopupModal from './components/PopupModal';
import ContactUs from './components/Footerpage/ContactUs/ContactUs';
import Patients from './components/Footerpage/Patients/Patients';
import DoctorPhysician from './components/Footerpage/DoctorPhysician/DoctorPhysician';
import Enterprise from './components/Footerpage/Enterprise/Enterprise';
import Conditions from './components/patientBlog/ConditionLibrariesMenu';
import EditBlog from './components/ProfileItem/DashboardAll/Pages/Blog/Blog/EditBlog';
function App() {
  useEffect(() => {
    document.title = "MedxBay";
}, []);
  return (
    <>
    <SearchProvider>
      <Router>
        <Routes>
        <Route path="/" element={[<Navbar/>,<Section />,<PopupModal/>,<Footer/>]} />          <Route path="/reset-password" element={<ChangePassword />} />
          <Route path="/Doctor/profile/Edit" element={[<Navbar/>,<DoctorEdit />,<Footer/>]} />     
          <Route path="/Doctor/profile/Edit/Patient/:id" element={[<Navbar/>,<DoctorEditPatient />,<Footer/>]} />     

          <Route path="/edit/profile/doctor" element={[<Navbar/>,<Editdoctorprofile />,<Footer/>]}  />
          <Route path="/doctor/:id" element={[<Nestednavbar/>,<DoctorProfile />,<Footer/>]}/>
          <Route path="/profile/*" element={<ProfileRoutes />} />
          <Route path="/doctorprofile/dashboardpage/*" element={<ConnectedRoutes />} />
          <Route path="/Filters" element={<FilterPage />} />
          <Route path="/verify/login" element={<VerifyLogin />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/condition-libraries/:condition" element={[<Nestednavbar/>,<Blog />,<Footer/>]}/>
          <Route path="/condition-libraries-menu" element={[<Nestednavbar/>,<Conditions />,<Footer/>]}/>
          {/* <Route path="/condition-libraries-menu" element={<Conditions />}/> */}
          {/* <Route path="/condition-libraries" element={[<Nestednavbar/>,<Blog />,<Footer/>]}/> */}
          <Route path="/blogPost/:id" element={[<Nestednavbar/>,<BlogPage />,<Footer/>]}/>      
              <Route path="/edit/profile/doctor" element={[<Navbar/>,<DoctorPopUp />,<Footer/>]}  />
          <Route path="/SubscriptionPlans" element={[<Navbar/>,<SubscriptionPlans />,<Footer/>]}  />
          <Route path="/Message" element={[<Navbar/>,<Message />,<Footer/>]}  />
          <Route path="/faq/section" element={[<Navbar/>,<FaqSection />,<Footer/>]} />
          <Route path="/about/section" element={[<Navbar/>,<About />,<Footer/>]} />
          <Route path="/terms" element={[<Navbar/>,<TermsAndConditions />,<Footer/>]} />
          <Route path="/enterprise" element={[<Navbar/>,<Enterprise />,<Footer/>]} />
          <Route path="/signup" element={[<Navbar/>,<SignupCard />,<Footer/>]} />
          <Route path="/privacy" element={[<Navbar/>,<PrivacyPolicy />,<Footer/>]} />
          <Route path="/doc-profile" element={[<Nestednavbar/>,<MainDoc />,<Footer/>]}/>

          <Route path="/book-appointment-profile/:id" element={[<Nestednavbar/>,<PatientFrofile />,<Footer/>]}/>

          <Route path="/admin/dashboardpage/*" element={<Adminroute/>} />
          <Route path="/contact-us" element={[<Nestednavbar/>,<ContactUs />,<Footer/>]}/>
          <Route path="/patients" element={[<Nestednavbar/>,<Patients />,<Footer/>]}/>
          <Route path="/doctor/physician" element={[<Nestednavbar/>,<DoctorPhysician />,<Footer/>]}/>
          <Route path="/blogs/edit/:id" element={[<Nestednavbar/>,<EditBlog />,<Footer/>]}/>

        </Routes>
      </Router>
      </SearchProvider>
    </>
  );
}

export default App;