import React from "react";
import "./CDMStyle.css";

interface cdmProps {
  mode: "add" | "modify" | "view";
}

const CDMPage: React.FC<cdmProps> = ({ mode }) => {
  if (mode == "view") {
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    );
  } else if (mode == "add") {
    return (
      <div className="enclosure">
        {/* <form> */}
        <div className="left">
          <label htmlFor="namea">Name:</label>
          <input type="text" id="namea" />
          <label htmlFor="phna">Ph.No:</label>
          <input type="number" id="phna" />
          <label htmlFor="emaila">Email: </label>
          <input type="email" id="emaila" />
          <label htmlFor="producta">Product:</label>
          <input type="text" id="producta" />
        </div>
        <div className="right">
          <label htmlFor="citya">City</label>
          <input type="text" id="citya" />
          <label htmlFor="countrya">Country:</label>
          <input type="text" id="countrya" />
          <label htmlFor="remarksa">Remarks:</label>
          <textarea id="remarksa" cols={30} rows={1}></textarea>
          <label htmlFor="expirya">Expiry:</label>
          <input type="date" id="expirya" />
        </div>
        {/* </form> */}
        <div className="btngrp">
          <button id="submit">ADD</button>
          {/* <button id="print">PRINT</button> */}
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
