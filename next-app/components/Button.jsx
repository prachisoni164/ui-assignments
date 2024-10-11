import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'; // Import the CSS module

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
Button.propTypes = { children: PropTypes.node, onClick: PropTypes.func }