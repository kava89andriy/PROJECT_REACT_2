import { useState } from "react";
const Expenses = (props) => {
  const [expanses, setExpanses] = useState([]);
  const [expanseTitle, setExpanseTitle] = useState("");
  const [expanseValue, setExpanseValue] = useState(0);



  const addExpanse = (e) => {
    e.preventDefault()
    let data = {
      title: expanseTitle,
      value: expanseValue,
    };
    setExpanses([...expanses, data]);
    console.log(expanses);
  }


  return (
    <div className="budget__expenses">
      <h2 className="budget__list__header expenses__header">Expenses</h2>
      <form id="expenseForm" className="budget__list__form" onSubmit={(e) => {console.log(e)} }>
        <input
          type="text"
          id="expenseTitle"
          className="budget__list__form__input budget__list__form__input--text"
          onChange={(e) => setExpanseTitle(e.target.value) }
        />
        <input
          type="number"
          min="0"
          id="expenseValue"
          className="budget__list__form__input budget__list__form__input--number"
          onChange={(e) => setExpanseValue(parseInt(e.target.value)) }
        />
        <input
          type="submit"
          value="Add"
          className="budget__list__form__input__button"
        />
      </form>
      <ul id="expensesList" className="budget__list"></ul>

      <p className="budget__list__summary">
        Expenses sum: <span id="expensesValue">0</span> PLN
      </p>
    </div>
  );
};

export default Expenses;
