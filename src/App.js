import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [money, setMoney] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelectedCoin(json[0]?.id || "");
      });
  }, []);

  const onChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const moneyChange = (event) => {
    setMoney(event.target.value);
  };

  const selectedCoinData = coins.find((coin) => coin.id === selectedCoin);
  const amountCanBuy = selectedCoinData
    ? money / selectedCoinData.quotes.USD.price
    : 0;

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={selectedCoin} onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <input
        onChange={moneyChange}
        value={money}
        type="number"
        placeholder="얼마나 가지고 있나요? (USD)"
      />
      <h3>구매 가능:</h3>
      <p>{amountCanBuy} {selectedCoinData?.symbol}</p>
    </div>
  );
}

export default App;