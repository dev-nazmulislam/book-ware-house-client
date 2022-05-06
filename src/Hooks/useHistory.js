import { useEffect, useState } from "react";

const useHistory = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    fetch("https://mighty-dusk-49836.herokuapp.com/histories")
      .then((res) => res.json())
      .then((data) => setHistories(data));
  }, [histories]);

  return [histories, setHistories];
};

export default useHistory;
