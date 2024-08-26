// components/Table.js
const Table = ({ data }) => {
    return (
      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>ID</th>
              <th style={headerStyle}>Title</th>
              <th style={headerStyle}>Auther</th>
              <th style={headerStyle}>Likes</th>
              <th style={headerStyle}>COntent</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} style={rowStyle}>
                <td style={cellStyle}>{row._id}</td>
                <td style={cellStyle}>{row.title}</td>
                <td style={cellStyle}>{row.author}</td>
                <td style={cellStyle}>{row.likes}</td>
                <td style={cellStyle}>{row.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  // Inline styles
  const tableContainerStyle = {
    overflowX: 'auto',
    margin: '1rem 0',
  };
  
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
  
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '0.5rem',
    textAlign: 'left',
  };
  
  const rowStyle = {
    borderBottom: '1px solid #ddd',
  };
  
  const cellStyle = {
    padding: '0.5rem',
  };
  
  export default Table;
  