import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CompA8() {
  const A8 = [
    {
      srNo: 8.1,
      controller: "User end point devices",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.2,
      controller: "Privileged access rights",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.3,
      controller: "Information access restriction",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.4,
      controller: "Access to source code",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.5,
      controller: "Secure authentication",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.6,
      controller: "Capacity management",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.7,
      controller: "Protection against malware",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.8,
      controller: "Management of technical vulnerabilities",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.9,
      controller: "Configuration management",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.1,
      controller: "Information deletion",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.11,
      controller: "Data masking",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.12,
      controller: "Data leakage prevention",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.13,
      controller: "Information backup",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.14,
      controller: "Redundancy of information processing facilities",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.15,
      controller: "Logging",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.16,
      controller: "Monitoring activities",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.17,
      controller: "Clock synchronization",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.18,
      controller: "Use of privileged utility programs",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.19,
      controller: "Installation of software on operational systems",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.2,
      controller: "Networks security",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.21,
      controller: "Security of network services",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.22,
      controller: "Segregation of networks",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.23,
      controller: "Web filtering",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.24,
      controller: "Use of cryptography",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.25,
      controller: "Secure development life cycle",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.26,
      controller: " Application security requirements",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.27,
      controller: "Secure system architecture and engineering principles",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.28,
      controller: "Secure coding",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.29,
      controller: "Security testing in development and acceptance",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.3,
      controller: "Outsourced development",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.31,
      controller: "Separation of development, test and production environments",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.32,
      controller: "Change management",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.33,
      controller: "Test information",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
    {
      srNo: 8.34,
      controller: " Protection of information systems during audit testing",
      condition: " ",
      description: " ",
      files: [],
      color:false
    },
  ];

  const [controlerA8, setControlerA8] = useState(A8);
  const [show, setShow] = useState(false);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA8];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA8(newArr);
  };
  // handleSubmit
  const handleSubmit = (el,index) => {
    console.log("inputData 5", el);
    const newFormData = new FormData();
    newFormData.append("srNo", el.srNo);
    newFormData.append("condition", el.condition);
    newFormData.append("description", el.description);
    newFormData.append("controller", el.controller);
    el?.files?.map((el) => newFormData.append("files", el));
    console.log("newFormData", newFormData);
    axios
      .post("http://localhost:8000/api/v1/iso", newFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("res", res);
        let copArr = [...controlerA8];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = '';
        obj.description = '';
        obj.files = [];
        copArr[index]=obj
        setControlerA8(copArr);
        toast.success("Successfully Added");

        console.log(
          "res",
          ` http://localhost:8000/api/v1/iso/${res.data.data.files}`
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <>
      <div className="container-fluid">
        {/* ***************Begin::Controller For A8****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            8 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto`}>
              {controlerA8.map((el, index) => (
                <table key={index}>
                  <tr className={`${el.color?'green':''}`}>
                    {/************Begin:: Sr No :***********  */}
                    <td>
                      <p style={{ width: "1rem" }}>{el.srNo}</p>
                    </td>
                    {/************End:: Sr No :***********  */}

                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <p className="overflow-hidden" style={{ width: "9rem" }}>
                        {el.controller}
                      </p>
                    </td>
                    {/************Begin::Controller Name :***********  */}
                    <td>
                      <select
                        value={controlerA8[index].condition}
                        name="condition"
                        onChange={(e) => handleInputForm(e.target.value, index)}
                      >
                        <option value="Unknown">unknown</option>
                        <option value="Non-existent">Non-existent</option>
                        <option value="Initial">Initial</option>
                        <option value="Limited">Limited</option>
                        <option value="Defined">Defined</option>
                        <option value="Managed">Managed</option>
                        <option value="Optimized">Optimized</option>
                        <option value="Not-applicable">Not applicable</option>
                      </select>
                    </td>
                    <td>
                      <textarea
                        style={{ height: "50px" }}
                        height="40%"
                        value={controlerA8[index].description}
                        name="description"
                        form="usrform"
                        onChange={(e) =>
                          handleInputFormDes(e.target.value, index)
                        }
                      ></textarea>
                    </td>
                    <td>
                      <span className="position-relative d-block">
                        <span className="ico">
                          {controlerA8[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA8${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA8${index}`}
                            onChange={(e) => handleFile(e, index)}
                            multiple
                            //  accept='.png, .jpg, .jpeg'
                          />
                        </label>
                      </div>
                    </td>
                    <td>
                      <button
                        className="submitBtn"
                        onClick={() => handleSubmit(el,index)}
                      >
                        Submit
                      </button>
                    </td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
        {/* ***************End::Controller For A8********************** */}
      </div>
    </>
  );
}