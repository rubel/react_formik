import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import './index.css';

function Customers({ toggle }) {
    let allCountries = ["Bangladesh","Saudi Arabia", "Palestine", "Iraq", "Turkey", "Afganistan", "Pakistan"];
    const [isEditMode, setIsEditMode] = useState(false)

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
        
        <Formik
            initialValues={getAddCustomerInitialValues()}
            enableReinitialize
            onSubmit={(values) => {
                console.log(values);
            }}>
            <Form>
                <div className="customerFormBg">
                    <div className="form-outline" style={{ width: "100%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Customer Name</label>
                        <Field
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        className="form-control form-control-lg"
                        />
                    </div>

                    <div className="form-outline" style={{ width: "50%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Country: </label>
                        <Field
                        as="select"
                        name="country"
                        className="select form-control-lg"
                        style={{ width: "100%" }}>
                        {allCountries &&
                            allCountries.map((c, index) => (
                            <option key={index} value={c}>
                                {c}
                            </option>
                            ))}
                        </Field>
                    </div>
                    
                    <div className="form-outline" style={{ width: "100%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Address: </label>
                        <Field
                        as="textarea"
                        name="address"
                        className="select form-control-lg"
                        style={{ width: "100%" }}
                        />
                    </div>
                    <div className="form-outline" style={{ width: "50%", float: "right", padding: "0px 10px" }}>
                        <label className="form-custom-label">Phone</label>
                        <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="form-control form-control-lg"
                        />
                    </div>

                    <div className="form-outline" style={{ width: "50%", float: "left", padding: "0px 10px" }}>
                        <label className="form-custom-label">Whatsapp</label>
                        <Field
                        type="text"
                        name="whatsapp"
                        placeholder="WhatsApp"
                        className="form-control form-control-lg"
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
                            style={{ width: "30%", marginLeft: "30px" }}
                            className="btn btn-primary btn-lg"
                            onClick={()=>{
                                setIsEditMode(true);
                            }}>
                            Edit Previous User
                        </button>
                    </div>
                </div>
                </Form>
            </Formik>
        </div>
    </div>
  );
}

export default Customers;
