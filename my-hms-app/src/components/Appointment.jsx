import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../index.css'

const BASE_URL = 'https://bx1g8dmj-8000.inc1.devtunnels.ms';

const Appointment = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [slots, setSlots] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Highlight dates
  // const dateTomark = ['07-07-2025', '14-07-2025', '16-07-2025', '28-07-2025']

  // const highlightedDates = dateTomark.map((d) => {
  //   const [day, month, year] = d.split("-");
  //   return new Date(`${year}-${month}-${day}`);
  // });


const [highlightDates, setHighlightDates] = useState([]);

useEffect(() => {

  if (!selectedDoctor) return;

  axios.get(`${BASE_URL}/doctor/${selectedDoctor}/slots/`)
    .then(res => {
      let convertDates = res.data.map(dateStr => new Date(dateStr));
      setHighlightDates(convertDates);
      console.log(convertDates);
      
      console.log(res.data);
      
    })
    .catch(err => console.error("Failed to fetch highlight dates:", err));
}, [selectedDoctor]);


  useEffect(() => {
    axios.get(`${BASE_URL}/department/`)
      .then(res => setDepartments(res.data))
      .catch(err => console.error('Department fetch failed:', err));
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      axios.get(`${BASE_URL}/department/${selectedDepartment}/doctors/`)
        .then(res => setDoctors(res.data))
        .catch(err => console.error('Doctor fetch failed:', err));
    } else {
      setDoctors([]);
      setSelectedDoctor('');
    }
  }, [selectedDepartment]);

  useEffect(() => {
    if (selectedDoctor && selectedDate) {
      axios.get(`${BASE_URL}/doctor/${selectedDoctor}/slots/?date=${selectedDate}`)
        .then(res => setSlots(res.data))
        .catch(err => console.error('Slot fetch failed:', err));
    } else {
      setSlots([]);
      setSelectedSlot('');
    }
  }, [selectedDoctor, selectedDate]);

  const handleBooking = () => {
    if (!selectedSlot) {
      alert('Please select a slot');
      return;
    }

    setLoading(true);
    setMessage('');

    const accessToken = localStorage.getItem("accessToken");

    axios.post(`${BASE_URL}/bookappointment/`, {
      slot: selectedSlot
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(() => {
        setMessage('✅ Appointment booked successfully!');
        setSelectedSlot('');
        setSlots(prevSlots => prevSlots.map(slot =>
          slot.id === selectedSlot ? { ...slot, isBooked: true } : slot
        ));
      })
      .catch(err => {
        console.error('Booking failed:', err);
        setMessage('❌ Booking failed. Please login as patient.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 to-sky-700 p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-700">Book an Appointment</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Department</label>
          <select
            className="w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">-- Select Department --</option>
            {departments.map(dep => (
              <option key={dep.id} value={dep.id}>{dep.DepartmentName}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Doctor</label>
          <select
            className="w-full px-3 py-2 border rounded-lg text-black  focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            disabled={!doctors.length}
          >
            <option value="">-- Select Doctor --</option>
            {doctors.map(doc => (
              <option key={doc.id} value={doc.id}>
                Dr. {doc.User_id.first_name} {doc.User_id.last_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Select Date</label>
          <div className="bg-white rounded-xl shadow justify-center items-center px-25 py-10 border w-full">
            <DatePicker
              selected={selectedDate ? new Date(selectedDate) : null}
              onChange={(date) => setSelectedDate(date.toISOString().split("T")[0])}
              minDate={new Date()}
              inline
              highlightDates={[
                {
                  "react-datepicker__day--highlighted-custom": highlightDates
                }
              ]}
              calendarClassName="w-full custom-calendar"
              dayClassName={(date) => {
                return date.getDay() === 0 ? "sunday-red" : undefined;
              }}
            />

          </div>
        </div>


        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Available Slots</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {slots.length ? (
              slots.map(slot => (
                <button
                  key={slot.id}
                  disabled={slot.isBooked}
                  className={`py-1 px-2 rounded-lg text-sm font-medium border ${slot.isBooked
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : selectedSlot === slot.id
                      ? 'bg-sky-600 text-white border-sky-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-sky-500'
                    }`}
                  onClick={() => !slot.isBooked && setSelectedSlot(slot.id)}
                >
                  {slot.time} {slot.isBooked && '(Booked)'}
                </button>
              ))
            ) : (
              selectedDoctor && selectedDate && (
                <p className="col-span-2 md:col-span-3 text-red-500 text-center">No slots available for this date.</p>
              )
            )}
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={loading || !selectedSlot}
          className={`w-full py-2 rounded-lg font-semibold text-white transition ${loading || !selectedSlot
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-sky-600 hover:bg-sky-700'
            }`}
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>

        {message && <p className="mt-4 text-center font-medium text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default Appointment;