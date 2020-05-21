import { store } from "../../../index";
import { ShiftActions } from "../store/actions";
import moment from "moment";
import "moment/locale/fr";
export class Shift {
  private accountName: string = "Centrale du CHU Hassan II";

  constructor() {}

  // dispatch date
  getShiftData = (shiftData: any) => {
    const days: number[] = [];
    const startDay = new Date(shiftData.start).getDate();
    const endDay = new Date(shiftData.end).getDate();

    for (let i = startDay; i <= endDay; i++) {
      if (i % 2 == 0 && shiftData.days == "pair") days.push(i);
      if (i % 2 == 1 && shiftData.days == "Impair") days.push(i);
    }

    store.dispatch({
      type: ShiftActions.LAB_LABO_SHIFT_ADD_NEW,
      payload: {
        query: `mutation {
              assignShiftsToEmployer(
                userId : "${shiftData.employerId}",
                departementId : "${shiftData.departement._id}",
                mounth : ${new Date(shiftData.start).getMonth() + 1},
                year : ${new Date(shiftData.start).getFullYear()},
                type : "${shiftData.type}",
                days : [${days}],
                accountName : "${this.accountName}")
            }`,
      },
      path: "labos/staff",
    });
  };

  // fetch all shifts
  fetchShifts = () =>
    store.dispatch({
      type: ShiftActions.LAB_LABO_SHIFT_FETCH_ALL,
      payload: {
        query: `query{fetchAllShifts(accountName:"${this.accountName}"){employer{firstName lastName} departement{name} days mounth year type}}`,
      },
      path: "labos/staff",
    });
  // get file xls url
  getXlsFile = () => {
    const myBlob = new Blob([generateXLShift]);
    return window.URL.createObjectURL(myBlob);
  };
  getMonthShifts = (month : string, departement : string) => store.dispatch({
    type : ShiftActions.LAB_LABO_SHIFT_CLASSIFY_DATA,
    departement : departement,
    month : month
  })
}

