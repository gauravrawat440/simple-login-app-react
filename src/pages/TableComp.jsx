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
        <div className="card">
          <div className="card-body">
            <table className="table table-success">
              <thead>
                <tr>
                  <th className="text-left" scope="col">
                    #
                  </th>
                  <th className="text-left" scope="col">
                    Name
                  </th>
                  <th className="text-left" scope="col">
                    UserName
                  </th>
                  <th className="text-left" scope="col">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.length > 0
                  ? users.map((user, i) => {
                      return (
                        <tr key={user.id}>
                          <td className="text-left">{i + 1}</td>
                          <td className="text-left">{user?.name}</td>
                          <td className="text-left">{user?.email}</td>
                          <td className="text-left">{user?.phone}</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComp;
