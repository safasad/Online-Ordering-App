import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      {/* ...props.input means that every key value pair in input will be received here */}
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
