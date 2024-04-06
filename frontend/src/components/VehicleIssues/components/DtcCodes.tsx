type DtcCodesType = {
  dtcArray: string[];
};

const DtcCodes = ({ dtcArray }: DtcCodesType) => {
  return (
    <td>
      {dtcArray.map((dtc) => (
        <p key={dtc}>{dtc}</p>
      ))}
    </td>
  );
};

export default DtcCodes;
