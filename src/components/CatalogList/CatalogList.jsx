import CatalogItem from "../CatalogItem/CatalogItem";
import PropTypes from "prop-types";

const CatalogList = ({ adverts, setCurrentPage }) => {
  console.log(adverts);
  const handelMore = () => {
    console.log(setCurrentPage);
  };
  return (
    <div>
      <ul>
        {adverts.map((car) => (
          <CatalogItem key={car.id} car={car} />
        ))}
      </ul>
      <button type="button" onClick={handelMore}>
        Load more
      </button>
    </div>
  );
};

export default CatalogList;

CatalogList.propTypes = {
  adverts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
      address: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      engineSize: PropTypes.string.isRequired,
      fuelConsumption: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      img: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      mileage: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
