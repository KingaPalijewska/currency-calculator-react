import { useState } from 'react';

function App() {

    const [result, setresult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <div className="app">
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </div>
    );
}

export default App;