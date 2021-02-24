import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import TagsInput from './inputTag';


function TodoListItem({ className, name, onComplete, onChange, remove }) {


    return (
        <li className={className}>
          
            <Btn onClick={onComplete}>Done?</Btn>
            <input onChange={onChange} value={name} />
            <Btn onClick={remove}>x</Btn>   {/* Set a button to if clicked, run the remove function made in TodoList.jsx */}  
            <TagsInput />
           
            
        </li>
    )
};

export default styled(observer(TodoListItem))`
    color: red;
`
// Simple stlying for Btn, created some space in between the button and input and also if you 
// point the mouse on the buttons, changes the cursor to pointer. Finally, finished it off with
// changing button color when user hovers their mouse over it
const Btn  = styled.button` 
    margin: 5px;
    cursor: pointer;
    
    &:hover {
        transitions: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#00BFFF')};
    }
`


