
const FriendItem = ({ item , onDel }) => {
    const { id, name, imgurl, age } = item 
    return (
        <li>
           <p><img src={imgurl} alt={name} /></p> 
           <div><strong>이름:{name}</strong>
               <em>나이:{age} </em></div>
           <button onClick={ () => onDel(id) }>삭제</button>
        </li>
    );
};

export default FriendItem; 