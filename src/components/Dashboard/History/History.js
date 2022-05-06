import React from "react";
import { Table } from "react-bootstrap";
import useHistory from "../../../Hooks/useHistory";
import Loading from "../../Shared/Loading/Loading";

const History = () => {
  const [histories] = useHistory();

  return (
    <section>
      {histories ? (
        <Table className="zoom" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Email</th>
              <th>Task</th>
              <th>Book Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {histories.reverse().map((history, i) => (
              <tr key={i}>
                <td>#</td>
                <td>{history.email}</td>
                <td>{history.task}</td>
                <td>{history.bookName}</td>
                <td>On ({history.time})</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default History;
