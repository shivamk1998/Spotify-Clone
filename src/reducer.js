export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:"BQBtBZ-nIpWjyLJxQAL-khgg1e8vo4xvfJj2NWRmGxiu-YVYozKSOcelOkGYfbclkOrirnx7A2-M3a6PSUetoZHc2PmwEvYPW2tks5hIVczldIZw5QqSfO_TJvGhEdUXw1ljSjnhNSqulFYziBxH9SPch0z4dv0oxgmf8bRahKWcjY-UiIZbKe_0PrCNWFyBTu9CpNG03H8OS820K1E8"
};

const reducer = (state, action) => {
  console.log(action, "action");

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token:action.token
      }
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists
        }
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly
        }
    default:
      return state;
  }
};

export default reducer;
