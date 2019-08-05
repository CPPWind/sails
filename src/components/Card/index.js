import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import { CardHeader } from './Header'
import { CardBody } from './Body'
import { CardFooter } from './Footer'
import { wrapperShape } from '../../utils/prop-types'

export const bodyClassName = styles.cardBody
export * from './Body'

const Card = props => {
  const {
    className,
    Wrapper,
    Header,
    Body,
    Footer,
    children,
    theme,
    border,
    ...moreProps
  } = props

  return (
    <Wrapper
      className={cx(
        styles.card,
        className,
        styles[theme],
        border && styles.cardBorder,
      )}
    >
      <Header {...moreProps} className={styles.cardHeader} />
      <Body {...moreProps} className={styles.cardBody}>
        {children}
      </Body>
      <Footer />
    </Wrapper>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  Body: wrapperShape,
  Footer: wrapperShape,
  Header: wrapperShape,
  theme: PropTypes.string,
  Wrapper: wrapperShape,
  children: PropTypes.node,
  border: PropTypes.bool,
}
Card.defaultProps = {
  theme: 'default',
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
  Wrapper: 'article',
  border: true,
}
export default Card
