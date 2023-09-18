import App from "./app.js";

(function () {
  const domContainer = document.querySelector("#root");
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />);
})();
