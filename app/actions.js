import { typeValueAction } from 'app/utils'
/*
 * App actions
 */
export const APP_LOADING = 'APP_LOADING'
export const appLoading = typeValueAction(APP_LOADING)

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED'
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED)

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED'
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED)

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED'
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED)
/*
 * UI actions
 */
export const LOAD_ENTITIES = 'LOAD_ENTITIES'
export const loadEntities = typeValueAction(LOAD_ENTITIES)

export const EDIT_ENTITY_SUBMIT_BEGIN = 'EDIT_ENTITY_SUBMIT_BEGIN'
export const editEntitySubmitBegin = typeValueAction(EDIT_ENTITY_SUBMIT_BEGIN)

export const EDIT_ENTITY_SUBMIT_SUCCEED = 'EDIT_ENTITY_SUBMIT_SUCCEED'
export const editEntitySubmitSucceed = typeValueAction(EDIT_ENTITY_SUBMIT_SUCCEED)

export const EDIT_ENTITY_SUBMIT_FAILED = 'EDIT_ENTITY_SUBMIT_FAILED'
export const editEntitySubmitFailed = typeValueAction(EDIT_ENTITY_SUBMIT_FAILED)

export const UPDATE_ENTITY = 'UPDATE_ENTITY'
export const updateEntity = typeValueAction(UPDATE_ENTITY)

export const HANDLE_FILTER_BY = 'HANDLE_FILTER_BY'
export const handleFilterBy = typeValueAction(HANDLE_FILTER_BY)
/*
 * NOT used
 */
export const TOGGLE_EDITABLE = 'TOGGLE_EDITABLE'
export const toggleEditable = typeValueAction(TOGGLE_EDITABLE)

export const UPDATE_ACTIVE = 'UPDATE_ACTIVE'
export const updateActive = typeValueAction(UPDATE_ACTIVE)
