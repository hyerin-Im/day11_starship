import styles from './TodoList.module.scss';

const TodoItem = ({ item, onDel, onMod }) => {
    const { id, text, isChk } = item;
    return (
        <li className={isChk ? styles.on : ''}>
            <span onClick={() => onMod(id)}>✓</span>
            <em onClick={() => onMod(id)}> {text} </em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
