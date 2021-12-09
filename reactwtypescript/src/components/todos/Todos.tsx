const Todos: React.FC<{ items: string[] }> = ({ children }) => {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
};

export default Todos;
