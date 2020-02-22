//variables that will store data for tables and the wait list
const tables = [];
const waiting = [];


$("#submit").on("click", function{
    const
    const res1 = new Reservation()
})

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
