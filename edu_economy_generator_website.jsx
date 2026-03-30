import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EconomyDashboard() {
  // ---- COUNTRY DATA (for ranking cards) ----
  const countriesData = [
    {
      name: "Federation of the Commonwealth States (F-CS)",
      gdp: "Ɇ5.0 Trillion",
      production: "375,000 goods/day",
      currency: "Commonwealth Dollar",
      rate: 2.1,
      rank: "#1",
    },
    {
      name: "Union of Socialist Communes (USC)",
      gdp: "Ɇ4.5 Trillion",
      production: "300,000 goods/day",
      currency: "Communard (¢)",
      rate: 2.0,
      rank: "#2",
    },
    {
      name: "Republic of Arcadia",
      gdp: "Ɇ1.2 Trillion",
      production: "20,000 goods/day",
      currency: "ACD",
      rate: 2.7,
      rank: "#3",
    },
    {
      name: "Confederacy of TDC",
      gdp: "Ɇ0.9 Trillion",
      production: "22,000 goods/day",
      currency: "TDC Crown",
      rate: 3.0,
      rank: "#4",
    },
    {
      name: "Kohlrah Constituency",
      gdp: "Ɇ0.8 Trillion",
      production: "37,000 goods/day",
      currency: "Dirham",
      rate: 3.1,
      rank: "#5",
    },
    {
      name: "Retrogistan",
      gdp: "Ɇ0.45 Trillion",
      production: "10,500 goods/day",
      currency: "₽",
      rate: 4.2,
      rank: "#6",
    },
    {
      name: "Federal State of Selvaria",
      gdp: "Ɇ0.15 Trillion",
      production: "5,000 goods/day",
      currency: "Selvarium",
      rate: 5.0,
      rank: "#7",
    },
    {
      name: "Duchy of Xelonia",
      gdp: "Ɇ0.25 Trillion",
      production: "8,000 goods/day",
      currency: "Xelon Mark",
      rate: 4.6,
      rank: "#8",
    },
    {
      name: "Kingdom of Ortezaria",
      gdp: "Ɇ0.18 Trillion",
      production: "6,500 goods/day",
      currency: "Ortez Crown",
      rate: 5.2,
      rank: "#9",
    },
  ];

  // ---- CURRENCY LIST (for converter) ----
  const currencies = [
    { name: "Ɇ (EDU Crown)", rate: 1 },
    ...countriesData.map((c) => ({ name: c.currency, rate: c.rate })),
  ];

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState(currencies[0]);
  const [to, setTo] = useState(currencies[1]);

  const convert = () => {
    const inBase = amount / from.rate;
    return (inBase * to.rate).toFixed(2);
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-3xl font-bold">🌍 EDU Global Economy Dashboard</h1>

      {/* ---- RANKING CARDS ---- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countriesData.map((c, i) => (
          <Card key={i} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <p>Rank: {c.rank}</p>
              <p>GDP: {c.gdp}</p>
              <p>Production: {c.production}</p>
              <p>Currency: {c.currency}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ---- CURRENCY CONVERTER ---- */}
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-4 grid gap-4">
          <h2 className="text-xl font-semibold">💱 Currency Converter</h2>

          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />

          <div className="grid grid-cols-2 gap-2">
            <select
              value={from.name}
              onChange={(e) =>
                setFrom(currencies.find((c) => c.name === e.target.value))
              }
              className="p-2 border rounded"
            >
              {currencies.map((c, i) => (
                <option key={i}>{c.name}</option>
              ))}
            </select>

            <select
              value={to.name}
              onChange={(e) =>
                setTo(currencies.find((c) => c.name === e.target.value))
              }
              className="p-2 border rounded"
            >
              {currencies.map((c, i) => (
                <option key={i}>{c.name}</option>
              ))}
            </select>
          </div>

          <p className="text-lg font-bold">
            Result: {convert()} {to.name}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
