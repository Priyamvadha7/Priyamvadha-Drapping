import React from 'react'
import '../Css/Form.css'
 function BookingSaree() {
  return (
    <>
         <form action="submit_form.php" method="POST">
    <h2>Booking For Saree Draping</h2>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" placeholder='Enter the name'required />
    
    <label for="tel">Phone Number:</label>
    <input type="tel" id="tel" name="tel"pattern='^[6-9]\d{9}$' placeholder='Enter the phone number'required />    
   <br/>
    <label for="place">Place:</label><br/>
    <input type="text" id="place" name="place"placeholder='Enter the Event place' required />
    
    <label for="date">Event Date:</label>
    <input type="date" id="date" name="date" placeholder='Enter the Event date'required />

    <label for="count">Count of Draping:</label><br/>
    <input type="number" id="count" name="count"placeholder='Enter the count of Draping' required />

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4" placeholder='If any query ask me....'required />

    <button type="submit">Submit</button>
</form><br/>
</>
  )
}
export default BookingSaree;