import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import 'bootstrap/dist/css/bootstrap.css';
import FoodOrderCard from './FoodCard/FoodOrderCard'
import foodorder from './FoodCard/foodorder'
import UserList from './userList';
import MyUser from './myUser';
import CounterSaga from './countersaga';
import Appointment from './Appoinment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Provider store={store}>

{/* <MyUser/> */}

{/* <UserList/> */}
  {/* <CounterSaga/> */}
  <Appointment/>
</Provider>
{/* <FoodOrderCard/> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
