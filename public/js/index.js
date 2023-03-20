// const btn = document.getElementById("btn");

window.addEventListener("load", (event) => {
  const data = localStorage.getItem("mylist");
  const users = JSON.parse(data);
  document.getElementById("table").innerHTML =
    `
    <div>
    ${createTable(users)}
    </div>
  `;
});

function loadDoc() {
    var a = document.getElementById("filehash").value;
    // window.location.href = "https://vikas.infura-ipfs.io/ipfs/"+a;
    window.open('https://vikas.infura-ipfs.io/ipfs/'+a, '_blank');
}

// btn.addEventListener("click", () => {
//   const data = localStorage.getItem("mylist");
//   const users = JSON.parse(data);
//   document.getElementById("table").innerHTML =
//     `
//     <div>
//     ${createTable(users)}
//     </div>
//   `;
// });
var a = 56;
const createTable = (users) => {
  return `
  <table>
  <thead>
  <tr>
    <th>
      Hash Code
    </th>
    <th>
      Short Description
    </th>
    <th>Get Data</th>
  </tr>
</thead>
<tbody>
${createTableData(users)}
</tbody>
</table>
`;
};

const createTableData = (users) => {
  let html = ''
  
  for(i=0;i<users.length;i++){
    html += `
    <tr>
    <td data-title='Provider Name' id = "hash">
      ${users[i].hash}
    </td>
    <td data-title='E-mail' id = "info">
      ${users[i].info}
    </td>
    <td class='select'>
        <button class='button' onclick="window.open('DownloadData.html','_blank')">Download</button>
    </td>
  </tr>`;
    } 
  return html;
}

