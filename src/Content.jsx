const Content = () => {
  const parStyle = {
    fontFamily: "tahoma",
    fontSize: "1.1rem",
    textAlign: "justify",
  };
  return (
    <main>
      <h2 style={{ color: "white", backgroundColor: "red" }}>REACT JS</h2>
      <p style={parStyle}>React is JS library</p>

      <img
        src="https://cdn.pixabay.com/photo/2023/11/01/11/16/lake-8357182_1280.jpg"
        alt="nature"
      />
      <img
        src="https://cdn.pixabay.com/photo/2023/10/30/05/19/sunflowers-8351807_1280.jpg"
        alt=""
      />
      <p style={parStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
        distinctio.
      </p>

      <h4 style={parStyle}>Bu bir h4</h4>
    </main>
  );
};

export default Content;
