import { useState } from "react";
import { useSelector } from "react-redux";
import { useCompleteProfileMutation } from "../services/phone";

function CompleteProfileModal() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [CompleteProfile] = useCompleteProfileMutation();

  const phoneNumber = useSelector((state) => state.auth?.phone);
  console.log(phoneNumber);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await CompleteProfile({
      username: username,
      phoneNumber: phoneNumber,
      email: email,
    });
  };

  return (
    <div>
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit}
        action=""
      >
        <input
          className="border p-2"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 disabled:text-gray-500 disabled:cursor-not-allowed"
          type="tel"
          placeholder="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          disabled
          //   onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="cursor-pointer" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CompleteProfileModal;
