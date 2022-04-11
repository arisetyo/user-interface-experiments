/**
 * Carousel component
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.css';
import chevron from '../assets/chevron.png';

/**
* @param {object} props - Carousel props
* @param {string} props.title - Carousel title
* @returns {ReactComponent}
*/
const Carousel = ({ title, data }) => {

  const [currentCenter, setCurrentCenter] = useState(null);
  const [items, setItems] = useState([]);

  const lastPosition = items.length - 1;

  // On mount, load data
  useEffect( () => {
    // await setItems(data);
    setItems(data);

    // Move the first item into central position.
    // Without this, the second item will be shown instead,
    // so we simulate a navigation action of clicking the left navigation button
    // handleNav("L");
  }, []);

  /**
   * decide the style for carousel item's
   * @param {*} pos position of item
   * @returns
   */
  const itemStyle = pos => {
    switch(pos) {
      case 0: return styles.farleft;
      case 1: return styles.left;
      case 2: return styles.center;
      case 3: return styles.right;
      case 4: return styles.farright;
      default: return styles.hidden
    }
  };

  /**
   * set position for item in the array
   * @param {*} dir selected direction
   * @param {*} p position property of item
   * @returns
   */
  const newPosition = (dir, p) => {
    if (dir === "R") return p === 0 ? lastPosition : p - 1;
    if (dir === "L") return p === lastPosition ? 0 : p + 1;
  }

  /**
   * handle nav button click
   * @param {*} dir Direction of carousel movement
   */
  const handleNav = async dir => {
    const newArr = [...items].map( i => (
      {
        ...i,
        position: newPosition(dir, i.position)
      }
    ));

    // update state of which poster is currently in the center
    await setCurrentCenter(newArr.findIndex(o => o.position === 1));
    setItems(newArr);
  };

  /**
   * render the items
   */
  const RenderedItems = () => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`
          ${styles.itemContainer} 
          ${itemStyle(item.position)}
        `}
      >
        <div className={styles.albumCover}>
          <img
            src={item.cover}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.albumCopy}>
          <h2>{item.album}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.Carousel}>
      <h1>{title}</h1>

      {/* Main content */}
      <div className={styles.posterContainer}>
        {
          // Somehow needs to be declared as a function.
          // If declared as a component, the CSS transition won't work. (?)
          RenderedItems()
        }
      </div>

      {/* Navigation */}
      <div className={styles.navIndicator}>
        <div className={styles.dotContainer}>
          {items.map((_, index) => (
            <span
              key={`CarouselDot-${index}`}
              className={`${styles.dot} ${
                index === currentCenter ? styles.selected : ''
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className={styles.leftChevron}
        onClick={() => handleNav('L')}
      >
        <img src={chevron}/>
      </div>
      <div
        className={styles.rightChevron}
        onClick={() => handleNav('R')}
      >
        <img src={chevron}/>
      </div>
    </div>
  )
};

Carousel.propTypes = {
  title: PropTypes.string,
};

export const defaultProps = {
  title: 'Title',
};

Carousel.defaultProps = defaultProps;

export default Carousel;
 