const TableItem = ({ item }) => {
    const { name, imgurl } = item;
    return (
        <tr>
            <td> {name} </td>
            <td> {imgurl} </td>
        </tr>
    );
};

export default TableItem;
