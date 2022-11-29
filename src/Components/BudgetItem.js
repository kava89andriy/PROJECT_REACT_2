const BudgetItem = () => {
  return (
    <li id="6582">
      <span>sefg 4</span>
      <button class="budget__list__item__button budget__list__item__button--edit">
        Edit
      </button>
      <button
        id="deleteBTN6582"
        class="budget__list__item__button budget__list__item__button--delete"
      >
        Delete
      </button>
      <button class="budget__list__item__button budget__list__item__button--save budget__list__item__button--not-visible">
        Save
      </button>
      <button class="budget__list__item__button budget__list__item__button--cancel budget__list__item__button--not-visible">
        Cancel
      </button>
    </li>
  );
};

export default BudgetItem;
