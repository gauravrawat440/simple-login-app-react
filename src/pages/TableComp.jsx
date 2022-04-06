import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import useFetch from "../customHooks/useFetch.js";
const TableComp = () => {
  const [users, setUsers] = useState();
  const { isLoading, serverError, apiData } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  useEffect(() => {
    setUsers(apiData?.length > 0 ? apiData : []);
  }, [apiData]);
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <table className="table">
          <tbody>
            {users?.length > 0
              ? users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.phone}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComp;
