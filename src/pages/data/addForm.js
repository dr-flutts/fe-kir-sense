import axios from "axios";
import { Field, Form, Formik } from "formik";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const AddForm = () => {

  const hiddenForm = () => {
    document.getElementById("add-data").style.display = "none"
  }

  return (
    <div id="add-data" className="w-full h-full bg-secondary absolute flex items-center justify-center" style={{ display: "none" }}>
      <NotificationContainer />
      <div className="w-1/4 h-2/3 bg-white border border-primary px-6 py-4 flex justify-center items-center rounded-xl">
        <Formik
          initialValues={{
            plat: '',
            nama: '',
            tahun: 0,
          }}
          onSubmit={async (values) => {
            await axios.post("https://be-kir-sense-production-dddf.up.railway.app/data", values)
              .then((response) => {
                if (response.status === 201) {
                  NotificationManager.success("Berhasil menambah data", "Berhasil", 3000);
                } else {
                  NotificationManager.error("Gagal menambah data", "Gagal", 3000);
                }
              })
              .catch((err) => {
                NotificationManager.error(err.message, "Gagal", 3000);
              })
          }}
        >
          <Form className="flex flex-col gap-4 relative">
            <div style={{ top: "-30%", right: "-20%" }} className="bg-primary rounded-full h-10 w-10 absolute flex items-center justify-center" onClick={hiddenForm}>
              <img src={require("../../assets/images/arrow.png")} className="hover:opacity-70" alt=""/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="plat">Plat</label>
              <Field 
                className="focus:outline-none border border-primary rounded px-1"
                id="plat"
                name="plat"
                placeholder="BL 7846 LK"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nama">Nama</label>
              <Field 
                id="nama"
                name="nama"
                placeholder="BUDI" 
                className="focus:outline-none border border-primary rounded px-1"  
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tahun">Tahun</label>
              <Field
                id="tahun"
                name="tahun"
                placeholder="2024"
                type="number"
                className="focus:outline-none border border-primary rounded px-1"
              />
            </div>
            <button className="border border-primary rounded mt-6" type="submit">Tambah Data</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}