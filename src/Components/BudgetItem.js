import { useEffect, useState } from "react";
const BudgetItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [itemValue, setItemValue] = useState("");

  const handleSave = (value) => {

  }

  return (
    <li>
      {editMode ? (
        <>
          <input
            type="text"
            defaultValue={props.title}
            onChange={(e) => {
              setItemTitle(e.target.value);
            }}
          />
          <input
            type="number"
            defaultValue={props.value}
            onChange={(e) => {
              setItemValue(e.target.value);
            }}
          />
          <button
            onClick={ () => {
               props.editItem(props.id, [itemTitle, itemValue])
               setEditMode(false)
              }
            }
            className="budget__list__item__button budget__list__item__button--save"
          >
            Save
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="budget__list__item__button budget__list__item__button--cancel"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span>
            {props.title} {props.value}
          </span>
          <button
            onClick={() => setEditMode(true)}
            className="budget__list__item__button budget__list__item__button--edit"
          >
            Edit
          </button>
          <button
            onClick={() => props.deleteItem(props.id)}
            className="budget__list__item__button budget__list__item__button--delete"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default BudgetItem;
