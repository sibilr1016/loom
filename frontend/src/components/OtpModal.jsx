import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSendOtpMutation } from "../services/phone";
import { useSelector } from "react-redux";

function OtpModal() {
  const [otp, setOtp] = useState(0);
  const [sendOtp] = useSendOtpMutation();
  const phoneNumber = useSelector((state) => state.auth.phone);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await sendOtp({
        phoneOtp: otp,
        phoneNumber: phoneNumber,
      });
      console.log(data);
      if (!data.userExists) navigate("/complete-profile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Link to="/">back</Link>
      <form className="flex flex-col">
        <input
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="border"
          type="number"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default OtpModal;
