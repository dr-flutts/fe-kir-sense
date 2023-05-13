import Table from 'react-bootstrap/Table';



export const TableHistory = ({history}) => {

  return (
    <Table striped bordered hover style={{ position: "absolute", width: "100%", margin: "2rem" }}>
      <thead style={{ borderBottom: "10px solid transparent" }}>
        <tr>
          <th style={{fontSize: "22px"}}>No</th>
          <th style={{fontSize: "22px"}}>Nomor Polisi</th>
          <th style={{fontSize: "22px"}}>Nama Pemilik</th>
          <th style={{fontSize: "22px"}}>Masa Uji Berlaku</th>
          <th style={{fontSize: "22px"}}>Kondisi</th>
          <th style={{fontSize: "22px"}}>Tanggal Scan</th>
        </tr>
      </thead>
      <tbody>
        {history.map((data, i) => {
          return (
            <tr key={data._id} style={{ borderBottom: "5px solid transparent" }}>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{i + 1}</td>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{data.plat}</td>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{data.nama}</td>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{data.tahun}</td>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{data.kondisi}</td>
              <td style={{fontSize: "19px", textAlign: "center", color: "gray"}}>{data.tanggal && new Date(data.tanggal).toISOString().slice(0, 10)}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}