export default ownerId => (
  $.ajax({
    method: 'get',
    url: `/api/users/${ownerId}`
  })
);
