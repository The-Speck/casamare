export const fetchHomes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/homes',
    error: (err) => console.log(err)
  });
};

export const fetchHome = (homeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/homes/${homeId}`,
    error: (err) => console.log(err)
  });
};
