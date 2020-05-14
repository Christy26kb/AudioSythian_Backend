import Joi from 'joi';
import validator from 'validator';

const schemaFieldValidator = (value, field) => {
  switch (field) {
    case 'email': {
      return validator.isEmail(value);
    }
    case 'phone': {
      return typeof value === 'number';
    }
    default: {
      return true;
    }
  }
};

export { schemaFieldValidator };
