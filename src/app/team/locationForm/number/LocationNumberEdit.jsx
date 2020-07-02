import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { getPhoneNumber } from '../../../../selectors/location';
import { updatePhone, createPhone } from '../../../../actions';

import Header from '../../../../components/header';
import Input from '../../../../components/input';
import Button from '../../../../components/button';

const parsePhoneNumber = phone =>
  (phone && phone.number ?
    phone.number.split(/[. )(-]+/).filter(d => d) :
    ['', '', '']);

class LocationNumberEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areaCode: '',
      firstThree: '',
      lastFour: '',
      extension: '',
      type: '',
      phoneNumber: '',
    };

    this.keyToMaxDigits = {
      areaCode: 3,
      firstThree: 3,
      lastFour: 4,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    Object.keys(this.state).forEach((k) => {
      this[`onChange_${k}`] = this.onChange.bind(this, k);
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.phone && props.phone.number !== state.phoneNumber) {
      const [areaCode, firstThree, lastFour] = parsePhoneNumber(props.phone);
      return {
        areaCode,
        firstThree,
        lastFour,
        extension: (props.phone && props.phone.extension) || '',
        type: (props.phone && props.phone.type) || '',
        phoneNumber: props.phone && props.phone.number,
      };
    }

    return null;
  }

  onChange(key, event) {
    let { value } = event.target;
    const maxLength = this.keyToMaxDigits[key];
    value = value.length > maxLength ? value.slice(0, maxLength) : value; // truncate
    this.setState({ [key]: value });
  }

  onSubmit(e) {
    e.preventDefault();
    const number = [this.state.areaCode, this.state.firstThree, this.state.lastFour].join('.');

    const params = {
      number,
      extension: parseInt(this.state.extension, 10) || null,
    };

    if (this.state.type) {
      params.type = this.state.type;
    }

    this.props.updateValue(
      params,
      this.props.match.params.phoneId,
    );

    this.props.onDone();
  }

  onCancel() {
    this.props.onDone();
  }

  render() {
    return (
      <form
        ref={(e) => {
          this.form = e;
        }}
        className="container"
        onSubmit={this.onSubmit}
      >
        <Header>What&apos;s this location&apos;s phone number?</Header>
        (<Input
          onFocus={this.props.onInputFocus}
          onBlur={this.props.onInputBlur}
          customValidationMessage="Area code must contain three digits"
          type="tel"
          value={this.state.areaCode}
          onChange={this.onChange_areaCode}
          pattern="\d{3}"
          size="3"
          required
        />)&nbsp;-&nbsp;
        <Input
          onFocus={this.props.onInputFocus}
          onBlur={this.props.onInputBlur}
          customValidationMessage="Enter first three digits for phone number"
          type="tel"
          value={this.state.firstThree}
          onChange={this.onChange_firstThree}
          size="3"
          pattern="\d{3}"
          required
        />&nbsp;-&nbsp;
        <Input
          onFocus={this.props.onInputFocus}
          onBlur={this.props.onInputBlur}
          customValidationMessage="Enter last four digits for phone number"
          type="tel"
          value={this.state.lastFour}
          onChange={this.onChange_lastFour}
          pattern="\d{4}"
          required
          size="4"
        />&nbsp;ext.&nbsp;
        <Input
          onFocus={this.props.onInputFocus}
          onBlur={this.props.onInputBlur}
          type="tel"
          size="4"
          value={this.state.extension}
          onChange={this.onChange_extension}
        />

        <Input
          placeholder="Type (e.g. Main Office, Hotline, Spanish, etc)"
          fluid
          value={this.state.type}
          onChange={this.onChange_type}
          required
        />

        <div>
          <input type="submit" className="Button Button-primary mt-3" value="OK" />&nbsp;
          <Button onClick={this.onCancel} basic primary className="mt-3">
            CANCEL
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  phone: getPhoneNumber(state, ownProps),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateValue: (params, phoneId) =>
    dispatch((phoneId ? updatePhone : createPhone)(
      ownProps.match.params.locationId,
      phoneId,
      params,
      'location',
      'phones',
    )),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationNumberEdit));
