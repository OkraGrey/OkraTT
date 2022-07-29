
const url = "https://localhost:7259/api/v1/Product";
var count=0;
let tt= document.getElementById("t");
// let dataArray;
// function getData() {
//     fetch(url, { method: "GET" })
//     .then((response) => response.json())
//     .then((data) => {
//      console.log(data);
//      return data;
//     })
//     .catch((error) => {
//       console.log(error);
//       alert(error);
//     });
// }  
// dataArray=getData();

let data;
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    data = await response.json();
    console.log(data);
    showTable();

}

function showTable(){
    
    let t= document.getElementById("t");
        let tab = 
            `<tr>
              <th>Name</th>
              <th>Price</th>
              <th>Status Id</th>
              <th>Category Id</th>
              <th>Description</th>
              <th>Actions</th>  
             </tr>`;
        
        // Loop to access all rows 
        for (let r of data) {
            tab += `<tr> 
        <td>${r.name} </td>
        <td>${r.price}</td>
        <td>${r.statusId}</td> 
        <td>${r.categoryId}</td>
        <td>${r.description}</td>
        <td><button class="btn btn-sm btn-dark"><i class="fa fa-edit"></i>Edit </button> 
        <button class="btn btn-sm bg-danger"><i class="fa fa-trash"></i>Delete </button> </td>          

    </tr>`;
        }
        count%2==0?document.getElementById("t").innerHTML = tab:document.getElementById("t").innerHTML=  document.getElementById("tt");
          count++;
    
}
// const button=document.getElementById("Get");
// button.addEventListener("onclick",getapi(url));
const btn = document.getElementById('Get');
const btn1 = document.getElementById('Get1');
btn.addEventListener('click',(event)=>{
    getapi(url);
} 
);
btn1.addEventListener('click',(event)=>{
    console.log(data.list);

} 
);
// function postData(){
//     url="https://reqres.in/api/users";
//     data ={name:"Hasnain" ,job:"abcd"};
//     params = {
//         method : "post",
//         headers :{
//             "Content-Type": "application/json"
//         },
//         body :JSON.stringify(data)
//     }
//     fetch(url,params).then(response=>response.json()).then(data=>console.log(data));
// }
// postData();
