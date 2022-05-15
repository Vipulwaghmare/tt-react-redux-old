const { GET_EMPLOYEE, GET_ALL_EMPLOYEES } = require("store/actions");

const initialState = {
  employees: [],
  employee: null,
};

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employee: payload,
      };
    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
