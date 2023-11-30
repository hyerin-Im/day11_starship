import TableItem from "./TableItem";
import friendData from "../../../assets/api/friendData";
import styles from "./FriendTable.module.scss";

const FriendTable = () => {
    return (
        <article className={styles.con2}>
            <table>
                <colgroup>
                    <col className={styles.w1} />
                    <col className={styles.w2} />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {friendData.map((item) => (
                        <TableItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </article>
    );
};

export default FriendTable;
