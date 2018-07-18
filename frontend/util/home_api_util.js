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
    url: `/api/homes/${id}`,
    data: home,
    contentType: false,
    processData: false
  });
};

export const deleteHome = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/homes/${id}`,
    error: err => console.log
  });
};
