import { useState } from "react";
const Income = (props) => {
  const [incomes, setIncomes] = useState([]);
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeValue, setIncomeValue] = useState(0);

  const addIncome = (e) => {
    e.preventDefault();
    let data = {
      title: incomeTitle,
      value: incomeValue,
    };
    setIncomes([...incomes, data]);

    console.log(incomes);
  };

  return (
    <div className="budget__incomes">
      <h2 className="budget__list__header incomes__header">Incomes</h2>
      <form
        id="incomeForm"
        className="budget__list__form"
        onSubmit={(e) => addIncome(e)}
      >
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
        <input
          type="submit"
          value="Add"
          className="budget__list__form__input__button"
        />
      </form>
      <ul id="incomesList" className="budget__list"></ul>
      <p className="budget__list__summary">
        Incomes sum: <span id="incomesValue">0</span> PLN
      </p>
    </div>
  );
};

export default Income;
