import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/user/registration-data');
        console.log("this is the data",response.data);
        setUsers(response.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-gray-600">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-red-600">Error: {error}</div>
    </div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      
      {/* Table container with horizontal scroll */}
      <div className="w-full overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="sticky left-0 bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
               Calling Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Device Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Browser
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                OS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                platform
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Country Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Zipcode
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              latitude
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                longitude
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                ISP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                ISP Organization
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Time Zone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="sticky left-0 bg-white px-6 py-4 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.geoLocation?.calling_code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.deviceData.deviceType}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.deviceData.browser}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.deviceData.os}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.deviceData.platform}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.countryCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.state}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.city}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.zipcode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.latitude}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.longitude}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.isp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.ispOrganization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.geoLocation.time_zone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;