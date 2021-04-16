import {
  componentColor,
  fontTitleColor,
  primaryColor,
} from '../../style/const';
import { Box } from '@material-ui/core';
import React from 'react';

const Element = ({ title, text }) => (
  <div style={{ width: '30%', marginLeft: -10 }}>
    <p
      style={{
        fontSize: 12,
        fontWeight: '600',
        height: '10%',
        textTransform: 'uppercase',
      }}
    >
      {title}
    </p>
    <p
      style={{
        fontSize: 12,
        fontWeight: '600',
        color: fontTitleColor,
        height: '10%',
        marginLeft: 4,
      }}
    >
      {text}
    </p>
  </div>
);
export const Item = ({ ticket }) => {
  const getTimeFromMin = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };
  return (
    <Box
      boxShadow={2}
      style={{
        backgroundColor: componentColor,
        height: 180,
        width: '100%',
        borderRadius: 5,
        marginBottom: 20,
      }}
    >
      <Box display="flex" flexDirection="row">
        <Box p={1} mr={50} ml={3} mt={-1} flexShrink={0}>
          <p
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: primaryColor,
            }}
          >
            {`${ticket.price} ₽`}
          </p>
        </Box>
        <Box p={1} mt={1} flexShrink={0}>
          {/*<img src="/images/logo.png" />*/}
        </Box>
      </Box>
      {ticket.segments.map((segment) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: -16,
          }}
        >
          <Element
            title={`${segment.origin} - 
            ${segment.destination}`}
            text={`${segment.date.replace(/.*T/, '').replace(/:00.000.*/, '')}`}
          />
          <Element title="В пути" text={getTimeFromMin(segment.duration)} />
          <Element
            title={
              segment.stops.length !== 0
                ? segment.stops.length === 1
                  ? '1 пересадка'
                  : `${segment.stops.length} пересадки`
                : 'без пересадoк'
            }
            text={
              segment.stops.length > 0
                ? segment.stops.map((stop) => `${stop} `)
                : ''
            }
          />
        </div>
      ))}
    </Box>
  );
};
