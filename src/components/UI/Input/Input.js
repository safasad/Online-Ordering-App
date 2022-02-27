import React ,{useRef} from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props , ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id} >{props.label}</label>
      {/* ...props.input means that every key value pair in input will be received here */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
