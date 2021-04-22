import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "./../context/dataContext";
const AdminPage = () => {
  const [headingData, setHeadingData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* axios
      .put(`http://localhost:1337/languages/1`, {
        content: [{ }],
      })
      .then((response) => {
        console.log(response.data);
      }); */

    /* console.log("title:", title, "address:", address); */
  };
  return (
    <div>
      <h2>admin</h2>
      <div className="row">
        <div className="col-2">heading</div>
        <div className="col-10">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={headingData}
              onChange={(event) => {
                setHeadingData(event.target.value);
              }}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

/*

*/
