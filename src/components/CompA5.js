import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function CompA5() {
  const A5 = [
    {
      srNo: 5.1,
      controller: "Policies for information security",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.2,
      controller: "Information security roles and responsibilities",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.3,
      controller: "Segregation of duties Control",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.4,
      controller: "Management responsibilities Control",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.5,
      controller: " Contact with authorities Control",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.6,
      controller: "Contact with special interest groups",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.7,
      controller: "Threat intelligence Control",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.8,
      controller: "Information security in project management",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.9,
      controller: " Inventory of information and other associated assets",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.1,
      controller: "Acceptable use of information and other associated assets",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.11,
      controller: "Return of assets, Classification of information",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.12,
      controller: " Labelling of information",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.13,
      controller: "Information transfer, Access control",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.14,
      controller: "Identity management",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.15,
      controller: "Authentication information",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.16,
      controller: "Authentication information",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.17,
      controller: "Information security in supplier relationships",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.18,
      controller: "Addressing information security within supplier agreements",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.19,
      controller:
        " Managing information security in the information and communication technology (ICT) supply chain",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.2,
      controller: "Monitoring",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.21,
      controller: "review and change management of supplier services",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.22,
      controller: "Information security for use of cloud services",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.23,
      controller: "Assessment and decision on information security events",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.24,
      controller: "Response to information security incidents",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.25,
      controller: " Learning from information security incidents",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.26,
      controller: " Collection of evidence",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.27,
      controller: " Information security during disruption",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.28,
      controller: "ICT readiness for business continuity",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.29,
      controller: "Legal, statutory",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.3,
      controller: "regulatory and contractual requirements",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.31,
      controller: "Intellectual property rights",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.32,
      controller: "Protection of records",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.33,
      controller:
        " Privacy and protection of personal identifiable information (PII)",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.34,
      controller: "Independent review of information security",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.35,
      controller: "Compliance with policies",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.36,
      controller: "rules and standards for information security",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
    {
      srNo: 5.37,
      controller: "Documented operating procedures",
      condition: "",
      description: "",
      files: [],
      color: false,
    },
  ];
  const [controlerA5, setControlerA5] = useState(A5);
  const [show, setShow] = useState(false);

  const handleShowHide = () => {
    setShow(!show);
  };

  // handleInputForm
  const handleInputForm = (val, index) => {
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.condition = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  const handleInputFormDes = (val, index) => {
    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.description = val;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  // handleFile
  const handleFile = (e, index) => {
    let fileArr = [];
    fileArr.push(...e.target.files);

    let newArr = [...controlerA5];
    let obj = newArr[index];
    obj.files = fileArr;
    newArr[index] = obj;
    setControlerA5(newArr);
  };
  // handleSubmit
  const handleSubmit = (el, index) => {
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
        let copArr = [...controlerA5];
        let obj = copArr[index];
        obj.color = true;
        obj.condition = '';
        obj.description = '';
        obj.files = [];
        copArr[index]=obj
        setControlerA5(copArr);
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
        {/* ***************Begin::Controller For A5****************** */}
        <div className="overflow-hidden">
          <div onClick={handleShowHide} className="mainHeading">
            5 Context of the organisation
          </div>
          <div className={`${show ? "d-none" : "d-block"}`}>
            <div className={`table-resposive overflow-auto`}>
              {controlerA5.map((el, index) => (
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
                        value={controlerA5[index].condition}
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
                        value={controlerA5[index].description}
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
                          {controlerA5[index].files.length}
                        </span>
                      </span>
                      <div className="upload-btn-wrapper">
                        <label
                          className="fileUpload"
                          htmlFor={`fileA5${index}`}
                        >
                          Upload a file
                          <input
                            type="file"
                            className="d-none"
                            id={`fileA5${index}`}
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
                        onClick={() => handleSubmit(el, index)}
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
        {/* ***************End::Controller For A5********************** */}
      </div>
    </>
  );
}
