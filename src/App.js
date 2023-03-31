import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Routes
} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "./style.css";
import "./Mobile.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PmpProfile from "./component/PmpProfile";
import BthGrade from "./component/BthGrade";
import HowToApply from "./component/HowToApply";
import StudentJourney from "./component/StudentJourney";
import AboutUs from "./component/AboutUs";
import BthGradeNine from "./component/BthGradeNine";
import BthGradeTen from "./component/BthGradeTen";
import BthGradeEleven from "./component/BthGradeEleven";
import ProfilePresentation from "./component/ProfilePresentation";
import OurStudentSuccess from "./component/OurStudentSuccess";
import AdmissionsResultsScholarships from "./component/Admissions-Results-Scholarships";
import AdmissionsCalendar from "./component/AdmissionsCalendar";
import OurTeam from "./component/OurTeam";
import WhatWeDo from "./component/WhatWeDo";
import Admissions from "./component/Admissions";
import AdmissionsUs from "./component/AdmissionsUs";
import AdmissionsCanada from "./component/AdmissionsCanada";
import AdmissionsTopColleges from "./component/AdmissionsTopColleges";
import WhyUs from "./component/WhyUs";
import OurAlumini from "./component/OurAlumini";
import OurStory from "./component/OurStory";
import AboutAthena from "./component/AboutAthena";
import Minerva from "./component/Minerva";
import PressCoverage from "./component/PressCoverage";
import BlogMain from "./component/BlogMain.js";
import BlogDetail from "./component/BlogDetail";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Resources from "./component/Resources";
import Career from "./component/Career";
import ReactGA from "react-ga4";



export default class App extends Component {
  render() {
    const TRACKING_ID = 'G-EY1S647KBZ';
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: "/" });  

    return (

      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about-the-program" element={<AboutUs />} />
          <Route path="/about-athena" element={<AboutAthena />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-student-success" element={<OurStudentSuccess />} />
          <Route path="/our-alumini" element={<OurAlumini />} />
          <Route path="/student-journey" element={<StudentJourney />} />
          <Route path="/profile-development" element={<ProfilePresentation />} />
          <Route path="/profile-presentation" element={<PmpProfile />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/program-for-grade-9" element={<BthGradeNine />} />
          <Route path="/program-for-grade-10" element={<BthGradeTen />} />
          <Route path="/program-for-grade-11" element={<BthGradeEleven />} />
          <Route path="/program-for-grade-12" element={<BthGrade />} />
          <Route path="/admission-process-to-us" element={<AdmissionsUs />} />
          <Route path="/admission-process-to-uk" element={<Admissions />} />
          <Route path="/admission-process-to-canada" element={<AdmissionsCanada />} />
          <Route path="/top-colleges-for-popular-majors" element={<AdmissionsTopColleges />} />
          <Route path="/results-scholarships" element={<AdmissionsResultsScholarships />} />
          <Route path="/admission-calendar" element={<AdmissionsCalendar />} />
          <Route path="/knowledge-center" element={<Minerva />} />
          <Route path="/in-the-news" element={<PressCoverage />} />
          <Route path="/blog" element={<BlogMain />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events-webinars" element={<Resources />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </div >
    );
  }
}


