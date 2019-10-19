import { firebaseApp } from './../../Config/Firebase/Firebase.js'

const getData =(item,uid)=>{
    console.log("+++++++++++++++++>",item,uid)
return dispatch=>{
    let data ={
        item:item,
        uid,

    }
firebaseApp.firestore().collection("item").add(data).then(res=>{
    dispatch({type:"getData",payload:item})
})
}
}


export {getData}