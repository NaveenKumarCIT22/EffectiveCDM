import axios from "axios";
import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
// import ReactDOM from "react-dom/client";
import { useFormik } from "formik";
import { basicSchema } from "../validationSchema.js";

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

const usr = sessionStorage.getItem("ActiveUsr");

const ModifyData = () => {
  const [tableData, setTableData] = useState([]);
  //   const [elem, setElem] = useState("");
  const [cond, setCond] = useState("");
  var conds = "";
  //   var elem = "";
  const formik = useFormik({
    validationSchema: basicSchema,
    validateOnChange: true,
    validateOnBlur: false,
    validateOnMount: false,
    initialValues: {
      name: "",
      phno: "",
      email: "",
      product: "",
      city: "",
      country: "",
      remarks: "",
      expiry: "",
    },
    onSubmit: async (values, action) => {
      //this will return your values handle the form values here
      console.log("clicked");
      if (!Object.keys(values).every((key) => values[key] == "")) {
        for (var i in values) {
          if (values[i] != "") {
            conds += i.toString() + "='" + values[i].toString() + "' AND ";
          }
        }
      }
      if (usr != "Admin") {
        conds += "user='" + usr + "'";
      } else {
        conds = conds.substr(0, conds.length - 5);
      }
      setCond(conds);
      console.log(conds, cond);

      if (conds == "") {
        try {
          const res = await axios.get("http://localhost:8800/data");
          setTableData([...res.data].reverse());
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const res = await axios.get("http://localhost:8800/data/" + conds);
          console.log(res.data);
          setTableData([...res.data]);
        } catch (err) {
          console.log(err);
        }
      }
      action.resetForm();
    },
  });
  const noDat = () => {
    return <tr>No Data Available</tr>;
  };
  const errors = formik.errors;
  const touched = formik.touched;
  // console.log(formik.errors);
  const modifyData = async () => {
    try {
      console.log("Entering Modify area...");
      console.log(cond, " and ", conds);
      console.log(formik.values);
      await axios.put("http://localhost:8800/data/" + cond, {
        ...formik.values,
        user: usr,
      });
      const res = await axios.get(
        "http://localhost:8800/data/id=" + tableData[0].id.toString()
      );
      console.log(res.data);
      setTableData([...res.data]);
    } catch (err) {
      console.log(err);
    }
    formik.resetForm();
  };
  return (
    <div className="enclosure">
      {/* <form> */}
      <div className="left">
        <label htmlFor="namea">Name:</label>
        <input
          type="text"
          id="namea"
          onChange={formik.handleChange}
          name="name"
          value={formik.values.name}
          className={
            formik.errors.name && formik.touched.name ? "input-error" : ""
          }
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}
        <label htmlFor="phna">Ph.No:</label>
        <input
          type="number"
          id="phna"
          onChange={formik.handleChange}
          name="phno"
          value={formik.values.phno}
          className={
            formik.errors.phno && formik.touched.phno ? "input-error" : ""
          }
        />
        {errors.phno && touched.phno && <p className="error">{errors.phno}</p>}
        <label htmlFor="emaila">Email: </label>
        <input
          type="email"
          id="emaila"
          onChange={formik.handleChange}
          name="email"
          value={formik.values.email}
          className={
            formik.errors.email && formik.touched.email ? "input-error" : ""
          }
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="producta">Product:</label>
        <input
          type="text"
          id="producta"
          onChange={formik.handleChange}
          name="product"
          value={formik.values.product}
          className={
            formik.errors.product && formik.touched.product ? "input-error" : ""
          }
        />
        {errors.product && touched.product && (
          <p className="error">{errors.product}</p>
        )}
      </div>
      <div className="right">
        <label htmlFor="citya">City</label>
        <input
          type="text"
          id="citya"
          onChange={formik.handleChange}
          name="city"
          value={formik.values.city}
          className={
            formik.errors.city && formik.touched.city ? "input-error" : ""
          }
        />
        {errors.city && touched.city && <p className="error">{errors.city}</p>}
        <label htmlFor="countrya">Country:</label>
        <input
          type="text"
          id="countrya"
          onChange={formik.handleChange}
          name="country"
          value={formik.values.country}
          className={
            formik.errors.country && formik.touched.country ? "input-error" : ""
          }
        />
        {errors.country && touched.country && (
          <p className="error">{errors.country}</p>
        )}
        <label htmlFor="remarksa">Remarks:</label>
        <textarea
          id="remarksa"
          cols={30}
          rows={1}
          onChange={formik.handleChange}
          name="remarks"
          value={formik.values.remarks}
          className={
            formik.errors.remarks && formik.touched.remarks ? "input-error" : ""
          }
        ></textarea>
        {errors.remarks && touched.remarks && (
          <p className="error">{errors.remarks}</p>
        )}
        <label htmlFor="expirya">Expiry:</label>
        <input
          type="date"
          id="expirya"
          onChange={formik.handleChange}
          name="expiry"
          value={formik.values.expiry}
          className={
            formik.errors.expiry && formik.touched.expiry ? "input-error" : ""
          }
        />
        {errors.expiry && touched.expiry && (
          <p className="error">{errors.expiry}</p>
        )}
      </div>
      <div className="btngrp">
        <button id="submit" onClick={formik.handleSubmit} type="submit">
          FILTER
        </button>
        <button id="modify" onClick={modifyData} type="button">
          MODIFY
        </button>
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
            {tableData.length > 0
              ? tableData.map((data: dataObj) => (
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
                ))
              : noDat()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModifyData;
