import React from "react";
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_fwaXj7I8obDdfQbJ31tyQJDVVQebFj4xDGDipzob";

const currencyOptions = [
  "AUD",
  "BGN",
  "BRL",
  "CAD",
  "CHF",
  "CNY",
  "CZK",
  "DKK",
  "EUR",
  "GBP",
  "HKD",
  "HRK",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "ISK",
  "JPY",
  "KRW",
  "MXN",
  "MYR",
  "NOK",
  "NZD",
  "PHP",
  "PLN",
  "RON",
  "RUB",
  "SEK",
  "SGD",
  "THB",
  "TRY",
  "USD",
  "ZAR",
];

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const returnObj = await axios.get(`
      ${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    setResult((returnObj.data.data[toCurrency] * amount).toFixed(3));
  };

  return (
    <div className="currency-div">
      <div>
        <h2 style={{ marginTop: "-30px", marginBottom: "35px" }}>
          CURRENCY APP
        </h2>
      </div>
      <div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />

        <select
          className="from-currency-option"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>TRY</option>
          <option>EUR</option>
          <option>AUD</option>
          <option>BGN</option>
          <option>BRL</option>
          <option>CAD</option>
          <option>CHF</option>
          <option>CNY</option>
          <option>CZK</option>
          <option>DKK</option>
          <option>GBP</option>
          <option>HKD</option>
          <option>HRK</option>
          <option>HUF</option>
          <option>IDR</option>
          <option>ILS</option>
          <option>INR</option>
          <option>ISK</option>
          <option>JPY</option>
          <option>KRW</option>
          <option>MXN</option>
          <option>MYR</option>
          <option>NOK</option>
          <option>NZD</option>
          <option>PHP</option>
          <option>PLN</option>
          <option>RON</option>
          <option>RUB</option>
          <option>SEK</option>
          <option>SGD</option>
          <option>THB</option>
          <option>ZAR</option>
        </select>

        <FaArrowCircleRight
          style={{
            fontSize: "25px",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
          <option>AUD</option>
          <option>BGN</option>
          <option>BRL</option>
          <option>CAD</option>
          <option>CHF</option>
          <option>CNY</option>
          <option>CZK</option>
          <option>DKK</option>
          <option>GBP</option>
          <option>HKD</option>
          <option>HRK</option>
          <option>HUF</option>
          <option>IDR</option>
          <option>ILS</option>
          <option>INR</option>
          <option>ISK</option>
          <option>JPY</option>
          <option>KRW</option>
          <option>MXN</option>
          <option>MYR</option>
          <option>NOK</option>
          <option>NZD</option>
          <option>PHP</option>
          <option>PLN</option>
          <option>RON</option>
          <option>RUB</option>
          <option>SEK</option>
          <option>SGD</option>
          <option>THB</option>
          <option>ZAR</option>
        </select>

        <input value={result} type="number" className="result"></input>
      </div>
      <div>
        <button onClick={exchange} className="exchange-btn">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
