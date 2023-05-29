import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import "./CDMStyle.css";
import axios from "axios";
// import ReactDOM from "react-dom/client";
import AddData from "../components/AddData";
// import { useNavigate } from "react-router-dom";

interface cdmProps {
  mode: "add" | "modify" | "view";
}

const CDMPage: React.FC<cdmProps> = ({ mode }) => {
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

  const viewData = () => {
    const [dataz, setDatas] = useState([]);
    useEffect(() => {
      const fetchAllDatas = async () => {
        try {
          const res = await axios.get("http://localhost:8800/data");
          setDatas(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllDatas();
    }, []);
    return dataz;
  };

  if (mode == "view") {
    var datas = viewData();
    datas = viewData();
    return (
      <div className="enclosure">
        {/* <form> */}
        <div className="left">
          <label htmlFor="namev">Name:</label>
          <input type="text" id="namev" />
          <label htmlFor="phnv">Ph.No:</label>
          <input type="number" id="phnv" />
          <label htmlFor="emailv">Email: </label>
          <input type="email" id="emailv" />
          <label htmlFor="productv">Product:</label>
          <input type="text" id="productv" />
        </div>
        <div className="right">
          <label htmlFor="cityv">City</label>
          <input type="text" id="cityv" />
          <label htmlFor="countryv">Country:</label>
          <input type="text" id="countryv" />
          <label htmlFor="remarksv">Remarks:</label>
          <textarea id="remarksv" cols={30} rows={1}></textarea>
          <label htmlFor="expiryv">Expiry:</label>
          <input type="date" id="expiryv" />
        </div>
        {/* </form> */}
        <div className="btngrp">
          <button id="submit">SHOW</button>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (mode == "add") {
    {
      <AddData />;
    }
  } else if (mode == "modify") {
    return (
      <div className="enclosure">
        {/* <form> */}
        <div className="left">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="phn">Ph.No:</label>
          <input type="number" id="phn" />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" />
          <label htmlFor="product">Product:</label>
          <input type="text" id="product" />
        </div>
        <div className="right">
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" />
          <label htmlFor="remarks">Remarks:</label>
          <textarea id="remarks" cols={30} rows={1}></textarea>
          <label htmlFor="expiry">Expiry:</label>
          <input type="date" id="expiry" />
        </div>
        {/* </form> */}
        <div className="btngrp">
          <button id="filter">FILTER</button>
          <button id="submit">MODIFY</button>
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
  } else {
    return <></>;
  }
};

export default CDMPage;
