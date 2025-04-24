import React from 'react'
import '../Form.css'
 function BookingPleat() {
  return (
    <>
         <form action="submit_form.php" method="POST">
    <h2>Booking For Saree Pre-pleating</h2>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" placeholder='Enter the name'required />
    
    <label for="tel">Phone Number:</label>
    <input type="tel" id="tel" name="tel"pattern='^[6-9]\d{9}$' placeholder='Enter the phone number'required />    
   <br/>
    
    <label for="date">Event Date/Preferred Date:</label>
    <input type="date" id="date" name="date" title='Enter the date you expect to receive the saree'required />

    <label for="count">Count of Pre-pleating:</label><br/>
    <input type="number" id="count" name="count"placeholder='Enter the Count of Saree pre-pleating' required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" placeholder='If any query ask me....'required />

    <button type="submit">Submit</button>
</form><br/>
</>
  )
}
export default BookingPleat;