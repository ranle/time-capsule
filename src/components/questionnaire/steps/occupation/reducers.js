const initialUIState = {
  isCompanyTypeShowing: false,
  isHappinessShowing: false,
  isOptionsModalShowing: false,
  optionsModalContent: null,
}

const occupationsUIReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SHOW_COMPANY_TYPE':
      return {
        ...state,
        isCompanyTypeShowing: true,
      }
    case 'TOGGLE_MODAL_ON':
      return {
        ...state,
        isOptionsModalShowing: true,
        optionsModalContent: payload.modal,
      }
    case 'TOGGLE_MODAL_OFF':
      return {
        ...state,
        isOptionsModalShowing: false,
        optionsModalContent: null,
      }
    case 'RESET':
      return initialUIState
    default:
      return state
  }
}

export { initialUIState, occupationsUIReducer }
