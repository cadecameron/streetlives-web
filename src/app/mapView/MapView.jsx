import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { getLocations, getOrganizations } from '../../services/api';
import Map from '../../components/map';
/* eslint-env es6 */

const defaultCenter = { lat: 40.7831, lng: -73.9712 };
const defaultZoom = 14;
const minZoom = 11;

const geolocationTimeout = 5000;
const fetchLocationsDebouncePeriod = 500;

export default class MapView extends Component {
  state = {
    searchString: '',
    center: defaultCenter,
    radius: null,
    suggestions : []
  };

  onSearchChanged = event => {
    const searchString = event.target.value;
    if(searchString){ 
      this.onSuggestionsFetchRequested({searchString});
    } else {
      this.onSuggestionsClearRequested();
    }
  };

  onBoundsChanged = ({center, radius}) => {
    this.setState({ center: {lat: center.lat(), lng: center.lng()} , radius }, () => {
      this.fetchLocations();
    });
  }

  onSuggestionsFetchRequested = ({ searchString, reason }) => {
    getOrganizations(searchString)
      .then(organizations => { 
          console.log('organizations ', organizations );
          this.setState({ suggestions : organizations })
      })
      .catch(e => console.error('error', e));
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  fetchLocations = () => {
    if(!this.state.radius) return;
    getLocations({
      latitude: this.state.center.lat,
      longitude: this.state.center.lng,
      radius: Math.floor(this.state.radius)
    })
      .then(locations => this.setState({ locations }))    //TODO: we can save these in the redux store
      .catch(e => console.error('error', e));
  };

  render() {
    const { searchString, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type the address, or drop a pin',
      value : searchString,
      onChange: this.onSearchChanged
    };

    return (
      <div className="Map">
        <ul className="suggestions"
          style={{
            position: 'absolute',
            top: '2.75em',
            background: 'white',
            listStyle: 'none',
            paddingLeft: 0, 
            zIndex: 1,
            left: '.5em',
            right: '.5em',
            textAlign: 'left',
            transition: 'max-height 1s',
            maxHeight: this.state.suggestions.length ? `${window.innerHeight-50}px` : '0px',
            overflow: 'scroll'
          }}>
          {
            this.state.suggestions && this.state.suggestions.map( (suggestion, i) => (
              <li 
                key={suggestion.id} 
                style={{
                  borderTop: i === 0 ? '1px solid black' : undefined,
                  borderBottom:'1px solid black'
                }}>
                  {suggestion.name}
              </li>
            ))
          }
        </ul>
        <div
          style={{
            backgroundColor: '#323232',
            position: 'absolute',
            left: 0,
            top: '0em',
            right: 0,
          }}
        >
          <div className="input-group" style={{ padding: '.5em' }}>
            <div className="input-group-prepend">
              <span
                style={{ backgroundColor: 'white', border: 'none', borderRadius: 0 }}
                className="input-group-text"
              >
                <i className="fa fa-search" />
              </span>
            </div>
            <input
              onChange={this.onSearchChanged}
              style={{ border: 'none', borderRadius: 0 }}
              type="text"
              className="form-control"
              placeholder="Type the address, or drop a pin"
              required
            />
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, top: '3.2em', right: 0, bottom: 0 }}>
          <Map
            locations={this.state && this.state.locations}
            options={{ 
              minZoom, 
              disableDefaultUI: true, 
              gestureHandling: 'greedy',
              clickableIcons: false,
              styles:[
                  {
                      featureType: "poi",
                      elementType: "labels",
                      stylers: [
                            { visibility: "off" }
                      ]
                  }
              ]
            }}
            defaultZoom={defaultZoom}
            defaultCenter={defaultCenter}
            onBoundsChanged={this.onBoundsChanged}
          />
        </div>
      </div>
    );
  }
}
