import Api from '../api/dataApi'

const fetchData = () => async dispatch => {
  const response = await Api.get("/users");
  dispatch({ type: "FETCH_DATA", payload: response.data });
  // console.log('eeeee', response)
};
export default fetchData;