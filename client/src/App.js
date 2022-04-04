import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loading from "./components/Loading";

/**
 * Convert the contract date to a date format
 * @param conract - The contract number
 * @returns The date in the format dd.mm.yyyy hh:mm
 */
const convertToDate = (conract) => {
  let date = new Date(
    Number("20" + conract.substring(2, 4)),
    Number(conract.substring(4, 6)),
    Number(conract.substring(6, 8)),
    Number(conract.substring(8, 10))
  );
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth()).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  var hh = String(date.getHours()).padStart(2, "0");
  var min = String(date.getMinutes()).padStart(2, "0");
  let time = dd + "." + mm + "." + yyyy + " " + hh + ":" + min;
  return time;
};

/* This is the url that is used to get the data from the server. */
const url = "http://localhost:8080/intra-day-trade-history";

function App() {
  const [data, setData] = useState();
  const [historyMap, setMap] = useState(null);

  useEffect(() => {
    /* Making a request to the server and getting the data back. */
    axios(url, {
      method: "GET",
    }).then((response) => {
      setData(response.data.body);
    });
  }, []);

  useEffect(() => {
    /* Checking if the data is not null. If it is not null, then it will iterate through the data and
  check if the contract name starts with "PH". If it does, then the Total Transaction Amount, Total 
  Transaction Amount and Weighted Average Price values are obtained for each conract. */
    if (data) {
      let map = new Map();
      data?.intraDayTradeHistoryList.forEach((item) => {
        if (item.conract.startsWith("PH")) {
          let val = {
            totalOperationCount: (item.price * item.quantity) / 10,
            totalOperationAmount: item.quantity / 10,
            avaragePrice: item.price / item.quantity,
          };
          if (map.has(item.conract))
            val = {
              totalOperationCount:
                map.get(item.conract).totalOperationCount +
                (item.price * item.quantity) / 10,
              totalOperationAmount:
                map.get(item.conract).totalOperationAmount + item.quantity / 10,
              avaragePrice:
                map.get(item.conract).avaragePrice + item.price / item.quantity,
            };

          map.set(item.conract, { ...val, date: convertToDate(item.conract) });
        }
      });
      setMap(map);
    }
  }, [data]);

  return (
    <div className="min-w-[100vh] h-[100vh] bg-home bg-cover pt-[10rem] ">
      <div className="w-[80%]  mx-auto bg-white/50 shadow-lg shadow-[#fff] rounded   p-6 ">
        {historyMap ? <Home historyMap={historyMap} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;
