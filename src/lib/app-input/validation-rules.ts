import {STRING_CONSTANTS} from '../../utils/constants/stringConstants';

export const EMAIL_VALIDATION = {
  required: STRING_CONSTANTS.required_validation('Email'),
  pattern: {
    value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
    message: STRING_CONSTANTS.invalid_email_msg,
  },
};

// Minimum eight characters, at least one letter and one number:
export const PASS_VALIDATION_WITHOUT_SPECIAL = {
  required: STRING_CONSTANTS.required_validation('Password'),
  pattern: {
    value: /\b^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$\b/,
    message: STRING_CONSTANTS.invalid_pass_msg,
  },
};
// Minimum eight characters, at least one letter, one number and one special character:
export const PASS_VALIDATION_WITH_SPECIAL = {
  required: STRING_CONSTANTS.required_validation('Password'),
  pattern: {
    value: /\b^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$\b/,
    message: STRING_CONSTANTS.invalid_pass_special_msg,
  },
};

// Minimum eight characters
export const PASS_VALIDATION = {
  required: STRING_CONSTANTS.required_validation('Password'),
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g, //Validating minimum eight characters, at least one letter and one number with optional special characters
    message: STRING_CONSTANTS.invalid_pass_msg,
    required: true,
  },
};

export const PASS_VALIDATION_ONLY_REQUIRED = {
  required: STRING_CONSTANTS.required_validation('Password'),
};
