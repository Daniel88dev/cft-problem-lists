import { useLocation } from "react-router-dom";

const ChartsSelection = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default ChartsSelection;
