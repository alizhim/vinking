import React, { FC, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
  classname?: string,
  style?: React.CSSProperties,
  index: number,
  disabled?: boolean,
  children?: ReactNode
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { classname, style, index, disabled, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', classname, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      { children }
    </li>
  )
}

export default MenuItem


