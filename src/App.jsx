import React, { useState } from 'react';
import './styles.css';

export const App = () => {
const [incompleteTodos, setIncompleteTodos] = useState(['ああああ', 'いいいいい'])
const [completeTodos, setCompleteTodos] = useState(['うううう'])
    return (
        <>
            <div className='input-area'>
                <input placeholder='Todoを入力' type="" />
            </div>
            <div className='incomplete-area'>
                <p className='title'>未完了のTodo</p>
                <ul>
                    {incompleteTodos.map((todo) => {
                        return (
                            <div key={todo} className='list-row'>
                                <li>{todo}</li>
                                <button>完了</button>
                                <button>削除</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className='complete-area'>
                <p>完了のTodo</p>
                <ul>
                    {completeTodos.map((todo) => {
                        return (
                            <div key={todo} className='list-row'>
                                <li>{todo}</li>
                                <button>戻す</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}