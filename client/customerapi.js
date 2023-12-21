document.getElementById("bookbtn").addEventListener("click",sendcustomer)
async function sendcustomer(e){
    //   e.preventDefault()
        let name=document.getElementById("cname").value
        let age=document.getElementById("cage").value
        let cnumber=document.getElementById("cphone").value
        let email=document.getElementById("cemail").value
    try{
       console.log("button clickedd")
        const myInit={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:name,age:age,contactnumber:cnumber,email:email}),
        }
        const res=await fetch("http://localhost:5000/api/passengers",myInit)
         if(!res.ok){
             throw new Error(res.statusText)
         }
        const data= await res.json()
        console.log(data._id)
       
     }catch(error)
     {
         console.log(error)
     }

} 
// let cname=document.getElementById("cname").value
       
//  export function customerdata()
// {
//     return cname
// }