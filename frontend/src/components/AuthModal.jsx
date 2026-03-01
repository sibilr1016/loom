import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSendPhoneMutation } from "../services/phone";
import { addPhone } from "../features/authSlice";

function AuthModal() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendPhone] = useSendPhoneMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      dispatch(addPhone(phoneNumber));
      await sendPhone({ phone: phoneNumber }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/otp">Demo</Link>
      <form onSubmit={handleSubmit} className="border p-5 max-w-2xl ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-4 text-center text-gray-800 font-bold text-2xl">
            LOGIN OR SIGNUP
          </h1>

          <input
            className="border mb-2 text-base text-gray-800 font-xs bg-none border-gray-400 rounded-xs px-2 py-2"
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            placeholder=""
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            type="submit"
            className="uppercase cursor-pointer text-gray-100 w-full py-2 bg-gray-900"
          >
            send otp
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthModal;
