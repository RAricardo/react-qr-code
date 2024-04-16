import "./App.css";

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

const Card = () => {
  return (
    <div className="card">
      <div>
        <img
          className="qr"
          src={process.env.PUBLIC_URL + "/img/image-qr-code.png"}
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">
          Improve your front-end skills by building projects
        </h2>
        <h3 className="card-desc">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h3>
      </div>
    </div>
  );
};

export default App;
