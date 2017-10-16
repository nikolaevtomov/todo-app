import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { getRoute } from 'app/selectors'
import NavItem from 'app/components/nav-item'
import 'app/components/_navigation.scss'

export const Navigation = ({ pathName }) => {
  const items = [
    { name: 'Todos', link: '/' },
    { name: 'Add', link: '/todo/add' }
  ]

  let classes = item => classNames({
    'nav__item': true,
    active: (pathName === item)
  })

  return (
    <nav>
      <ul className={'nav'}>
        {items.map((item, i) =>
          (<NavItem key={i} classes={classes(item.link)} to={item.link} name={item.name} />))
        }
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  pathName: getRoute(state)
})

export default connect(mapStateToProps)(Navigation)
