import axios from "axios";
import { useEffect, useState } from "react";
import { menuIcons } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";
import { AddForm } from "./addForm";
import { TableData } from "./table";

const Data = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("https://be-kir-sense-production-dddf.up.railway.app/data")
      .then((res) => setData(res.data))
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const showForm = () => {
    document.getElementById("add-data").style.display = "flex"
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (search.length > 0) {
        axios.get(`https://be-kir-sense-production-dddf.up.railway.app/data?plat=${search}`)
          .then((res) => {
            if (res.data === "") {
              setData([])
            } else {
              setData([res.data])
            }
          })
      } else {
        axios.get(`https://be-kir-sense-production-dddf.up.railway.app/data`)
          .then((res) => {
            setData(res.data)
          })
      }
    }
  }

  return (
    <Container className="relative">
      <Header label="Data Kir" menu={menuIcons.DATA} showBackButton />
      <Container className="bg-secondary rounded-xl">
        <Container className="p-6 pt-0 text-black">
          <div className="flex flex-row-reverse">
            <div className="flex justify-end w-full p-6 border-b-2 border-primary">
              <div className="h-7 bg-white w-7 rounded-l-xl flex items-center justify-center">
                <img src={require("../../assets/images/search.png")} alt="" width={20} style={{ opacity: "0.5" }} />
              </div>
              <input value={search} onChange={handleSearchChange} placeholder="BL 8647 JB" className="text-black rounded-r-xl h-7 px-2 focus:outline-none placeholder:center" onKeyDown={handleSearch} />
            </div>
            <div className="flex justify-start w-full p-6 border-b-2 border-primary">
              <div className="h-7 flex gap-2 items-center justify-center p-4 bg-white border-2 border-primary rounded-xl">
                <img src={require("../../assets/images/add-data2.png")} alt="" width={20} style={{ opacity: "0.5" }} />
                <button onClick={showForm}>Tambah data</button>
              </div>
            </div>
          </div>
          <div style={{ overflowY: "scroll", overflowX: "hidden", width: "100%", height: "100%", position: "relative", display: "flex", justifyContent: "center" }}>
            <TableData data={data} />
            <AddForm />
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Data;