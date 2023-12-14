import React from 'react';
import classes from './styles.module.css';

export const InputField = React.forwardRef(
  ({ label, name, required, type = 'text', ...props }, ref) => {
    return (
      <div>
        <label for={name}>{`${label}${required ? ' *' : ''}`}</label>
        <input
          type={type}
          id={name}
          name={name}
          required={required}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';
