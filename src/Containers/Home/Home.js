import React from 'react'
import { Input, Button, MainNavbar, Location,Dishboard } from './../../component'
import { connect } from 'react-redux'
import { getData } from './../../store/Action/main_action'
import {logout} from './../../store/Action/auth_action'
import { firebaseApp } from '../../Config/Firebase/Firebase.js'
import Loader from "./../../component/loader/loader";
import './home.css'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            item: '',
            data: false,
            // screen:"block"

        }
    }

    componentDidMount() {
        firebaseApp.firestore().collection("item").where("uid", "==", "user_uid").get().then(res => {
            res.forEach(doc => {
                let item = doc.data()
                console.log(item)
                this.setState({ data: true, screen: "none" })
            })

        })
    }

    

    render() {
        // let user_uid = this.props.history.location.state.uid
        return (
            <div >
                <MainNavbar path={this.props}/>
                {/* <Dishboard /> */}
                {/* <div style={{ width: "30%", margin: "auto" }}>
                    <h1>Home page</h1>
                    <Input type="text" placeholder="enter list item" onChange={(e) => this.setState({ item: e.target.value })} style={{ padding: 10, width: "100%" }} />
                    <Button onClick={(item, uid) => this.props.getData(this.state.item)}>add data</Button>
                    {this.state.data ? <h1>data get successfully</h1> : <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />}
                </div>

                <div className="cover" style={{ display: this.state.screen }}></div> */}

            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        data: state.getData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: (item, uid) => dispatch(getData(item, uid)),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
