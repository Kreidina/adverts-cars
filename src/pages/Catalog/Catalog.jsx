import { useEffect } from "react";
import { useState } from "react";
import { fetchCars } from "../../servises/apiCars";
import CatalogList from "../../components/CatalogList/CatalogList";

const Catalog = () => {
  const [adverts, setAdverts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const cars = fetchCars(currentPage);
    cars.then((car) => {
      setAdverts(car);
    });
  }, [currentPage]);

  return (
    <div>
      <CatalogList adverts={adverts} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Catalog;
