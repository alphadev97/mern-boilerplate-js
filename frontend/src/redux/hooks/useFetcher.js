import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/sharedReducer";

const useFetcher = () => {
  const selectedUser = useSelector((state) => state.shared.user);

  const dispatch = useDispatch();

  const setSelectedUser = useCallback(
    (data) => {
      dispatch(setUser(data));
    },
    [dispatch]
  );

  return {
    selectedUser,
    setSelectedUser,
  };
};

export default useFetcher;
