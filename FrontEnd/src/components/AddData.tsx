import axios from "axios";
// import "react";
import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import ReactDOM from "react-dom/client";
// import { strictSchema } from "../validationSchema.js";

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

// const viewData = () => {
//   const [dataz, setDatas] = useState([]);
//   useEffect(() => {
//     const fetchAllDatas = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/data");
//         setDatas(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllDatas();
//   }, []);
//   return dataz;
// };

const AddData = () => {
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
  const [error, setError] = useState(false);
  const [actv, setActv] = useState(false);

  const handleChange = (e: ChangeEvent) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: MouseEvent) => {
    e.preventDefault();
    console.log(data);
    setActv(true);
    if (
      data.name == "" ||
      data.phno == "" ||
      data.email == "" ||
      data.product == "" ||
      data.city == "" ||
      data.country == "" ||
      data.expiry.toString() == ""
    ) {
      alert(
        "All fields other than 'remarks' are necessary, so please fill them out!!!"
      );
      setError(true);
    } else if (!data.email.includes("@") || !data.email.includes(".")) {
      alert("Enter a proper email please");
      setError(true);
    } else if (data.phno.length != 10) {
      alert("Enter a proper 10-digit phone number");
      setError(true);
    } else {
      try {
        setError(false);
        const dda = { ...data, user: usr };
        await axios.post("http://localhost:8800/data", dda);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      //   const datas = viewData();
      // ReactDOM.createRoot(
      //   document.getElementsByTagName("tbody")[0] as HTMLElement
      // ).render(
      //   <tr>
      //     {error ? "Something went wrong!" : "Data Successfully Added !!!"}
      //   </tr>
      // );
    }
  };

  //   const func = (datas: Array<dataObj>) => {
  //     console.log(datas);
  //     datas = datas.reverse();
  //     return datas.map((data: dataObj) => (
  //       <tr key={data.id.toString()}>
  //         <td>{data.id.toString()}</td>
  //         <td>{data.name}</td>
  //         <td>{data.phno}</td>
  //         <td>{data.email}</td>
  //         <td>{data.product}</td>
  //         <td>{data.expiry}</td>
  //         <td>
  //           {data.city},{data.country}
  //         </td>
  //         <td>{data.remarks}</td>
  //       </tr>
  //     ));
  //   };
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
          ADD
        </button>
      </div>
      <div className="dataarea">
        <table id="datatable">
          <tbody>
            <tr>
              {actv &&
                (error
                  ? "Something went wrong!"
                  : "Data Successfully Added !!!")}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddData;
