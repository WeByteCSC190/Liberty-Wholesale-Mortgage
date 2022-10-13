import Table from 'react-bootstrap/Table';
import AddRow from "../components/modals/AddRow";
const TableComponent = ({ page, data, column }) => {
  let pageName = page
  return (
    <div style={{ paddingLeft: 90, paddingRight: 90 }}>
      
      <Table className="Table" responsive hover >
      <thead>
      <tr className="table-title">List of {pageName}</tr>
      <tr className="table-heading">
            {column.map((item, index) =>
              <TableHeadItem item={item} />
            )}
        </tr>
      </thead>
      <tbody>
         {data.map((item, index) => <TableRow item={item} column={column} />)}
      </tbody>
      <tr className="last-table-row">
        Showing {data.length} out of {data.length} results 
        </tr>
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