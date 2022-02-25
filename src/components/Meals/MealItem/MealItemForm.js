import classes from "./MealItemForm.module.css";
import Input from '../../UI/Input/Input'

const MealIemForm = (props) => {
  return (
    <from className={classes.form}>
      <Input label='Amount' input={{
          id:'amount'+ props.id,
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
