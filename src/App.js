import logo from "./logo.svg";
import "./reset.css";
import "./style.css";
import Header from "./Components/Header";
import Income from "./Components/Income";
import Expenses from "./Components/Expanses";
import { useState } from "react";

function App() {
  const [budgetTotal, setBudgetTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expansesTotal, setExpansesTotal] = useState(0);

  const handleTotal = () => {

  }

  return (
    <main className="container">
      <Header budgetValue={budgetTotal}/>
      <section className="flex flex--space-between budget__list__wrapper">
        <Income setIncomes={setIncomeTotal} handleTotal={handleTotal} incomeTotal={incomeTotal} />
        <Expenses setExpanses={setExpansesTotal} handleTotal={handleTotal} expansesTotal={expansesTotal} />
      </section>
    </main>
  );
}

export default App;