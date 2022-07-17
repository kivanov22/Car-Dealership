import React from "react";
import styles from "../NewestCars/NewestCars.module.css";
import car from '../../../assets/img/product-2-720x480.jpg'

function NewestCars() {
  return (
    <section className={styles['section-new-cars']}>
      <h2>Newest Cars:</h2>

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.wrapper}>
            <div className={styles['featured-car']}>
              <div className={styles.thumb}>
                <div className={styles['thumb-img']}>
                  <img src={car} alt="" />
                </div>
                <div className={styles['overlay-content']}>
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-dashboard"></i> 130 000km
                  </strong>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cube"></i> 1800 cc
                  </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cog"></i> Manual
                  </strong>
                </div>
              </div>
              <div className={styles['down-content']}>
                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                <br />

                <p className={styles['container-text']}>190 hp / Petrol / 2008 / Used vehicle</p>

                <p className={styles['container-text']}>
                  <span className={styles['price-span']}>
                    <del>
                      <sup>$</sup>11999.00{" "}
                    </del>{" "}
                    <strong className={styles['strong-fields']}>
                      <sup>$</sup>11779.00
                    </strong>
                  </span>
                </p>

                <div className={styles['text-button']}>
                  <a href="car-details.html" className={styles.details}>Details</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.wrapper}>
            <div className={styles['featured-car']}>
              <div className={styles.thumb}>
                <div className={styles['thumb-img']}>
                  <img src={car} alt="" />
                </div>
                <div className={styles['overlay-content']}>
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-dashboard"></i> 130 000km
                  </strong>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cube"></i> 1800 cc
                  </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong className={styles['strong-fields']}>
                    <i className="fa fa-cog"></i> Manual
                  </strong>
                </div>
              </div>
              <div className={styles['down-content']}>
                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                <br />

                <p className={styles['container-text']}>190 hp / Petrol / 2008 / Used vehicle</p>

                <p className={styles['container-text']}>
                  <span className={styles['price-span']}>
                    <del>
                      <sup>$</sup>11999.00{" "}
                    </del>{" "}
                    <strong className={styles['strong-fields']}>
                      <sup>$</sup>11779.00
                    </strong>
                  </span>
                </p>

                <div className={styles['text-button']}>
                  <a href="car-details.html" className={styles.details}>Details</a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.wrapper}>
            <div className={styles['featured-car']}>
              <div className={styles.thumb}>
                <div className={styles['thumb-img']}>
                  <img src={car} alt="" />
                </div>
                <div className={styles['overlay-content']}>
                  <strong>
                    <i className="fa fa-dashboard"></i> 130 000km
                  </strong>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>
                    <i className="fa fa-cube"></i> 1800 cc
                  </strong>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <strong>
                    <i className="fa fa-cog"></i> Manual
                  </strong>
                </div>
              </div>
              <div className={styles['down-content']}>
                <h4>Lorem ipsum dolor sit amet, consectetur</h4>

                <br />

                <p className={styles['container-text']}>190 hp / Petrol / 2008 / Used vehicle</p>

                <p className={styles['container-text']}>
                  <span className={styles['price-span']}>
                    <del>
                      <sup>$</sup>11999.00{" "}
                    </del>{" "}
                    <strong>
                      <sup>$</sup>11779.00
                    </strong>
                  </span>
                </p>

                <div className={styles['text-button']}>
                  <a href="car-details.html" className={styles.details}>Details</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default NewestCars;
