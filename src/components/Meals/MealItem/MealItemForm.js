import { useRef , useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealIemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState()


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    console.log(enteredAmountNum)

    props.onAddToCart(enteredAmountNum)
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: amountInputRef,
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />

      <button >+ Add</button>
    </form>
  );
};

export default MealIemForm;
