import "./Child.css";
import { List } from "./Component";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List></List>
    </div>
  );
};

export default Child;
