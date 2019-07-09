import React, {Component} from "react";
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";
import { TextField } from "@material-ui/core";

// const styles = {
//   locationBox: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 'auto',
//     padding: '15px',
//     flexDirection: 'column',
//     borderRadius: '3px',
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//   }
// }

const MY_API_KEY = "AIzaSyCG9gSKT-k5VxF2VPKYlGg85QJw1fO99zg";
 
export default class GoogleSuggest extends Component {
    state = {
        search: "",
        value: "",
    }
 
    handleInputChange = e => {
        this.setState({search: e.target.value, value: e.target.value});
        this.props.handleLocationChange(e.target.value);
    }
 
    handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
        console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
        this.setState({search: "", value: geocodedPrediction.formatted_address});
        this.props.handleLocationChange(geocodedPrediction.formatted_address);
    }
    
    handleNoResult = () => {
        console.log('No results for ', this.state.search);
    }
 
    handleStatusUpdate = (status) => {
        console.log(status);
    }
 
    render() {
        const {search, value} = this.state;
        return (
          <div className='box'>
            <ReactGoogleMapLoader
                params={{
                    key: MY_API_KEY,
                    libraries: "places,geocode",
                }}
                render={googleMaps =>
                    googleMaps && (
                      
                        <ReactGooglePlacesSuggest
                            googleMaps={googleMaps}
                            autocompletionRequest={{
                                input: search,
                                
                            }}
                            onNoResult={this.handleNoResult}
                            onSelectSuggest={this.handleSelectSuggest}
                            onStatusUpdate={this.handleStatusUpdate}
                            textNoResults="My custom no results text" 
                            customRender={prediction => (
                                <div className="customWrapper">
                                    {prediction
                                        ? prediction.description
                                        : "My custom no results text"}
                                </div>
                            )}
                        >
                            <TextField
                              id='locationField'
                              value={value}
                              label='Location'
                              onChange={this.handleInputChange}
                            />
                        </ReactGooglePlacesSuggest>
                      
                    )
                }
            />
          </div>
        )
    }
}