import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./Todos.module.scss";

const Todos = () => {
    const [data, setData] = useState([]);
    const no = useRef(1);
    // {id:1, text:'xxx', isChk:false }

    //삭제
    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    //추가
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id: no.current++,
                text,
                isChk: false,
            },
        ]);
    };

    // 수정
    const onMod = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isChk: !item.isChk } : item)));
    };

    return (
        <div className={styles.Todos}>
            <h1>할일 작성</h1>
            <TodoForm onAdd={onAdd} />
            <TodoList data={data} onDel={onDel} onMod={onMod} />
        </div>
    );
};

export default Todos;
