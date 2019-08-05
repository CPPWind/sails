import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { wrapperShape } from '../../utils/prop-types'

export const TextBody = ({ children, className, ...props }) => (
  <section className={cx(className, styles.textBody)} {...props}>
    {children}
  </section>
)

TextBody.propTypes = {
  className: PropTypes.string,
  children: wrapperShape,
}

export const ImgBody = ({ className, ...props }) => (
  <img className={cx(className, styles.cardBody, styles.imgBody)} {...props} />
)

const DefaultWrapper = ({ className, children }) => (
  <li className={className}>{children}</li>
)

const DefaultWrapped = ({ className, name }) => (
  <span className={className}>{name}</span>
)

export const ListBody = ({
  className,
  collection,
  Wrapper = DefaultWrapper,
  Wrapped = DefaultWrapped,
}) => {
  const collected = collection.map(item => (
    <Wrapper key={`listBody-collection-item-${item.id}`} {...item}>
      <Wrapped {...item} />
    </Wrapper>
  ))

  return <ul className={className}>{collected}</ul>
}
CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
DefaultWrapped.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
}
DefaultWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ListBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Wrapper: wrapperShape,
  Wrapped: wrapperShape,
}
