import {createStore} from 'redux';
import {act} from "@testing-library/react";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [];
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
}

const store = createStore(reducer);

const onSubmit = e => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    store.dispatch({ type: ADD_TODO, text: todo })
}

form.addEventListener("submit", onSubmit);
