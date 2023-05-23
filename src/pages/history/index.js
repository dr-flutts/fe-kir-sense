import axios from "axios";
import { useEffect, useState } from "react";
import { menuIcons } from "../../helpers/defaultValues";
import Container from "../../widgets/Container";
import Header from "../../widgets/Header";
import { TableHistory } from "./table";

const KirCamera = () => {

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    axios.get("https://be-kir-sense-production-dddf.up.railway.app/history")
      .then((res) => setHistory(res.data))
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      if (search.length > 0) {
        axios.get(`https://be-kir-sense-production-dddf.up.railway.app/history?plat=${search}`)
          .then((res) => {
            if (res.data === "") {
              setHistory([])
            } else {
              setHistory([res.data])
            }
          })
      } else {
        axios.get(`https://be-kir-sense-production-dddf.up.railway.app/history`)
          .then((res) => {
            setHistory(res.data)
          })
      }
    }
  }

  return (
    <Container>
      <Header label="History Pengujian" menu={menuIcons.HISTORY} showBackButton />
      <Container className="bg-secondary rounded-xl">
        <Container className="p-6 pt-0 text-black">
          <div className="flex justify-end w-full p-6 border-b-2 border-primary">
            <div className="h-7 bg-white w-7 rounded-l-xl flex items-center justify-center">
              <img src={require("../../assets/images/search.png")} alt="" width={20} style={{ opacity: "0.5" }} />
            </div>
            <input value={search} onChange={handleSearchChange} placeholder="BL 8647 JB" className="text-black rounded-r-xl h-7 px-2 focus:outline-none placeholder:center" onKeyDown={handleSearch} />
          </div>
          <div style={{ overflowY: "scroll", overflowX: "hidden", width: "100%", height: "100%", position: "relative" }}>
            <TableHistory history={history} />
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default KirCamera;
