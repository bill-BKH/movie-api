import ListItem from "./ListItem";

function List(props) {
  return (
    <>
      <ul className="list-group">
        {props.names.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </ul>
    </>
  );
}

export default List;
