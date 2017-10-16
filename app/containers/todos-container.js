import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Map } from 'immutable'

import { getFilterBy, getEntityByFilter } from 'app/selectors'
import { handleFilterBy } from 'app/actions'

import 'app/containers/_todos-container.scss'

class TodosContainer extends React.Component {
  constructor (props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleOnClick (id) {
    this.props.pushTo(`todo/edit/${id}`)
  }

  handleFilterChange (e) {
    this.props.filterBy(e.target.value)
  }

  render () {
    const { items, filter } = this.props

    const filterOptions = [
      {value: true, name: 'Completed'},
      {value: false, name: 'Not Completed'}
    ]

    return (
      <div className={'todos-container'}>
        <h4>Todo List</h4>
        <div className={'filter'}>
          <select className={'select'} onChange={this.handleFilterChange} value={filter}>
            <option className={'select__opt'} value={''}>Filter by</option>

            {filterOptions.map((option, key) => {
              return (
                <option
                  key={key}
                  className={'select__opt'}
                  value={option.value}>
                  {option.name}
                </option>
              )
            })}

          </select>
        </div>
        <ul className={'entities'}>

          {items.valueSeq().map(item =>
            <li
              className={`entities__item ${item.get('completed') ? 'completed' : 'notcompleted'}`}
              key={item.get('id')}
              onClick={() => this.handleOnClick(item.get('id'))}>
              {item.get('description')}
            </li>)}

        </ul>
      </div>
    )
  }
}

TodosContainer.propTypes = {
  items: PropTypes.instanceOf(Map),
  filter: PropTypes.string,
  filterBy: PropTypes.func
}

const mapStateToProps = state => ({
  items: getEntityByFilter(state),
  filter: getFilterBy(state)
})

const mapDispatchToProps = {
  pushTo: push,
  filterBy: handleFilterBy
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
