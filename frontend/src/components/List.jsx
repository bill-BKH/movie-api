import ListItem from "./ListItem";

function List(props) {
  return (
    <>
      <ul className="list-group">
        {props.names.map((item, index) => (
          <ListItem onRemove={props.onRemove} key={index} item={item}/>
        ))}
      </ul>
    </>
  );
}

export default List;
