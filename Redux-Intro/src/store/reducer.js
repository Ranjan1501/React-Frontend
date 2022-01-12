import { ADD_TODO, TOGGLE_TODO, INC_COUNT, DEC_COUNT } from "./actionTypes";
const init = { todo: [], counter: 10};
export const reducer = (state=init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
          };
      case TOGGLE_TODO: {
          return {
              ...state,
             todo:state.todo.map((item)=>item.title===payload ? {...item, status: !item.status,}: item ) 
          }
      }
      case INC_COUNT:
          return {
              ...state,
              counter: state.counter+ payload
          }
      case DEC_COUNT:
          return {
              ...state,
              counter: state.counter- payload

          }
    default:
      return state;
  }
};
