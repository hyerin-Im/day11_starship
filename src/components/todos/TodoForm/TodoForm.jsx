import { useRef, useState } from 'react';
import styles from './TodoForm.module.scss';

const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef();

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const onInput = (e) => {
        e.preventDefault();
        onAdd(text);
        setText('');
        textRef.current.focus();
    };

    return (
        <form className={styles.TodoForm} onSubmit={onInput}>
            <input type="text" value={text} onChange={changeInput} ref={textRef} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;
