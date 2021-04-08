import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./../context/userContext";
const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);
  console.log("user", user);
  useEffect(() => {
    if (user) {
      history.push("/admin");
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: email,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        setUser(response.data.user);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          className="email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label htmlFor="password">password</label>
        <input
          className="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
