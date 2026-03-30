'use client';
import { useState } from "react";

export default function EconomyDashboard() {
  const countriesData = [
    { name: "F-CS", gdp: "Ɇ5.0T", production: "375K", currency: "Commonwealth Dollar", rate: 2.1, rank: "#1" },
    { name: "USC", gdp: "Ɇ4.5T", production: "300K", currency: "Communard", rate: 2.0, rank: "#2" },
    { name: "Arcadia", gdp: "Ɇ1.2T", production: "20K", currency: "ACD", rate: 2.7, rank: "#3" },
    { name: "TDC", gdp: "Ɇ0.9T", production: "22K", currency: "TDC Crown", rate: 3.0, rank: "#4" },
    { name: "Kohlrah", gdp: "Ɇ0.8T", production: "37K", currency: "Dirham", rate: 3.1, rank: "#5" },
    { name: "Retrogistan", gdp: "Ɇ0.45T", production: "10K", currency: "₽", rate: 4.2, rank: "#6" },
    { name: "Selvaria", gdp: "Ɇ0.15T", production: "5K", currency: "Selvarium", rate: 5.0, rank: "#7" },
    { name: "Xelonia", gdp: "Ɇ0.25T", production: "8K", currency: "Xelon Mark", rate: 4.6, rank: "#8" },
    { name: "Ortezaria", gdp: "Ɇ0.18T", production: "6K", currency: "Ortez Crown", rate: 5.2, rank: "#9" }
  ];

  const currencies = [
    { name: "Ɇ (EDU Crown)", rate: 1 },
    ...countriesData.map(c => ({ name: c.currency, rate: c.rate }))
  ];

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState(currencies[0]);
  const [to, setTo] = useState(currencies[1]);

  const convert = () => {
    const base = amount / from.rate;
    return (base * to.rate).toFixed(2);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🌍 EDU Economy Dashboard</h1>

      <h2>📊 Rankings</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {countriesData.map((c, i) => (
          <div key={i} style={{ border: "1px solid gray", padding: 10 }}>
            <h3>{c.name}</h3>
            <p>Rank: {c.rank}</p>
            <p>GDP: {c.gdp}</p>
            <p>Production: {c.production}</p>
            <p>Currency: {c.currency}</p>
          </div>
        ))}
      </div>

      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <div>
        <select onChange={(e) => setFrom(currencies.find(c => c.name === e.target.value))}>
          {currencies.map((c, i) => <option key={i}>{c.name}</option>)}
        </select>

        <select onChange={(e) => setTo(currencies.find(c => c.name === e.target.value))}>
          {currencies.map((c, i) => <option key={i}>{c.name}</option>)}
        </select>
      </div>

      <h3>Result: {convert()} {to.name}</h3>
    </div>
  );
}
