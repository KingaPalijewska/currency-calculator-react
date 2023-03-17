import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import ".style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrncy] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">
        Przelicznik walut
      </h1>
      <p>
        <label>
          <span className="form__labelText">
            Kwota w zł*:
          </span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder=" Wpisz kwotę w zł "
            className="form__field"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Waluta:
          </span>
          <select
            className="form__field"
            value={currency}
            onChange={({ targt }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz !</button>

      </p>
      <p className="form__info">
        Kursy pochodzą ze strony nb.pl z Tabeli nr 016/A/NBP/2023 z dnia 2023-01-24
      </p>
      <Result result={result}/>
       </form>

  );
};