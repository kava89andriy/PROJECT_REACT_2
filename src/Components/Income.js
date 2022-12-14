import { useState } from "react";
import BudgetItem from "./BudgetItem";
import expanses from "./Expanses";
const Income = (props) => {
  const [incomes, setIncomes] = useState([]);
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeValue, setIncomeValue] = useState(0);

  const calculateIncome = () => {
    let counter = 0;
    incomes.forEach((item) => {
      counter += parseInt(item.value);
    });

    return counter;
  };

  const addIncome = () => {
    let data = {
      title: incomeTitle,
      value: incomeValue,
      id: (Math.random() * 100000).toFixed(0),
    };
    let currentIncomes = incomes;
    currentIncomes.push(data);
    setIncomes(currentIncomes);
    props.handleTotal(incomes);

    props.setIncomeTotal(calculateIncome);
  };

  const editItem = (id, data) => {
    let currentItems = incomes;
    let index = currentItems.findIndex((item) => item.id === id);
    currentItems[index].title = data[0];
    currentItems[index].value = data[1];
    setIncomes(currentItems);
    props.setIncomeTotal(calculateIncome);
  };

  const deleteItem = (id) => {
    let currentItems = incomes;
    let indexToRemove = currentItems.findIndex((item) => item.id === id);
    console.log(indexToRemove);
    currentItems.splice(indexToRemove, 1);
    console.log(currentItems);
    setIncomes(currentItems);

    props.setIncomeTotal(calculateIncome);
  };

  return (
    <div className="budget__incomes">
      <h2 className="budget__list__header incomes__header">Incomes</h2>
      <form id="incomeForm" className="budget__list__form">
        <input
          type="text"
          id="incomeTitle"
          className="budget__list__form__input budget__list__form__input--text"
          onChange={(e) => setIncomeTitle(e.target.value)}
        />
        <input
          type="number"
          min="0"
          id="incomeValue"
          className="budget__list__form__input budget__list__form__input--number"
          onChange={(e) => setIncomeValue(parseInt(e.target.value))}
        />
        <button
          onClick={() => addIncome()}
          type="button"
          className="budget__list__form__input__button"
        >
          add{" "}
        </button>
      </form>
      <ul className="budget__list">
        {incomes.map((income, index) => {
          return (
            <BudgetItem
              title={income.title}
              value={income.value}
              id={income.id}
              editItem={editItem}
              deleteItem={deleteItem}
              key={income.id}
            />
          );
        })}
      </ul>
      <p className="budget__list__summary">
        Incomes sum: <span id="incomesValue">{props.incomeTotal}</span> PLN
      </p>
    </div>
  );
};

export default Income;
