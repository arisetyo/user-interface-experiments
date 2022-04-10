/**
 * Template component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Template.css';

/**
* @param {object} props - Template props
* @param {string} props.title - Template title
* @returns {ReactComponent}
*/
const Template = ({ title }) => (
  <div className={styles.Template}>
    {title}
  </div>
);

Template.propTypes = {
  title: PropTypes.string,
};

export const defaultProps = {
  title: 'Title',
};

Template.defaultProps = defaultProps;

export default Template;
 