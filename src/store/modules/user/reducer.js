import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

/**
 *
 * @param {Object} state
 * @param {Object} action dentro existe o objeto payload da action
 */
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
