import {createStore} from "redux";
import {reducer} from "./CurrencyReducer";

export const store = createStore(reducer)
