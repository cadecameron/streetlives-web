import React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { selectLocationData, selectLocationError } from '../../../../selectors/location';
import { updateLocation, getLocation } from '../../../../actions';
import { Form, FormEdit, FormView } from '../../../../components/form';

const EditComponent = compose(withProps({
  headerText: "What's this location's address?",
  placeholderText: 'Enter the address of the location',
}))(props => <FormEdit {...props} />);

const ViewComponent = compose(withProps({
  topText: 'LOCATION ADDRESS',
}))(props => <FormView {...props} />);

const LocationAddress = compose(withProps({
  ViewComponent,
  EditComponent,
}))(props => <Form {...props} />);

const mapStateToProps = (state, ownProps) => {
  const locationData = selectLocationData(state, ownProps);
  const locationError = selectLocationError(state, ownProps);

  return {
    value: selectValue(locationData),
    resourceData: locationData,
    resourceLoadError: locationError,
  };
};

export const selectValue = locationData => (
  locationData && locationData.address && locationData.address && locationData.address.street
    ? locationData.address.street
    : null
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateValue: (newAddress, _, metaDataSection, fieldName) =>
    dispatch(updateLocation(
      ownProps.match.params.locationId,
      { address: { street: newAddress } },
      metaDataSection,
      fieldName,
    )),
  fetchResourceData: (locationId) => {
    dispatch(getLocation(locationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationAddress);
