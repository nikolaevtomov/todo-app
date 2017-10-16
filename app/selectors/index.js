import { createSelector } from 'reselect'

export const getRoute = state => state.get('routing').locationBeforeTransitions.pathname

export const getPropsId = (state, props) => props.params.id
export const getFilterBy = state => state.get('filter')

export const isAppLoaded = state => (!state.getIn(['app', 'loading']) && !state.getIn(['app', 'failed']))
export const allEntities = state => state.get('entities')
export const activeEntity = state => state.get('active')

export const getEntityById = createSelector(
  [ allEntities, getPropsId, getFilterBy ],
  (entity, id, filter) => entity.get(Number.parseInt(id))
)

export const getEntityByFilter = createSelector(
  [ allEntities, getFilterBy ],
  (entity, filter) => (filter === '')
  ? entity
  : entity.filter(item => item.get('completed').toString() === filter)
)
