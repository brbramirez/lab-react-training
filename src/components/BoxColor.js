function BoxColor({ r, g, b }) {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      };
    return (
      <div className="p-3">
        <p style={divStyle} className="p-3 fw-bold">rgb({r}, {g}, {b})</p>
      </div>
    );
  }
  
  export default BoxColor;