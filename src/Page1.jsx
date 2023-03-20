export default function Page1() {
  return (
    <div id="Page1">
      <div id="Circlewrapper">
        <span className="CircleLayer">
          <h1>Portfolio
            <br />
            I like building web
          </h1>
          </span>
          <span className="OuterLayer"></span>
      </div>
    </div>
  );
}
function CircleLayer({ size, layer }) {
  return (
    <div
      style={{
        zIndex: layer,
        border: "16px solid",
        borderRadius: "50%",
        borderTop: " 16px solid #3498db",
        height: "30vh",
        width: "15vh",
        gridArea: "three",
      }}
    ></div>
  );
}
