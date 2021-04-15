export function getResponse(action = {}) {
  if (!!action.payload) {
    if (!!action.payload.data) {
      return action.payload.data;
    }
    return action.payload;
  }
  return {};
}

export function getError(action = {}) {
  if (!!action.error) {
    if (!!action.error.response) {
      return action.error.response.data.message;
    }
    return 'Неизвестная ошибка, проверьте подключение к интернету.';
  }
  return '';
}
