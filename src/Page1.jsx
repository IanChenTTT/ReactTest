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
    <div className="CircleLayer"
    ></div>
  );
}
