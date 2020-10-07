import React, {useEffect} from 'react';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const WriteExcel = ({data}) => {
    useEffect(() => {
        const today = new Date();
  const wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "SheetJS Tutorial",
    Subject: "Test file",
    Author: "Matt Lucas",
    CreatedDate: `${today.toLocaleDateString()}`,
  }
  wb.SheetNames.push("Test Sheet");
  let ws = XLSX.utils.aoa_to_sheet(data);
  wb.Sheets["Test Sheet"] = ws;
  let wbout = XLSX.write(wb, {bookType: 'xlsx', type: 'binary'});
  const s2ab = s => {
    let buf = new ArrayBuffer(s.length);
    let view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
const blobber = () => {
    saveAs(new Blob([s2ab(wbout)], {type:"application/octet-stream"}), "test.xlsx");
}
blobber();
    }, [data])
 
  return (
    <div className="WriteFile">
     Your file is being created!
    </div>
  )};
  export default WriteExcel;