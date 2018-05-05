// import LocationImage from './image/LocationImage';
import LocationAddress from './address/LocationAddress';
import LocationName from './location-name/LocationName';
import OrganizationName from './organization-name/OrganizationName';
import LocationNumber from './number/LocationNumber';
import LocationWebsite from './website/LocationWebsite';
import OrganizationDescription from './description/OrganizationDescription';
// import AdditionalInfo from './additional-info/AdditionalInfo';

const routes = [
  // TODO: re-enable when support is added to db
  //  ["questions/entrance-picture", LocationImage, "Entrance picture", true],
  ['questions/location-address', LocationAddress, 'Address', 'address', 'address_1'],
  ['questions/organization-name', OrganizationName, 'Organization name', 'organization', 'name'],
  ['questions/location-name', LocationName, 'Location name', 'location', 'name'],
  ['questions/location-description', OrganizationDescription, 'Organization description', 'organization', 'description'],
  ['questions/phone-number', LocationNumber, 'Phone number', 'location', 'phones'],
  ['questions/website', LocationWebsite, 'Website','organization','url'],
  // TODO: re-enable when support is added to db
  //  ["questions/additional-info", AdditionalInfo, "Additional info"]
];

export default routes;
