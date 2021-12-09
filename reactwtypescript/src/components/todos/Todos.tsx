const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{props.children}</p>
    </div>
  );
};

export default Todos;
