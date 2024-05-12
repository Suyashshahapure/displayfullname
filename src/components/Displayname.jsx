import React, { useState } from 'react';

function Displayname() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const displayFullName = () => {
    setFullName(firstName + ' ' + lastName);
  };

 
  const isFormValid = firstName.trim() !== '' && lastName.trim() !== '';

  return (
    <div>
      <h1>Full Name Display</h1>
      <div>
        <p>
          First Name: <input type="text" value={firstName} onChange={handleFirstName} />
        </p>
      </div>
      <div>
        <p>
          Last Name: <input type="text" value={lastName} onChange={handleLastName} />
        </p>
      </div>
      <button onClick={displayFullName} disabled={!isFormValid}>Submit</button>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default Displayname;
