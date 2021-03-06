import { useEffect, useState } from "react";

const useProduct = () => {
  const [parts, setParses] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-reef-99416.herokuapp.com/items", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setParses(data));
  }, []);

  return [parts, setParses];
};

export default useProduct;
