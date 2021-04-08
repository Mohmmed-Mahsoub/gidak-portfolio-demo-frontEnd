import axios from "axios";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [pageData, setPageData] = useState("");
  const checkRequests = async () => {
    try {
      const { data } = await axios.get("http://localhost:1337/pages");
      setPageData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkRequests();
  }, []);
  return (
    <>
      <div className="title">{pageData.heading}</div>
      <div className="address">{pageData.address}</div>
    </>
  );
};

export default HomePage;
