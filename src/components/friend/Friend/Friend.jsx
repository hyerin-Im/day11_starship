import FriendTable from "../FriendTable/FriendTable";
import friendList from "../../../assets/api/friendList";
import styles from "./Friend.module.scss";
import { useRef, useState } from "react";
import FriendList from "../FriendList/FriendList";
import FriendInput from "../FriendInput/FriendInput";

const Friend = () => {
    const [data, setData] = useState(friendList);
    const [isChk, setIsChk] = useState(false);
    const no = useRef(data.length + 1);

    //삭제
    const onDel = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    //모두삭제
    const onRemove = () => {
        setData([]);
    };
    //초기복구
    const onRestore = () => {
        setData(friendList);
    };

    const changeInput = (e) => {
        const { checked } = e.target;
        setIsChk(checked);
    };

    //추가
    const onAdd1 = (name, age, imgurl) => {
        setData([
            ...data,
            {
                id: no.current++,
                name,
                age,
                imgurl,
            },
        ]);
    };

    const onAdd = (user) => {
        user.id = no.current++;
        setData([...data, user]);
    };

    return (
        <div className={styles.wrap}>
            <article className={styles.con1}>
                <h2> 친구들 총인원 : {data.length} </h2>
                <p className={styles.chk}>
                    <input type="checkbox" checked={isChk} value="체크" name="abc" onChange={changeInput} />
                    {isChk ? "비활성" : "활성화"}
                </p>
                <FriendList data={data} onDel={onDel} />

                <p className={styles.btn}>
                    <button onClick={onRemove}>모두삭제</button>
                    <button onClick={onRestore}>초기복구</button>
                </p>

                {isChk && <FriendInput onAdd={onAdd} />}
            </article>

            <FriendTable />
        </div>
    );
};

export default Friend;
