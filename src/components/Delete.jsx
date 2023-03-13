import { useDispatch } from "react-redux";

function Delete() {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch({
      type: "delete",
    });
  };

  return (
    <>
      <button onClick={remove}>Обнулить</button>
    </>
  );
}

export default Delete;
