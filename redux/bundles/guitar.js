import { scales, tunings } from '../../constants/stuff'

const guitarReducer = (
  state = { scale: scales[0], tuning: tunings[0] },
  action
) => {
  switch (action.type) {
    case 'CHANGE_SCALE':
      return { ...state, scale: action.payload }
    case 'CHANGE_TUNING':
      return { ...state, tuning: action.payload }
    case 'CHANGE_KEY':
      return { ...state, key: action.payload }
    default:
      return state
  }
}

const changeScale = scale => ({
  type: 'CHANGE_SCALE',
  payload: scales.find(s => s.name == scale)
})

const changeTuning = tuning => ({
  type: 'CHANGE_TUNING',
  payload: tunings.find(s => s.name == tuning)
})

const changeKey = key => ({
  type: 'CHANGE_KEY',
  payload: key
})

export default guitarReducer

export { changeScale, changeTuning, changeKey }
