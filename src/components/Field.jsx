import React from 'react';
import './Field.css';
import Sticker from './Sticker';

const Field = () => {
    
    const [toDoList, setToDoList] = React.useState(Array(
        'Выучить React и устроиться на новую работу',
        'Не забыть покормить Бублика'
    ));

    const [task, setTask] = React.useState('');
    

    const handleClick = () => {
        const toDoListCopy = [...toDoList, task]
        setToDoList(toDoListCopy)
        setTask('')
    }    

    const remove = (index) => {
        const toDoListCopy = [...toDoList]
        toDoListCopy.splice(index, 1)
        setToDoList(toDoListCopy)
    }

    return (
        <div className='wrapper'>
            <div className='addFunc'>
                <input className='input'
                       placeholder='Добавить напоминалку'
                       value={task}
                       onChange={(e) => setTask(e.target.value)} />
                <button className='btn' onClick={() => handleClick()}>Добавить</button>
            </div>
            <div className='stickersField'>
                {
                    toDoList.map((td, i) => <Sticker key={i} value={td} remove={() => remove(i)}/>)
                }
            </div>
        </div>
    );
}

export default Field;
