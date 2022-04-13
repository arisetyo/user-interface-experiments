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
const Carousel = ({ data }) => {

  const [currentCenter, setCurrentCenter] = useState(2);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState({});

  const lastPosition = data.length - 1;

  // On mount, load data
  useEffect( () => {
    // Move the first item into central position.
    // Without this, another item will be shown instead.
    let z;
    let newData = [...data];

    // we do this twice because we are showing 2 items on the left
    // 1
    z = newData.pop();
    newData.unshift(z);
    // 2
    z = newData.pop();
    newData.unshift(z);

    // set the position
    newData = newData.map((i, index) => (
      {
        ...i,
        position: index
      }
    ));

    setItems(newData);
    setSelected(newData[2]);
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
  const handleNav = dir => {
    const newArr = [...items].map( i => (
      {
        ...i,
        position: newPosition(dir, i.position)
      }
    ));

    // update state of which poster is currently in the center
    // equals two because the center is 0 1 >2< 3 4
    let newCenter;
    let indexOfCenter = newArr.findIndex(o => o.position === 2);
    
    // adjust current center if number lower than 2
    if (indexOfCenter < 2) newCenter = newArr.length + indexOfCenter;
    else newCenter = indexOfCenter;
    
    setItems(newArr);
    setCurrentCenter(newCenter);
    setSelected(newArr[indexOfCenter]);
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
          <img src={item.cover}/>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.Carousel}>
      <div className={styles.headers}>
        <h1>Prince</h1>
        <h2>The Golden Era</h2>
      </div>

      {/* Covers */}
      <div className={styles.posterContainer}>
        {
          // Somehow needs to be declared as a function.
          // If declared as a component, the CSS transition won't work. (?)
          RenderedItems()
        }
      </div>

      {/* Description */}
      <div className={styles.albumDescription}>
        <h2>
          “{selected.album}”
        </h2>
        <h3>
          ({selected.year})
        </h3>
        <p>
          {selected.description}
        </p>
      </div>

      {/* Navigation indicator */}
      <div className={styles.navIndicator}>
        <div className={styles.dotContainer}>
          {items.map((_, index) => (
            <span
              key={`CarouselDot-${index}`}
              className={`
              ${styles.dot}
              ${
                // minus two because the actual image in the center has a  position of 2
                index === currentCenter - 2 ? styles.selected : ''
              }
              `}
            />
            ))}
        </div>
      </div>

      {/* Navigation */}
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
  data: PropTypes.array,
};

export const defaultProps = {
  data: [],
};
Carousel.defaultProps = defaultProps;

export default Carousel;
 