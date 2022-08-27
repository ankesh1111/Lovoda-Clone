  import Button from "./Button";

const Quatity = ({ qty, decreamentCount, increamentCount }) => {
  return (
    <div>
      <div style={{marginLeft:"600px", display: "flex", gap: "1rem" }}>
        <Button onClick={decreamentCount}>-</Button>
        <div>
          <h4>{qty}</h4>
        </div>
        <Button onClick={increamentCount}>+</Button>
      </div>
    </div>
  );
};

export default Quatity;