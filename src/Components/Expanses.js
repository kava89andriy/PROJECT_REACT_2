import { useState } from "react";
import BudgetItem from "./BudgetItem";
const Expenses = (props) => {
  const [expanses, setExpanses] = useState([]);
  const [expanseTitle, setExpanseTitle] = useState("");
  const [expanseValue, setExpanseValue] = useState(0);

  const addExpanse = (e) => {
    e.preventDefault();
    let data = {
      title: expanseTitle,
      value: expanseValue,
      id: (Math.random() * 100000).toFixed(0),
    };
    setExpanses([...expanses, data]);
    console.log(expanses);
  };

  const editItem = (id, data) => {
    let currentItems = expanses;
    let index = currentItems.findIndex((item) => item.id === id);
    currentItems[index].title = data[0];
    currentItems[index].value = data[1];
    setExpanses(currentItems);
  };

  const deleteItem = (id) => {
    let currentItems = expanses;
    let indexToRemove = currentItems.findIndex((item) => item.id === id);
    currentItems.slice(indexToRemove, 1);
    setExpanses(currentItems);
    props.handleTotal(expanses);
  };

  return (
    <div className="budget__expenses">
      <h2 className="budget__list__header expenses__header">Expenses</h2>
      <form
        id="expenseForm"
        className="budget__list__form"
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <input
          type="text"
          id="expenseTitle"
          className="budget__list__form__input budget__list__form__input--text"
          onChange={(e) => setExpanseTitle(e.target.value)}
        />
        <input
          type="number"
          min="0"
          id="expenseValue"
          className="budget__list__form__input budget__list__form__input--number"
          onChange={(e) => setExpanseValue(parseInt(e.target.value))}
        />
        <input
          type="submit"
          value="Add"
          className="budget__list__form__input__button"
        />
      </form>
      <ul className="budget__list">
        {expanses.map((expanse) => {
          return (
            <BudgetItem
              title={expanse.title}
              value={expanse.value}
              id={expanse.id}
              editItem={editItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>

      <p className="budget__list__summary">
        Expenses sum: <span id="expensesValue">{props.expansesTotal}</span> PLN
      </p>
    </div>
  );
};

export default Expenses;
