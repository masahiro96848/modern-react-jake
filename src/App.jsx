import React from 'react';
import './styles.css';

export const App = () => {
  return (
    <>
        <div className='input-area'>
            <input placeholder='Todoを入力' type="" />
        </div>
        <div className='incomplete-area'>
            <p className='title'>未完了のTodo</p>
            <ul>
                <div className='list-row'>
                    <li>あああああ</li>
                    <button>完了</button>
                    <button>削除</button>
                </div>
                <div className='list-row'>
                    <li>あああああ</li>
                    <button>完了</button>
                    <button>削除</button>
                </div>
            </ul>
        </div>
        <div className='complete-area'>
            <p>完了のTodo</p>
            <ul>
                <div className='list-row'>
                    <li>あああああ</li>
                    <button>戻す</button>
                </div>
                <div className='list-row'>
                    <li>あああああ</li>
                    <button>戻す</button>
                </div>
            </ul>
        </div>
    </>
  )
}