// Generate file actions
const FooterXLShift = `<tr height=15 style='height:14.4pt'>
<td height=19 colspan=6 style='height:14.4pt;mso-ignore:colspan'></td>
</tr>
<tr height=19 style='height:14.4pt'>
<td height=19 colspan=2 style='height:14.4pt;mso-ignore:colspan'></td>
<td class=xl77>Chef de service</td>
<td></td>
<td colspan=2 class=xl90>Directeur de l’hopital</td>
</tr>`;
const headerXLShift = `<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=ProgId content=Excel.Sheet>
<meta name=Generator content="Microsoft Excel 14">
<style>
tr
{mso-height-source:auto;}
col
{mso-width-source:auto;}
br
{mso-data-placement:same-cell;}
.style0
{mso-number-format:General;
text-align:general;
vertical-align:bottom;
white-space:nowrap;
mso-rotate:0;
mso-background-source:auto;
mso-pattern:auto;
color:black;
font-size:11.0pt;
font-weight:400;
font-style:normal;
text-decoration:none;
font-family:Calibri, sans-serif;
mso-font-charset:0;
border:none;
mso-protection:locked visible;
mso-style-name:Normal;
mso-style-id:0;}
td
{mso-style-parent:style0;
padding:0px;
mso-ignore:padding;
color:black;
font-size:11.0pt;
font-weight:400;
font-style:normal;
text-decoration:none;
font-family:Calibri, sans-serif;
mso-font-charset:0;
mso-number-format:General;
text-align:general;
vertical-align:bottom;
border:none;
mso-background-source:auto;
mso-pattern:auto;
mso-protection:locked visible;
white-space:nowrap;
mso-rotate:0;}
.xl65
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;}
.xl66
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;
text-align:center;}
.xl67
{mso-style-parent:style0;
font-size:10.0pt;
font-weight:700;
border:.5pt solid windowtext;}
.xl68
{mso-style-parent:style0;
font-weight:700;
mso-number-format:"Short Date";
text-align:center;
border-top:.5pt solid windowtext;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:none;}
.xl69
{mso-style-parent:style0;
font-size:10.0pt;
font-weight:700;}
.xl70
{mso-style-parent:style0;
font-size:10.0pt;
font-weight:700;
border-top:none;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;}
.xl71
{mso-style-parent:style0;
font-size:10.0pt;
font-weight:700;
text-align:center;
border-top:none;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:none;}
.xl72
{mso-style-parent:style0;
font-size:14.0pt;
font-weight:700;}
.xl73
{mso-style-parent:style0;
font-size:10.0pt;
font-weight:700;
text-align:center;}
.xl74
{mso-style-parent:style0;
font-size:9.0pt;
font-weight:700;
font-family:Century, serif;
mso-font-charset:0;
text-align:center;
border-top:none;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;
background:white;
mso-pattern:black none;
white-space:nowrap;
mso-text-control:shrinktofit;}
.xl75
{mso-style-parent:style0;
font-size:9.0pt;
mso-number-format:"Short Date";
text-align:center;
border-top:none;
border-right:none;
border-bottom:.5pt solid windowtext;
border-left:none;}
.xl76
{mso-style-parent:style0;
font-size:9.0pt;
font-weight:700;
font-family:Century, serif;
mso-font-charset:0;
text-align:center;
border:.5pt solid windowtext;
background:#FFC000;
mso-pattern:black none;
white-space:nowrap;
mso-text-control:shrinktofit;}
.xl77
{mso-style-parent:style0;
font-weight:700;}
.xl78
{mso-style-parent:style0;
font-size:9.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:none;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;}
.xl79
{mso-style-parent:style0;
font-size:9.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:none;}
.xl80
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:none;
border-bottom:2.0pt double windowtext;
border-left:.5pt solid windowtext;}
.xl81
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:.5pt solid windowtext;
border-bottom:2.0pt double windowtext;
border-left:none;}
.xl82
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:none;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;}
.xl83
{mso-style-parent:style0;
font-size:12.0pt;
font-weight:700;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:.5pt solid black;
border-bottom:.5pt solid windowtext;
border-left:none;}
.xl84
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:2.0pt double windowtext;
border-right:none;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;
white-space:nowrap;
mso-text-control:shrinktofit;}
.xl85
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:2.0pt double windowtext;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:none;
white-space:nowrap;
mso-text-control:shrinktofit;}
.xl86
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:none;
border-bottom:.5pt solid windowtext;
border-left:.5pt solid windowtext;
background:#BFBFBF;
mso-pattern:black none;}
.xl87
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:.5pt solid windowtext;
border-bottom:.5pt solid windowtext;
border-left:none;
background:#BFBFBF;
mso-pattern:black none;}
.xl88
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:none;
border-bottom:2.0pt double windowtext;
border-left:.5pt solid windowtext;}
.xl89
{mso-style-parent:style0;
text-align:center;
vertical-align:middle;
border-top:.5pt solid windowtext;
border-right:.5pt solid windowtext;
border-bottom:2.0pt double windowtext;
border-left:none;}
.xl90
{mso-style-parent:style0;
font-weight:700;
text-align:center;}

</style>
</head>`;
const tableHeaderXLShift = `<table border=0 cellpadding=0 cellspacing=0 width=585 style='border-collapse:
collapse;table-layout:fixed;width:439pt'>
     <col width=41 style='mso-width-source:userset;mso-width-alt:1450;width:31pt'>
     <col width=64 style='width:48pt'>
     <col width=120 span=4 style='mso-width-source:userset;mso-width-alt:4266; width:90pt'>
     <tr height=21 style='height:15.6pt'>
        <td height=21 class=xl65 width=41 style='height:15.6pt;width:31pt'></td>
        <td class=xl65 width=64 style='width:48pt'></td>
        <td class=xl65 width=120 style='width:90pt'></td>
        <td colspan=2 height=21 width=240 style='height:15.6pt;width:180pt' align=left valign=top>

           <span style='mso-ignore:vglayout;position:absolute;z-index:1;margin-left:0px;margin-top:1px;width:200px;height:102px'><img width=200 height=80 src=image004.gif v:shapes="Picture_x0020_1"></span>
           <span style='mso-ignore:vglayout2'>
              <table cellpadding=0 cellspacing=0>
                 <tr><td colspan=2 height=21 class=xl66 width=240 style='height:15.6pt;width:180pt'></td></tr>
              </table>
           </span></td>
        <td width=120 style='width:90pt'></td>
     </tr>
     <tr height=21 style='height:15.6pt'>
        <td height=21 class=xl65 style='height:15.6pt'></td>
        <td class=xl65></td>
        <td></td>
        <td colspan=2 class=xl66></td>
        <td class=xl65></td>
     </tr>
     <tr height=21 style='height:15.6pt'>
        <td height=21 class=xl65 style='height:15.6pt'></td>
        <td class=xl65></td>
        <td class=xl65></td>
        <td class=xl66></td>
        <td class=xl66></td>
        <td class=xl65></td>
     </tr>
     <tr height=21 style='height:15.6pt'>
        <td height=21 class=xl65 style='height:15.6pt'></td>
        <td class=xl65></td>
        <td class=xl65></td>
        <td class=xl66></td>
        <td class=xl66></td>
        <td class=xl65></td>
     </tr>
     <tr height=21 style='height:15.6pt'>
        <td height=21 class=xl65 style='height:15.6pt'></td>
        <td class=xl67>Fes</td>
        <td class=xl68>5/16/2020</td>
        <td class=xl66></td>
        <td class=xl66></td>
        <td class=xl65></td>
     </tr>
     <tr height=20 style='height:15.0pt'>
        <td height=24 class=xl69 style='height:18.0pt'></td>
        <td class=xl70>Service</td>
        <td class=xl71>Laboratoire</td>
        <td class=xl69></td>
        <td class=xl69></td>
        <td class=xl72></td>
     </tr>
     <tr height=20 style='height:15.0pt'>
        <td height=24 class=xl69 style='height:18.0pt'></td>
        <td class=xl70>Année</td>
        <td class=xl71>2019</td>
        <td class=xl69></td>
        <td class=xl69></td>
        <td class=xl72></td>
     </tr>
     <tr height=20 style='height:15.0pt'>
        <td height=24 class=xl69 style='height:18.0pt'></td>
        <td class=xl70>MOIS</td>
        <td class=xl71>JUILLET</td>
        <td class=xl69></td>
        <td class=xl69></td>
        <td class=xl72></td>
     </tr>
     <tr height=20 style='height:15.0pt'>
        <td height=24 class=xl69 style='height:18.0pt'></td>
        <td class=xl69></td>
        <td class=xl73></td>
        <td class=xl69></td>
        <td class=xl69></td>
        <td class=xl72></td>
     </tr>`;
