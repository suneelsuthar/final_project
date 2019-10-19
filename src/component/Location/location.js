import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default class Location extends React.Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            this.setState({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            })
        });
    }




    render() {
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
            >
                {props.isMarkerShown && <Marker draggable={true} position={{lat: this.state.lat, lng: this.state.lng}} />}
            </GoogleMap>
        ))
        console.log(this.state.location)
        return (
            <div>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `80%` }} />}
                    containerElement={<div style={{ height: `270px` }} />}
                    mapElement={<div style={{ height: `80%` }} />}
                />
            </div>
        )
    }
}