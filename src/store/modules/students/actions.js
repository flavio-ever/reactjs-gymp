export function studentsFindRequest(page, perPage, name) {
  return {
    type: '@students/STUDENTS_FIND_REQUEST',
    payload: { page, perPage, name },
  };
}

export function studentsFindSuccess(students) {
  return {
    type: '@students/STUDENTS_FIND_SUCCESS',
    payload: { students },
  };
}

export function studentsFindFailure() {
  return {
    type: '@students/STUDENTS_FIND_FAILURE',
  };
}
