import React from "react";

export default function HelpModal({ data }) {
console.log('data',data)
  const handleFont = {
    fontFamily: "math !important",
    width: "max-content",
  };
  return (
    <>
      <div className={`table-resposive overflow-auto bg-graye`}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <p style={handleFont}>Control type</p>
              </th>
              <th scope="col">
                <p style={{ width: "max-content" }}>
                  Information security properties
                </p>
              </th>
              <th scope="col">
                <p style={{ width: "max-content" }}>Cybersecurity concept</p>
              </th>
              <th scope="col">
                <p style={{ width: "max-content" }}>Operational capabilities</p>
              </th>
              <th scope="col">
                <p style={{ width: "max-content" }}>Security domain</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {data?.td_a?.map((el) => (
                  <p style={{ fontWeight: "300" }}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_b?.map((el) => (
                  <p style={{ fontWeight: "300" }}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_c?.map((el) => (
                  <p style={{ fontWeight: "300" }}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_d?.map((el) => (
                  <p style={{ fontWeight: "300" }}>{el?.point_a}</p>
                ))}
              </td>
              <td>
                {data?.td_e?.map((el) => (
                  <p style={{ fontWeight: "300" }}>{el?.point_a}</p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
