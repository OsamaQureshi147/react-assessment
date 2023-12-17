import React from 'react';
import classes from './styles.module.css';

export const InputField = React.forwardRef(
  ({ label, name, type = 'text', ...props }, ref) => {
    return (
      <div className={classes.container}>
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          ref={ref}
          className={classes.input}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';
