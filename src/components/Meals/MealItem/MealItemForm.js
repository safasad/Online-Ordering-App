import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input/Input'

const MealIemForm = () => {
  return (
    <from className={classes.form}>
      <Input label='Amount' input={{
          id:'amount',
          type: 'number',
          min:'1',
          max:'5',
          defaultValue: '1',
          step:'1'
      }}/> 
      

      <button>+ Add</button>
    </from>
  );
};

export default MealIemForm;
