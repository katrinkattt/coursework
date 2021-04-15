export function getId() {
  return {
    type: 'GET_ID',
    payload: {
      request: {
        url: 'search',
        method: 'get',
      },
    },
  };
}
export function getTickets(id) {
  return {
    type: 'GET_TICKETS',
    payload: {
      request: {
        url: 'tickets',
        method: 'get',
        params: {
          searchId: id,
        },
      },
    },
  };
}
