export const fetchHomes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/homes',
    error: (err) => console.log(err)
  });
};
