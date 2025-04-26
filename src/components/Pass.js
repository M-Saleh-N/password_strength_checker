import { useState } from "react";
import "./Pass.css";

function Password () {
    const [password, setPassword] = useState("");

    const getStrength = (pass) => {
      let score = 0;
      if (pass.length >= 8) score++;
      if (/[A-Z]/.test(pass)) score++;
      if (/[0-9]/.test(pass)) score++;
      if (/[^A-Za-z0-9]/.test(pass)) score++;
  
      if (score === 4) return "Strong";
      if (score === 3) return "Medium";
      if (score >= 1) return "Weak";
      return "";
    };
  
    return (
      <div className="pass-cont">
        <h2>Password Strength</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        {password && (
          <p className="strength">Strength: {getStrength(password)}</p>
        )}
      </div>
    );
  }
  
  export default Password;
