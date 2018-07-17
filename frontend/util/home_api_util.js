export const fetchHomes = (data) => {
  return $.ajax({
    method: 'GET',
    url: '/api/homes',
    data,
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

export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: '/api/homes',
    data: home,
    contentType: false,
    processData: false
  });
};

export const editHome = (home, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/homes/${home.id}`,
    data: home,
    contentType: false,
    processData: false
  });
};
