import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withProps } from 'recompose';
import ServiceOpeningHoursEdit from './ServiceOpeningHoursEdit';
import ServiceOpeningHoursView from './ServiceOpeningHoursView';
import { getService, getServiceWhoDoesItServe, getServiceId } from '../../../selectors/service';
import * as actions from '../../../actions';
import { Form } from '../../../components/form';

const FormComponent = compose(withProps({
  ViewComponent: ServiceOpeningHoursView,
  EditComponent: ServiceOpeningHoursEdit,
  isEditing: (value) => typeof value !== 'object'
}))(props => <Form {...props} />);

const mapStateToProps = (state, ownProps) => ({
  resourceData: getService(state, ownProps),
  value: getServiceWhoDoesItServe(state, ownProps),
  id: getServiceId(ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchResourceData: bindActionCreators(actions.getLocation, dispatch),
  updateValue: (whoDoesItServe, serviceId, metaDataSection, fieldName) =>
    dispatch(actions.updateService({
      locationId: ownProps.match.params.locationId,
      serviceId,
      params: { whoDoesItServe },
      metaDataSection,
      fieldName,
    })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
