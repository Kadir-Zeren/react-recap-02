import "./Content.css";
import mountain from "./img/mountain.jpg";
const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };

  const imgStyle = {
    borderRadius: "20px",
    width: "400px",
    cursor: "pointer",
    display: "block",
    margin: "auto",
  };
  return (
    <main>
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React is JS library</p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/11/01/11/16/lake-8357182_1280.jpg"
        alt="nature"
      />
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2023/10/30/05/19/sunflowers-8351807_1280.jpg"
        alt=""
      />

      <img src={mountain} alt="mountain" style={imgStyle} />

      <img src="./assets/lion.jpg" style={imgStyle} alt="" />

      <p style={parStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
        distinctio.
      </p>

      <h4 style={parStyle}>Bu bir h4</h4>

      <h3 className="content-h3">Bu bir h3 elementtir</h3>
    </main>
  );
};

export default Content;
