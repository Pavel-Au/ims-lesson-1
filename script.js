(function () {
  var domContainer = document.querySelector("#root");
  var root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(App, null));
})();