const bodyXLShifts = () => {
  let body = "";
  for (let i = 0; i < 31; i++) {
    body += `<tr height=20 style='height:15.0pt'>
      <td height=20 class=xl74 style='height:15.0pt'>L</td>
      <td class=xl75>7/${i + 1}/2019</td>
      <td colspan=2 class=xl84 style='border-right:.5pt solid black'>A,B;C</td>
      <td colspan=2 class=xl86 style='border-right:.5pt solid black;border-left:none'>G;H;I</td>
   </tr>`;
  }
  return body;
};
const generateXLShift = `
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"
   xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">

   ${headerXLShift}

   <body link=blue vlink=purple>
         ${tableHeaderXLShift}
         <!-- table header -->
         <tr height=22 style='height:16.2pt'>
            <td colspan=2 height=22 class=xl78 style='border-right:.5pt solid black;height:16.2pt'>DATE</td>
            <td colspan=2 class=xl80 style='border-right:.5pt solid black;border-left:none'>JOUR</td>
            <td colspan=2 class=xl82 style='border-right:.5pt solid black;border-left:none'>NUIT</td>
         </tr>
         <!-- start table body boucler -->
         ${bodyXLShifts()}
         ${FooterXLShift}
      </table>

   </body>

</html>
`;

export default new Shift();
