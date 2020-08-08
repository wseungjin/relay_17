
const ReqMessage = (input) => {
    axios.get('백엔드주소', { params:input
  })
  .then(function (response) {
      return response.data;
  })
  .catch(function (error) {
      return error;
  })
}
export default ReqMessage;
