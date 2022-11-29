import budgetLogo from "../assets/budget.png";

const Header = ({budgetValue}) => {
  return (
    <header>
      <h1 className="text--center">Home budget</h1>
      <div className="app__logo">
        <img src={budgetLogo} />
      </div>
      <div id="budgetState" className="budget__state budget__state--success">
        <p className="text--center">
          You can still spend {budgetValue} PLN
        </p>
      </div>
    </header>
  );
};

export default Header;
