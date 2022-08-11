import { Link } from 'react-router-dom';
import styles from '../CatalogItem/CatalogItem.module.css'

const CatalogItem = ({ car }) => {
    return (
        <div className={styles["cars-container"]}>
        <div className={styles["car-img"]}>
          <img src={car.imageUrl} alt=""  className={styles.carImage} />
        </div>
        <div className={styles.desc}>
          <p className={styles["car-title"]}>{car.make} {car.model}</p>
          <p>Price: {car.price}$</p>
          <p>
            {car.year} / Fuel: {car.fuel} / Gearbox: {car.gearbox}/ Doors:{car.doors} /
          </p>
          <button className={styles.detailsBtn}>
          <Link className={styles.detailsBtnLink} to={`/details/${car.id}`}>Details</Link>
          </button>
        </div>
      </div>
    );
};

export default CatalogItem;

