import TodoItem from "./TodoItem";
import styles from "./TodoList.module.scss";

const TodoList = ({ data, onDel, onMod }) => {
    return (
        <ul className={styles.TodoList}>
            {data.map((item) => (
                <TodoItem key={item.id} item={item} onDel={onDel} onMod={onMod} />
            ))}
        </ul>
    );
};

export default TodoList;
