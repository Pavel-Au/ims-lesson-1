var App = function (carsData) {
  var ListOfProperties = function ListOfProperties(_ref) {
    var _ref$collectionOfDeta = _ref.collectionOfDetails,
        collectionOfDetails = _ref$collectionOfDeta === undefined ? {} : _ref$collectionOfDeta,
        excludeKey = _ref.excludeKey;
    return React.createElement(
      "ul",
      null,
      Object.keys(collectionOfDetails).filter(function (key) {
        return key !== excludeKey;
      }).map(function (key, index) {
        return React.createElement(
          "li",
          { key: index, className: "model__details" },
          key,
          ": ",
          collectionOfDetails[key]
        );
      })
    );
  };

  var CarTable = function CarTable(_ref2) {
    var _ref2$dataModel = _ref2.dataModel,
        dataModel = _ref2$dataModel === undefined ? [] : _ref2$dataModel;
    return React.createElement(
      "table",
      { className: "table__data" },
      React.createElement(
        "tbody",
        null,
        dataModel.map(function (brand) {
          return React.createElement(
            React.Fragment,
            { key: brand.id },
            React.createElement(
              "tr",
              { className: "row__brand" },
              React.createElement(
                "td",
                { colSpan: "2" },
                brand.brand
              )
            ),
            brand.models.map(function (model) {
              return React.createElement(
                React.Fragment,
                { key: model.id },
                model.collection.map(function (carEntity, index) {
                  return React.createElement(
                    "tr",
                    { key: carEntity.id },
                    index === 0 && React.createElement(
                      "th",
                      {
                        rowSpan: model.collection.length,
                        className: "model__name"
                      },
                      model.name
                    ),
                    React.createElement(
                      "td",
                      null,
                      React.createElement(ListOfProperties, {
                        collectionOfDetails: carEntity,
                        excludeKey: "id"
                      })
                    )
                  );
                })
              );
            })
          );
        })
      )
    );
  };

  return function () {
    return React.createElement(CarTable, { dataModel: carsData });
  };
}(CARS);