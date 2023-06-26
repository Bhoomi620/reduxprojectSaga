import { all } from "redux-saga/effects";
import { watchIncrement } from "./countersaga";

 

export default function* rootSaga()
{

    yield all([watchIncrement()])
}