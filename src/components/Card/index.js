import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { CardHeader } from './Header'
import { CardArticle } from './Article'

const Card = props => {
  const { className, Header, Article, children, theme, ...moreProps } = props

  return (
    <section className={cx(styles.card, className, styles[theme])}>
      <Header {...moreProps} className={styles.cardHeader} />
      <Article {...moreProps} className={styles.cardArticle}>
        {children}
      </Article>
    </section>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  Article: PropTypes.node,
  Header: PropTypes.node,
  children: PropTypes.node,
  theme: PropTypes.string,
}
Card.defaultProps = {
  theme: 'default',
  Header: CardHeader,
  Article: CardArticle,
}
export default Card
