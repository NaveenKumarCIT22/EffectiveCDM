import axios from "axios";
import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
// import ReactDOM from "react-dom/client";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
// import "../pages/CDMStyle.css";

interface dataObj {
  id: Number;
  name: string;
  phno: string;
  email: string;
  product: string;
  city: string;
  country: string;
  remarks: string;
  expiry: string;
}

const ViewData = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    //asyc cannot be used inside useEffect so promise
    axios
      .get("http://localhost:8800/data")
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        setTableData(...data);
      });

    // the above code will fetch every data from backend
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      phno: "",
      email: "",
      product: "",
      country: "",
      remarks: "",
      expiry: "",
    },
    onSubmit: async (values, action) => {
      //this will return your values handle the form values here
      var cond = "";
      if (!Object.keys(values).every((key) => values[key] == "")) {
        for (var i in values) {
          cond += i.toString() + "=" + values[i].toString() + " AND ";
        }
        cond = cond.substr(0, cond.length - 5);
      }
      if (cond == "") {
        try {
          const res = await axios.get("http://localhost:8800/data");
          setTableData([...res.data]);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const res = await axios.get("http://localhost:8800/data/" + cond);
          setTableData([...res.data]);
        } catch (err) {
          console.log(err);
        }
      }
      action.resetForm();
    },
  });
  return (
    <div className="enclosure">
      <form onSubmit={formik.handleSubmit}>
        <div className="left">
          <label htmlFor="namea">Name:</label>
          <input
            type="text"
            id="namea"
            onChange={formik.handleChange}
            name="name"
          />
          <label htmlFor="phna">Ph.No:</label>
          <input
            type="number"
            id="phna"
            onChange={formik.handleChange}
            name="phno"
          />
          <label htmlFor="emaila">Email: </label>
          <input
            type="email"
            id="emaila"
            onChange={formik.handleChange}
            name="email"
          />
          <label htmlFor="producta">Product:</label>
          <input
            type="text"
            id="producta"
            onChange={formik.handleChange}
            name="product"
          />
        </div>
        <div className="right">
          <label htmlFor="citya">City</label>
          <input
            type="text"
            id="citya"
            onChange={formik.handleChange}
            name="city"
          />
          <label htmlFor="countrya">Country:</label>
          <input
            type="text"
            id="countrya"
            onChange={formik.handleChange}
            name="country"
          />
          <label htmlFor="remarksa">Remarks:</label>
          <textarea
            id="remarksa"
            cols={30}
            rows={1}
            onChange={formik.handleChange}
            name="remarks"
          ></textarea>
          <label htmlFor="expirya">Expiry:</label>
          <input
            type="date"
            id="expirya"
            onChange={formik.handleChange}
            name="expiry"
          />
        </div>
        <div className="btngrp">
          <button id="submit" type="submit">
            SHOW
          </button>
          <button id="print">PRINT</button>
        </div>
        <div className="dataarea">
          <table id="datatable">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Product</th>
                <th>Expiry</th>
                <th>City</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((table) => (
                <tr key={table.id.toString()}>
                  {Object.keys(table).map((val) => (
                    <td key={uuid()}>{table[val]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default ViewData;
