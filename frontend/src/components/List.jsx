function List(props) {
  return (
    <>
      <ul className="list-group">
        {props.names.map(item=>(
            <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
