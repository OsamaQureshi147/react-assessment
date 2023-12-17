import React from 'react';
import classes from './styles.module.css';

export const Select = React.forwardRef(
  ({ name, label, required, options, ...props }, ref) => {
    return (
      <div className={classes.container}>
        <label className={classes.label} for={name}>{`${label}${
          required ? ' *' : ''
        }`}</label>
        <select
          className={classes.select}
          id={name}
          name={name}
          {...props}
          ref={ref}
        >
          {options?.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
