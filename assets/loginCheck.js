// 로그인 확인 api (로그인 상태 자체만을 확인)

function getSelf(callback) {
  $.ajax({
    type: 'GET',
    url: '/api/auth',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    success: function (response) {
      callback(response.user);
    },
    error: function (xhr, status, error) {
      console.log(xhr, status, error);
      if (status == 401 || error == 'Unauthorized') {
        alert('로그인이 필요합니다.');
      } else {
        localStorage.clear();
        alert('알 수 없는 문제가 발생했습니다. 관리자에게 문의하세요.');
      }
      window.location.replace('/api/login');
    },
  });
}
