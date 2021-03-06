import React from 'react';
import moment from 'moment';
import { DAYS } from '../../../Constants';
import { getCategoryIcon } from '../../../services/iconography';
import Icon from '../../../components/icon';
import PhoneLink from '../../../components/phoneLink';
import InfoItem from './InfoItem';
import ServiceRestrictions from './ServiceRestrictions';
import ServiceOfferings from './ServiceOfferings';
import './locationDetails.css';

const renderSchedule = (schedule) => {
  if (schedule.length === 7 &&
    schedule.every(day => day.opens_at === '00:00:00' && day.closes_at === '23:59:00')) {
    return 'Open 24/7';
  }

  const dayNumberToName = weekday => DAYS[weekday - 1];

  const formatHour = time => moment(time, 'HH:mm:ss').format('LT').replace(':00 ', ' ');
  const formatHours = (opens, closes) => `${formatHour(opens)} to ${formatHour(closes)}`;

  const formatRange = ({ start, end }) => {
    if (end === start) {
      return dayNumberToName(start);
    }
    if (end === start + 1) {
      return `${dayNumberToName(start)} & ${dayNumberToName(end)}`;
    }
    return `${dayNumberToName(start)} to ${dayNumberToName(end)}`;
  };

  const orderedSchedule = schedule.sort(({ weekday: day1 }, { weekday: day2 }) => day1 - day2);

  const daysGroupedByHours = orderedSchedule.reduce((grouped, day) => {
    const hoursString = formatHours(day.opens_at, day.closes_at);
    return { ...grouped, [hoursString]: [...(grouped[hoursString] || []), day.weekday] };
  }, {});

  const groupStrings = Object.keys(daysGroupedByHours).map((hoursString) => {
    const dayRanges = [];
    const remainingWeekdays = daysGroupedByHours[hoursString];

    while (remainingWeekdays.length) {
      const currentDayRange = dayRanges[dayRanges.length - 1];
      const day = remainingWeekdays.shift();

      if (currentDayRange && currentDayRange.end === day - 1) {
        currentDayRange.end = day;
      } else {
        dayRanges.push({ start: day, end: day });
      }
    }

    return `${dayRanges.map(formatRange).join(', ')} ${hoursString}`;
  });

  return `Open ${groupStrings.join(', ')}`;
};

const CategoryCard = ({ category, services, className }) => (
  <div
    className="categoryCard"
    style={{
      backgroundColor: '#F8F8FC',
      border: '1px solid #DADADA',
    }}
  >
    <div className="serviceCategoryHeadersContainer">
      <div className="serviceCategoryHeaders">{category}</div>
      <Icon
        name={getCategoryIcon(category)}
        size="2x"
      />
    </div>

    {services.map((service, i) => (
      <div
        key={service.id}
        style={{ borderBottom: i === services.length - 1 ? '0' : '1px solid #DADADA', paddingBottom:'1.3vh' }}
      >
        <div size="medium" className="specificServiceHeaders">
          {service.name || service.Taxonomies[0].name}
        </div>

        {!!service.description && (
          <div className="serviceDescription">
            {service.description}
          </div>
        )}

        <ServiceRestrictions
          eligibilities={service.Eligibilities}
          requiredDocuments={service.RequiredDocuments}
        />

        {service.RegularSchedules && service.RegularSchedules.length > 0 && (
          <InfoItem icon="clock">{renderSchedule(service.RegularSchedules)}</InfoItem>
        )}

        {service.Phones && service.Phones.map(phone => (
          <InfoItem key={phone.id} icon="phone">
            <PhoneLink {...phone} className="locationLinks" />
          </InfoItem>
        ))}

        <ServiceOfferings attributes={service.ServiceTaxonomySpecificAttributes} />
      </div>
    ))}
  </div>
);

export default CategoryCard;
