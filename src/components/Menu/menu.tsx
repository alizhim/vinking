import React, { FC, ReactNode, createContext, useState } from 'react'
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical'
type onSelectCallback = (selectedIndex: number) => void
export interface MenuProps {
  classname?: string,
  style?: React.CSSProperties,
  defaultIndex?: number
  mode?: MenuMode
  onSelect?: onSelectCallback
  children?: ReactNode
}

export interface IMenuContext {
  index: number,
  onSelect?: onSelectCallback
}
export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: FC<MenuProps> = (props) => {
  const { classname, style, mode, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('viking-menu', classname, {
    'is-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        { children }
     </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
