import { useState, useEffect } from "react";

const App = () => {
  const [osobe, setOsobe] = useState([]);

  useEffect(() => {
    fetch("./data/data.json")
      .then((res) => res.json())
      .then((data) => setOsobe(data));
    console.log(osobe);
  }, []);

  console.log(osobe);
  return (
    <div>
      {osobe.map((osoba) => {
        return (
          <p>
            {osoba.ime} {osoba.prezime}
          </p>
        );
      })}
    </div>
  );
};

export default App;
