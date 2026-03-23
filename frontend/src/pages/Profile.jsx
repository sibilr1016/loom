import { useState } from "react";
import { useGetMeQuery } from "../services/auth";

function Profile() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const { status, data: user } = useGetMeQuery();
  if (status === "fulfilled") console.log(user);

  const handleSubmit = () => {};

  return (
    <div className="max-w-md mx-auto mt-24 ">
      {status === "fulfilled" && user && (
        <form
          className="flex flex-col min-w-sm mx-auto space-y-2 shadow-2xl p-10"
          onSubmit={handleSubmit}
          action=""
        >
          <h1 className="self-center mb-5 text-lg font-semibold uppercase text-gray-800">
            Profile
          </h1>
          <input
            className="border border-gray-600 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg p-2"
            type="text"
            name="username"
            placeholder="username"
            value={user.username}
            // onChange={(e) => setUsername(e.target.value)}
            disabled
          />
          <input
            className="border border-gray-600 rounded-lg p-2 disabled:text-gray-500 disabled:cursor-not-allowed"
            type="tel"
            placeholder="phoneNumber"
            name="phoneNumber"
            value={user.phoneNumber}
            disabled
            // onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border disabled:text-gray-500 disabled:cursor-not-allowed border-gray-600 rounded-lg p-2"
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
            // onChange={(e) => setEmail(e.target.value)}
            disabled
          />

          <button
            className="cursor-pointer  border p-2 disabled:cursor-not-allowed disabled:bg-gray-500  bg-gray-900 text-gray-50 border-gray-600 rounded-lg"
            type="submit"
            disabled
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
