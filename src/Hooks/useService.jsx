const { useState, useEffect } = require("react");

const useService = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch(`../servicesData.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return [servicesData, setServicesData];
};
export default useService;
