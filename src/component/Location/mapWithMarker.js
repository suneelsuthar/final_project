// import React, { Component } from 'react'
// import { compose, withProps } from 'recompose'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// const MapComponent = compose(
//   withProps({
//     googleMapURL:"https://maps.googleapis.com/maps/api/js?key=APIKEY&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// export default MapComponent
// // reactjs google-maps geolocation