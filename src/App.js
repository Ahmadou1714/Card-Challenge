import React, { useState } from 'react';

export default function StudentForm() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    homeroomClassNumber: '',
    studentID: '',
    favoriteLunch: '',
  });

  function handleChange({ target: { name, value } }) {
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  }

  return (
    <div>
      <form>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={student.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Homeroom class number:
          <input
            type="number"
            name="homeroomClassNumber"
            value={student.homeroomClassNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Student ID:
          <input
            type="number"
            name="studentID"
            value={student.studentID}
            onChange={handleChange}
          />
        </label>
        <label>
          Favorite lunch:
          <select name="favoriteLunch" onChange={handleChange}>
            <option value="">-- Choose a lunch --</option>
            <option value="Pizza">Pizza</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Salad">Salad</option>
          </select>
        </label>
      </form>
      <p>
        Student info:
        <br />
        {student.firstName}
        <br />
        {student.lastName}
        <br />
        {student.age}
        <br />
        {student.address}
        <br />
        {student.homeroomClassNumber}
        <br />
        {student.studentID}
        <br />
        {student.favoriteLunch}
      </p>
    </div>
  );
}
