import React, { useState } from 'react';
import aadhar from '../../dummy_API/aadharCard_dummy';

const UserProfile = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleAadharSearch = () => {
    const user = aadhar.find((user) => user.aadharNumber === aadharNumber);

    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md border-gray-300">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {/* Input for Aadhar card number */}
      <div className="mb-4">
        <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">
          Input Aadhar Card Number:
        </label>
        <input
          type="text"
          id="aadharNumber"
          name="aadharNumber"
          value={aadharNumber}
          onChange={(e) => setAadharNumber(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
        />
      </div>

      {/* Button to search */}
      <button
        onClick={handleAadharSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Search
      </button>

      {/* User details */}
      {userDetails && (
        <div className="mt-4 border border-3 border-gray-300 rounded-md w-full text-center">
          <h3 className="text-xl font-semibold mb-2">User Details:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Name:</p>
              <p>{userDetails.userName}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Aadhar Number:</p>
              <p>{userDetails.aadharNumber}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Date of Birth:</p>
              <p>{userDetails.userDOB}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Contact Number:</p>
              <p>{userDetails.userConatctNumber}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2">
              <p className="font-semibold">Gender:</p>
              <p>{userDetails.userGender}</p>
            </div>
            <div className="border border-gray-300 rounded-md p-2 col-span-1">
              <p className="font-semibold">Address:</p>
              <p>{userDetails.userAddress}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
