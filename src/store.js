import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

// 리덕스 toolkit을 이용한 코드 간결화 createAction안에 타입의 인수를 넣는다.
// createAction은 항상 type과 payload를 반환한다.
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
//
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
