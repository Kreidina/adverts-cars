import PropTypes from "prop-types";

import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Button from "../Button";
import { useState } from "react";

const CatalogList = ({ adverts }) => {
  const [visible, setVisible] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const handelMore = () => {
    setVisible(visible + 8);
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className={css.container}>
        <Sidebar />
        <ul className={css.list}>
          {adverts.slice(0, visible).map((car) => (
            <CatalogItem key={car.id} car={car} />
          ))}
        </ul>

        {visible < adverts.length ? (
          <Button type="button" onClick={handelMore} className={css.btn}>
            Load more
          </Button>
        ) : (
          <div className={css.marg}></div>
        )}
      </div>
    </>
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
      favorite: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
