import React from "react";
import { useDispatch, useSelector } from "react-redux";
const Page404 = () => {
  const user = useSelector((state) => state.user);
  return <div>Page 404 + ${user.accessToken}</div>;
};

export default Page404;
