import { useFormik } from "formik";
import React, { useState } from "react";
import './index.css';

function UseFormmikHook() {
    let allCountries = ["Bangladesh","Saudi Arabia", "Palestine", "Iraq", "Turkey", "Afganistan", "Pakistan"];
    const [isEditMode, setIsEditMode] = useState(false)
    
    const formik = useFormik({
        initialValues: getAddCustomerInitialValues(),
        enableReinitialize:true,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  function getAddCustomerInitialValues() {
    if (isEditMode) {
        return {
            name: "Rubel",
            country: "Bangladesh",
            phone: "8801912429159",
            whatsapp: "8801912429159",
            address: "Keraniganj",
            };
    } else {
      return {
        name: "",
        country: "",
        phone: "",
        whatsapp: "",
        address: "",
      };
    }
  }
  
  
  return (
    <div>
        <div className="fullShadow">
            <a href="/">Use Formik TAG</a>
       
            <form onSubmit={formik.handleSubmit}>
                <div className="customerFormBg">
                    <div className="form-outline" style={{ width: "100%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Customer Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />
                    </div>

                    <div className="form-outline" style={{ width: "50%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Country: </label>
                        <select
                        id="country"
                        name="country"
                        className="select form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.country}
                        style={{ width: "100%" }}>
                        {allCountries &&
                            allCountries.map((c, index) => (
                            <option key={index} value={c}>
                                {c}
                            </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="form-outline" style={{ width: "100%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Address: </label>
                        <input
                        as="textarea"
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        className="select form-control-lg"
                        style={{ width: "100%" }}
                        />
                    </div>
                    <div className="form-outline" style={{ width: "50%", float: "right", padding: "0px 10px" }}>
                        <label className="form-custom-label">Phone</label>
                        <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        />
                    </div>

                    <div className="form-outline" style={{ width: "50%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Whatsapp</label>
                        <input
                        type="text"
                        id="whatsapp"
                        name="whatsapp"
                        className="form-control form-control-lg"
                        onChange={formik.handleChange}
                        value={formik.values.whatsapp}
                        />
                    </div>

                    <div style={{ float: "right", width: "100%", padding: "32px 10px 3px 10px" }}>
                        <button
                        style={{ width: "20%" }}
                        className="btn btn-primary btn-lg"
                        type="submit">
                            Add User
                        </button>
                        <button
                            type="button"
                            style={{ width: "30%", marginLeft: "30px" }}
                            className="btn btn-primary btn-lg"
                            onClick={()=>{
                                setIsEditMode(true);
                            }}>
                                Edit Previous User
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default UseFormmikHook;
