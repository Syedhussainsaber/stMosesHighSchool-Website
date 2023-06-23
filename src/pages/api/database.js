// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "../../../firebaseConfig"
import { addDoc, onSnapshot,collection } from "firebase/firestore"
import {toast} from "react-toastify" 


const userRef = collection(firestore,"users")

export const contactData = (data)=>{
try{
  if(data.name !== "" && data.email!== "" && data.mobNo.length === 10 ){
    addDoc(userRef,data).then(()=>{
toast.success("Submitted Successfully")
    }).catch((err)=>{
    console.log(err)
    toast.error("Something Error")
    })
  }

  else{
toast.error("Provide Sufficient Details")
  }

}
catch(e){
  console.log(e)
  toast.error("Something Error")
}
}

export const getUserData = (setUser)=>{

  return new Promise((resolve, reject) => {
try{
  onSnapshot(userRef,(res)=>{
    resolve(
      res.docs.map((docs) => {
        return {
          ...docs.data(),
          id: docs.id,
        }
      }
    ))
    })
}
catch(err){
  reject()
console.log(err)
}
  })


}