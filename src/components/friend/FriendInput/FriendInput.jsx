import { useRef, useState } from "react";
import styles from "./FriendInput.module.scss";

const FriendInput = ({ onAdd }) => {
    const [user, setUser] = useState({
        name: "",
        age: "",
        imgurl: "",
    });
    const nameRef = useRef();
    const { name, age, imgurl } = user;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        //공백
        if (!name || !age || !imgurl) return;
        // onAdd(name, age, imgurl)
        onAdd(user);

        setUser({ name: "", age: "", imgurl: "" });
        nameRef.current.focus();
    };

    return (
        <form className={styles.formadd} onSubmit={onSubmit}>
            <p>
                <label htmlFor="">이름 </label>
                <input type="text" ref={nameRef} value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">나이 </label>
                <input type="text" value={age} name="age" onChange={changeInput} />
            </p>
            <p>
                <label htmlFor="">주소 </label>
                <input type="text" value={imgurl} name="imgurl" onChange={changeInput} />
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default FriendInput;
