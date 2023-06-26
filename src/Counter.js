import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increAction,decreAction,mulAction } from './action/counterAction';
import Button from 'react-bootstrap/Button'


export default function Counter() {

    const state = useSelector(y=>y);
    
    const dispatch  = useDispatch();


    const incre = ()  =>{

        dispatch(increAction())
    }

    const decre = ()  =>{

        dispatch(decreAction())
    }

    const mul = ()  =>{

        dispatch(mulAction())
    }



  return (
    <div>{state}
    
    <Button variant="primary" onClick={incre}>+</Button>
    <Button variant="secondary" onClick={decre}>-</Button>
    <Button variant="success" onClick={mul}>*</Button>


    
    </div>
  )
}
