import axios from "axios";
import { GET_ALL_EMPLOYEES, GET_EMPLOYEE } from "./actionTypes";

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:4000/employee", {
        query: "{\n\temployees{\n    name,\n    gender,\n    id\n  }\n}",
        variables: null,
      });
      dispatch({
        type: GET_ALL_EMPLOYEES,
        payload: data.data.employees,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEmployee = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:4000/employee", {
        query: `{\n\temployee(id: ${id}){\n    name,\n    gender,\n    id\n  }\n}`,
        variables: null,
      });
      dispatch({
        type: GET_EMPLOYEE,
        payload: data.data.employee,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
