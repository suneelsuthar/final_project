import { firebaseApp,provider } from './../../Config/Firebase/Firebase.js'




// login 
const login = (data) => {
    return  dispatch => {
        firebaseApp.auth().signInWithEmailAndPassword(data.login_email, data.login_password).then(res => {
            dispatch({ type: "loginSuccess", payload: "*Login successfully !" })
        }).catch(error => {
            alert("sdfsf")
            console.log("error")
            
            dispatch({ type: "loginErr", payload:  error.code })
        })
    }
}


// login with facebook
let LoginFacebook = () => {
    return dispatch=>{
    firebaseApp.auth().signInWithPopup(provider).then(result=>{
        console.log(result)
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(error=>{
          console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
}
  



// signup with email & password
const Signup = (data) => {
    return dispatch => {
        if (data.password === data.confirm_pass) {
            firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
                let obj = {
                    user: data.userName,
                    email: res.user.email,
                    uid: res.user.uid,
                }
                firebaseApp.firestore().collection('Users').doc(res.user.uid).set(obj)
                dispatch({ type: "signupSuccess", payload: "*Signup successfull !" })

            }).catch(err => {
                dispatch({ type: "signupErr", payload: err.code })

            })
        }
        else {
            dispatch({ type: "!match_pass", payload: "*Passowd not mached!" })

        }
    }
}


// currentUser data
const currentUser = (user) => {
    console.log(user)
    return dispatch => {
        if(user !== null){
        var userData = firebaseApp.firestore().collection("Users").doc(user.uid);

        userData.get().then(function(doc) {
            let data = doc.data()
                dispatch({ type: "current_user", payload:data })
           
        })
    }
    
}
}

// logout 
const logout = () => {
    return dispatch => {
        firebaseApp.auth().signOut().then(res => {
        }).catch(res => {
        // An error happened.
        });
    }
}




export { login, Signup, logout, currentUser,LoginFacebook}