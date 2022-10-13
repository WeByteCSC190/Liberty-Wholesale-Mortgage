import Table from 'react-bootstrap/Table';
import AddRow from "../components/modals/AddRow";
const TableComponent = ({ data, column }) => {
  return (
    <div style={{ paddingLeft: 90, paddingRight: 90 }}>
      <h2>List of Borrowers</h2>
      <Table className="Table" responsive hover >
        
      <thead className="table-heading table-row">
      
        <tr>
            {column.map((item, index) =>
              <TableHeadItem item={item} />
            )}
        </tr>
      </thead>
      <tbody>
         {data.map((item, index) => <TableRow item={item} column={column} />)}
      </tbody>
      </Table>
      </div>
  );
}
const TableHeadItem = ({ item }) =>
  {
  if (item.heading === 'AddRow') {
    return (<th><AddRow /></th>);
      } else {
        return (<th>{`${item.heading}`}</th>);
      }
};

const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>
      }

      return <td>{item[`${columnItem.value}`]}</td>
    })}
  </tr>
)

export default TableComponent;