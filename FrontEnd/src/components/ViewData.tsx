import axios from "axios";
import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import ReactDOM from "react-dom/client";

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
  const [dataz, setDatas] = useState([]);
  const viewData = (cond = "") => {
    useEffect(() => {
      const fetchAllDatas = async () => {
        try {
          const res = await axios.get("http://localhost:8800/data");
          setDatas(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      const fetchFewDatas = async () => {
        try {
          const res = await axios.get("http://localhost:8800/data/" + cond);
          setDatas(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      cond == "" ? fetchAllDatas() : fetchFewDatas;
    }, []);
    return dataz;
  };

  const [data, setData] = useState({
    name: "",
    phno: "",
    email: "",
    product: "",
    city: "",
    country: "",
    remarks: "",
    expiry: "",
  });
  //   const [error, setError] = useState(false);
  var cond = "";
  const handleChange = (e: ChangeEvent) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: MouseEvent) => {
    e.preventDefault();
    console.log(data);
    if (
      data.name == "" &&
      data.phno == "" &&
      data.email == "" &&
      data.product == "" &&
      data.city == "" &&
      data.country == "" &&
      data.expiry.toString() == ""
    ) {
      cond = "";
    } else {
      for (var i in data) {
        cond += i.toString() + "=" + data[i].toString() + " AND ";
      }
      cond = cond.substr(0, cond.length - 5);
    }
    const datas = viewData(cond);
    ReactDOM.createRoot(
      document.getElementsByTagName("tbody")[0] as HTMLElement
    ).render(
      <>
        {datas.map((data: dataObj) => (
          <tr key={data.id.toString()}>
            <td>{data.id.toString()}</td>
            <td>{data.name}</td>
            <td>{data.phno}</td>
            <td>{data.email}</td>
            <td>{data.product}</td>
            <td>{data.expiry}</td>
            <td>
              {data.city},{data.country}
            </td>
            <td>{data.remarks}</td>
          </tr>
        ))}
      </>
    );
  };

  const datas = viewData();
  return (
    <div className="enclosure">
      <div className="left">
        <label htmlFor="namea">Name:</label>
        <input type="text" id="namea" onChange={handleChange} name="name" />
        <label htmlFor="phna">Ph.No:</label>
        <input type="number" id="phna" onChange={handleChange} name="phno" />
        <label htmlFor="emaila">Email: </label>
        <input type="email" id="emaila" onChange={handleChange} name="email" />
        <label htmlFor="producta">Product:</label>
        <input
          type="text"
          id="producta"
          onChange={handleChange}
          name="product"
        />
      </div>
      <div className="right">
        <label htmlFor="citya">City</label>
        <input type="text" id="citya" onChange={handleChange} name="city" />
        <label htmlFor="countrya">Country:</label>
        <input
          type="text"
          id="countrya"
          onChange={handleChange}
          name="country"
        />
        <label htmlFor="remarksa">Remarks:</label>
        <textarea
          id="remarksa"
          cols={30}
          rows={1}
          onChange={handleChange}
          name="remarks"
        ></textarea>
        <label htmlFor="expirya">Expiry:</label>
        <input type="date" id="expirya" onChange={handleChange} name="expiry" />
      </div>
      <div className="btngrp">
        <button id="submit" onClick={handleClick}>
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewData;
