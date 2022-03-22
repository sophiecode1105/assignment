import TableRow from "./TableRow";
const TableContents = ({ userData }: { userData: [][] }) => {
  return (
    <div>
      {userData.map((user) => {
        return <TableRow rowData={user} />;
      })}
    </div>
  );
};

export default TableContents;
