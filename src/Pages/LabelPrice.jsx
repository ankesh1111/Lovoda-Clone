function LabelPrice({ label, price }) {
    return (
      <div>
        <div style={{ display: "flex", gap: "1rem" }}>{label}</div>
  
        <div>{price}</div>
      </div>
    );
  }
  export default LabelPrice;