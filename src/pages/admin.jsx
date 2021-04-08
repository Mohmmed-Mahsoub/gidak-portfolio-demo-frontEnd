import { useState } from "react";
import axios from "axios";
const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:1337/pages/2", {
        heading: title,
        address,
      })
      .then((response) => {
        console.log(response.data);
      });

    /* console.log("title:", title, "address:", address); */
  };
  return (
    <div>
      <h2>admin</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          className="title"
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label htmlFor="address">address</label>
        <input
          className="address"
          type="text"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
