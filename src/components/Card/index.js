import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import themes from './themes.module.css'
import { CardHeader } from './Header'
import { CardBody } from './Body'
import { CardFooter } from './Footer'
import { wrapperShape } from '../../utils/prop-types'

export * from './Body'

const Card = props => {
  const {
    className,
    title,
    Wrapper,
    wrapperProps,
    Header,
    Footer,
    headerProps,
    footerProps,
    Body,
    children,
    theme,
    border,
    ...bodyProps
  } = props

  return (
    <Wrapper
      className={cx(
        styles.card,
        className,
        themes[theme],
        border && styles.cardBorder,
      )}
      {...wrapperProps}
    >
      <Header title={title} {...headerProps} className={styles.cardHeader} />
      <Body {...bodyProps} className={styles.cardBody}>
        {children}
      </Body>
      <Footer {...footerProps} className={styles.cardFooter} />
    </Wrapper>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  Wrapper: wrapperShape,
  wrapperProps: PropTypes.object,
  Header: wrapperShape,
  headerProps: PropTypes.object,
  Body: wrapperShape,
  Footer: wrapperShape,
  footerProps: PropTypes.object,
  theme: PropTypes.string,
  border: PropTypes.bool,
}
Card.defaultProps = {
  theme: 'default',
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
  Wrapper: 'article',
  border: true,
  children: null,
}
export default Card
