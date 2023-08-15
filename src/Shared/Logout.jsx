const Logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export default Logout;
