"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("randomUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setTimeout(() => {
        if (!user) {
          alert("Not found Data");
          router.push("/auth");
        }
      }, 2000);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("randomUser"); // Clear user data
    router.push("/"); // Redirect to homepage or login page
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      {/* Exit Button */}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 relative">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-300 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded shadow transition duration-200 font-serif"
        >
          Exit
        </button>

        {/* Header */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-300"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <p className="text-gray-500">Gender: {user.gender}</p>
            <p className="text-gray-500">
              DOB: {new Date(user.dob.date).toLocaleDateString()} (
              {user.dob.age} years old)
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Location */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="font-semibold text-lg text-blue-600 mb-2">
              📍 Location
            </h2>
            <p>
              {user.location.street.number} {user.location.street.name}
            </p>
            <p>
              {user.location.city}, {user.location.state},{" "}
              {user.location.country}
            </p>
            <p>Postcode: {user.location.postcode}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="font-semibold text-lg text-blue-600 mb-2">
              📞 Contact
            </h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Cell: {user.cell}</p>
          </div>

          {/* Login Info */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="font-semibold text-lg text-blue-600 mb-2">
              🔐 Login Info
            </h2>
            <p>Username: {user.login.username}</p>
            <p>Password: {user.login.password}</p>
            <p>UUID: {user.login.uuid}</p>
          </div>

          {/* National ID */}
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h2 className="font-semibold text-lg text-blue-600 mb-2">
              🔢 National ID
            </h2>
            <p>
              {user.id.name}: {user.id.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
