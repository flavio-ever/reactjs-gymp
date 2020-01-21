import produce from 'immer';

const INITIAL_STATE = {
  students: null,
};

/**
 *
 * @param {Object} state
 * @param {Object} action dentro existe o objeto payload da action
 */
export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@students/STUDENTS_FIND_SUCCESS': {
        draft.students = action.payload.students;
        break;
      }
      case '@students/STUDENTS_FIND_FAILURE': {
        draft.students = null;
        break;
      }
      default:
    }
  });
}
