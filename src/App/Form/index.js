import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Field, Header, Info, LabelText } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Header>
        Przelicznik walut
      </Header>
      <p>
        <label>
          <LabelText> Kwota w zł*:</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder=" Wpisz kwotę w zł "
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <LabelText>Waluta:</LabelText>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))}
          </Field>
        </label>
      </p>
      <p>
        <Button>Przelicz !</Button>
      </p>
      <Info>
        Kursy pochodzą ze strony nb.pl z Tabeli nr 016/A/NBP/2023 z dnia 2023-01-24
      </Info>
      <Result result={result} />
    </form>

  );
};