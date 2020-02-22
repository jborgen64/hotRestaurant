
const tables = [];
const waiting = [];

const res = {
  customerName: '',
  phoneNumber: '',
  customerEmail: '',
  customerID: '',
};

const getTables = function () {
  return $.ajax({
    url: '/api/tables',
    method: 'GET',
  });
};

// A function for saving a note to the db
const saveRes = function (res) {
  return $.ajax({
    url: '/api/tables',
    data: res,
    method: 'POST',
  });
};
