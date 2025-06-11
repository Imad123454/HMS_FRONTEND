import React from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-800 text-white">
        <div className="max-width-screen-xl mx-auto px-10 py-20 grid grid-cols-4 gap-4">
          {/* Find Us */}
          <div>
            <h1 className="text-2xl font-semibold">FIND US</h1>
            <div className="h-1 w-12 bg-sky-900 mt-5 mb-4"></div>
            <p className="mb-4  text-stone-300">
              We are always ready to serve you. You can communicate with us in
              following ways:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <FaLocationDot className="mt-1" />
                <span className="text-stone-300 font-semibold">
                  Bansal Hospital, C - Sector, Shahpura Bhopal, M.P. 462016,
                  India
                </span>
              </div>
              <ul className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaPhoneFlip />
                  <li className="hover:text-sky-900 hover:cursor-pointer flex items-center font-semibold text-stone-300">
                    +91-0755-4086000
                  </li>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneFlip />
                  <li className="hover:text-sky-900 hover:cursor-pointer flex items-center font-semibold text-stone-300">
                    +91-0755-4086099
                  </li>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineMail />
                  <li className="hover:text-sky-900 hover:cursor-pointer flex items-center font-semibold  text-stone-300">
                    contact@bansalhospital.net
                  </li>
                </div>
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h1 className="text-2xl font-semibold pt-10">CONTACT US</h1>
              <div className="h-1 w-12 bg-sky-900 mt-5 mb-4"></div>
              <ul className="space-y-4">
                {[
                  { name: "Book Health Checkup", path: "/healthCheckup" },
                  { name: "Request a Callback", path: "/requestCallback" },
                  { name: "Feedback Suggestions", path: "/feedbackSuggestion" },
                  {
                    name: "Corporate / Insurance Tieup",
                    path: "/corporateTieup",
                  },
                  { name: "Newsletter Signup", path: "/newsletterSignup" },
                ].map((contact) => (
                  <li key={contact.name}>
                    <Link
                      to={contact.path}
                      className="hover:text-sky-900 hover:cursor-pointer font-semibold text-stone-300"
                    >
                      {contact.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="text-2xl font-semibold">Quick Links</h1>
            <div className="h-1 w-12 bg-sky-900 mt-5 mb-4"></div>
            <ul className="space-y-1">
              {[
                { name: "Doctors", path: "/doctors" },
                { name: "Medical Departments", path: "/medicalDepartments" },
                { name: "Health Checkups", path: "/checkups" },
                { name: "Video Gallery", path: "/gallery" },
                { name: "News and Events", path: "/news" },
                { name: "Covid-19 FAQ", path: "/covid-faq" },
                { name: "Virtual Tour", path: "/virtual-tour" },
                { name: "Emergency Services", path: "/emergency" },
                { name: "Diagnostic", path: "/diagnostic" },
                { name: "Supportive Services", path: "/support" },
                { name: "Academics", path: "/academics" },
                { name: "Bansal Hospital Facilities", path: "/facilities" },
                { name: "Pathology", path: "/pathology" },
                { name: "Blood Bank", path: "/blood-bank" },
                { name: "Radiology", path: "/radiology" },
                { name: "Blogs", path: "/blogs" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-sky-900 hover:cursor-pointer font-semibold text-stone-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Centres of Excellence */}
          <div>
            <h1 className="text-2xl font-semibold">Centres of Excellence</h1>
            <div className="h-1 w-12 bg-sky-900 mt-5 mb-4"></div>
            <ul className="space-y-2">
              {[
                {
                  name: "Liver Transplant & HPB Surgery",
                  path: "/liverTransplant",
                },
                { name: "Cardiology", path: "/cardiology" },
                { name: "Neurology", path: "/neurology" },
                { name: "Neurosurgery", path: "/neurosurgery" },
                { name: "Orthopaedics", path: "/orthopaedics" },
                { name: "Nephrology", path: "/nephrology" },
                { name: "Radiation Oncology", path: "/radiationOncology" },
                { name: "Gastroenterology", path: "/gastroenterology" },
                { name: "Gastro Surgery", path: "/gastroSurgery" },
                { name: "Onco Surgery", path: "/oncoSurgery" },
                { name: "Medical Oncology", path: "/medicalOncology" },
                { name: "Fetal Medicine", path: "/fetalMedicine" },
                {
                  name: "Reproductive Medicine",
                  path: "/reproductiveMedicine",
                },
                {
                  name: "Obstetrics and Gynaecology",
                  path: "/obstetricsGynaecology",
                },
                {
                  name: "Hematology, Hemato , Oncology And Bone Marrow Transplantation",
                  path: "/hematology",
                },
                {
                  name: "Pediatrics & Neonatology",
                  path: "/pediatricsNeonatology",
                },
                { name: "ENT", path: "/ent" },
                { name: "Psychiatrist", path: "/psychiatrist" },
                { name: "Urology and Urosurgery", path: "/urology" },
              ].map((centre) => (
                <li key={centre.name}>
                  <Link
                    to={centre.path}
                    className="hover:text-sky-900 hover:cursor-pointer font-semibold text-stone-300"
                  >
                    {centre.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BH Cares */}
          <div>
            <h1 className="text-2xl font-semibold">BH Cares</h1>
            <div className="h-1 w-12 bg-sky-900 mt-5 mb-4"></div>
            <ul className="space-y-4">
              {[
                {
                  name: "Cardio-Thoracic And Vascular Surgery",
                  path: "/cardio-vascular",
                },
                { name: "Critical Care", path: "/critical-care" },
                { name: "Dental", path: "/dental" },
                { name: "Dietetics", path: "/dietetics" },
                { name: "Emergency and Trauma", path: "/emergency-trauma" },
                {
                  name: "Cosmetic & Plastic Surgery",
                  path: "/cosmetic-surgery",
                },
                { name: "Dermatology & Cosmetology", path: "/dermatology" },
                { name: "Endocrinology", path: "/endocrinology" },
                {
                  name: "General & Laparoscopic Surgery",
                  path: "/general-surgery",
                },
                {
                  name: "Internal Medicine & Rheumatology",
                  path: "/internal-medicine",
                },
                {
                  name: "Intervention Pain Management",
                  path: "/pain-management",
                },
                { name: "Nuclear Medicine", path: "/nuclear-medicine" },
                { name: "Ophthalmology", path: "/ophthalmology" },
                {
                  name: "Physical Medicine and Rehabilitation",
                  path: "/rehabilitation",
                },
                { name: "Pulmonary Medicine", path: "/pulmonary" },
                { name: "PROM Patient Reported", path: "/prom" },
              ].map((bhCares) => (
                <li key={bhCares.name}>
                  <Link
                    to={bhCares.path}
                    className="hover:text-sky-900 hover:cursor-pointer font-semibold text-stone-300"
                  >
                    {bhCares.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="bg-neutral-700 mb-12 ">
          <div className="flex  py-8 items-center space-x-4 mb-3 font-semibold">
            <span className="text-2xl ml-20 ">Follow Us</span>
             <FaFacebookF />
             <FaTwitter />
             <FaLinkedinIn />
             <FaYoutube />
             <FaInstagram />
          </div>
        </div>
        <div className="flex justify-center items-center pt-1 pb-8">
          <p className="text-gray-400 text-sm text-center">
            © Copyright bansalhospital.com 2023. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;