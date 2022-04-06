const checkPermission = function (role, cb1, cb2) {
    if (role === 'ADMIN') {
      cb1();
    } else {
      cb2();
    }
  };




checkPermission(
  'ADMIN',
  function () {
    alert('ACCESS GRANTED');
  },
  function () {
    alert('ACCESS DENIED');
  }
);

const grant = function () {
  alert('ACCESS GRANTED');
};

const deny = function () {
  alert('ACCESS DENIED');
};

checkPermission('USER', grant, deny);