import FriendItem from "./FriendItem";
import styles from "./FriendList.module.scss";

const FriendList = ({ data, onDel }) => {
    return (
        <ul className={styles.list}>
            {data.map((item) => (
                <FriendItem key={item.id} item={item} onDel={onDel} />
            ))}
        </ul>
    );
};

export default FriendList;
