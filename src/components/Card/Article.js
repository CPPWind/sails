import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

export const CardArticle = ({ className, children }) => (
  <article className={cx(styles.cardArticle, className)}>{children}</article>
)

const DefaultWrapper = ({ className, children }) => <li className={className}>{children}</li>

const DefaultWrapped = ({ className, name }) => <span className={className}>{name}</span>

export const ListArticle = ({ className, collection, Wrapper = DefaultWrapper, Wrapped = DefaultWrapped }) => {
  const collected = collection.map(item => (
    <Wrapper key={`listArticle-collection-item-${item.id}`} {...item}>
      <Wrapped {...item} />
    </Wrapper>
  ))

  return <ul className={className}>{collected}</ul>
}
CardArticle.propTypes = {
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

ListArticle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Wrapper: PropTypes.node,
  Wrapped: PropTypes.node,
}
