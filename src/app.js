import CARS from "./data.js";

const App = ((carsData) => {
  const ListOfProperties = ({ collectionOfDetails = {}, excludeKey }) => (
    <ul>
      {Object.keys(collectionOfDetails)
        .filter((key) => key !== excludeKey)
        .map((key, index) => (
          <li key={index} className="model__details">
            {key}: {collectionOfDetails[key]}
          </li>
        ))}
    </ul>
  );

  const CarTable = ({ dataModel = [] }) => (
    <table className="table__data">
      <tbody>
        {dataModel.map((brand) => (
          <React.Fragment key={brand.id}>
            <tr className="row__brand">
              <td colSpan="2">{brand.brand}</td>
            </tr>
            {brand.models.map((model) => (
              <React.Fragment key={model.id}>
                {model.collection.map((carEntity, index) => (
                  <tr key={carEntity.id}>
                    {index === 0 && (
                      <th
                        rowSpan={model.collection.length}
                        className="model__name"
                      >
                        {model.name}
                      </th>
                    )}
                    <td>
                      <ListOfProperties
                        collectionOfDetails={carEntity}
                        excludeKey="id"
                      />
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );

  return () => <CarTable dataModel={carsData} />;
})(CARS);

export default App;
