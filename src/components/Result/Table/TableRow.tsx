const TableRow = ({ rowData }: { rowData: (string | number)[] }) => {
  let [name, foxTrot, golf] = rowData;
  foxTrot = (foxTrot as number).toPrecision(5);
  golf = (golf as number).toPrecision(5);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          fontSize: "24px",
          minHeight: "200px",
          border: "1px solid green",
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "24px",
          minHeight: "200px",
          border: "1px solid green",
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {foxTrot}
      </div>
      <div
        style={{
          fontSize: "24px",
          minHeight: "200px",
          border: "1px solid green",
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {golf}
      </div>
    </div>
  );
};

export default TableRow;
