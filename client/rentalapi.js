document.getElementById("pickupbtn").addEventListener("click",sendrentals)
async function sendrentals(e){
   e.preventDefault()
   let plocation=document.getElementById("plocation").value
   let pdate=document.getElementById("pdate").value
   let dDate=document.getElementById("dDate").value
   let ptime=document.getElementById("ptime").value
   let dtime=document.getElementById("dtime").value
   let car=document.getElementById("car").value
try{
    // const res =await fetch("http://localhost:5000/api/passengers")
    // if(!res.ok){
    //     throw new Error(res.statusText)
    // }
    // const data=await res.json()
    // console.log(data)
    // var size=data.length
    // console.log(size)
    // let customerid=data[--size]._id
    // console.log(customerid)
    let customerid="648b3978f84ad9fcf3ea3d24"
    console.log("button clickedd")
         const myInit={
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
            body:JSON.stringify({passengerid:customerid,plocation:plocation,pdate:pdate,dDate:dDate,ptime:ptime,dtime:dtime,car:car})
         }
         const resp=await fetch("http://localhost:5000/api/rentals",myInit)
        console.log(resp)
        confirm("Your car is booked")
       
         if(!resp.ok){
           throw new Error(resp.statusText)
          }
         const datay= await resp.json()
         console.log(datay)

}catch(error)
{
    console.log(error)
}

} 
