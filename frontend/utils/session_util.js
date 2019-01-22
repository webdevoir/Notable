export const signupAjax = user => (
  $.ajax({
     method: "POST",
     url: "/api/users",
     data: {user}
  })
);

export const loginAjax = user => (
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user}
  })
);

export const logoutAjax = () => (
  $.ajx({
    method: "DELETE",
    url: "/api/session"
  })
);