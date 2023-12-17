import React from 'react';
import classes from './styles.module.css';

export const InputField = React.forwardRef(
  ({ label, name, required, type = 'text', ...props }, ref) => {
    return (
      <div className={classes.container}>
        <label for={name} className={classes.label}>{`${label}${
          required ? ' *' : ''
        }`}</label>
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          ref={ref}
          className={classes.input}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';
