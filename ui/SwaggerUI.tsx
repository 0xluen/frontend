/* eslint-disable @typescript-eslint/naming-convention */
const SwaggerUIReact = dynamic(() => import('swagger-ui-react'), {
  loading: () => <Spinner/>,
  ssr: false,
});

import { Box, Spinner, useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';

import spec from '../lib/spec.json';

import 'swagger-ui-react/swagger-ui.css';

const NeverShowInfoPlugin = () => {
  return {
    components: {
      SchemesContainer: () => null,
      ServersContainer: () => null,
      InfoContainer: () => null,
    },
  };
};

const SwaggerUI = () => {
  const swaggerStyle = {
    '.scheme-container, .opblock-tag': {
      display: 'none',
    },
    '.swagger-ui': {
      color: useColorModeValue('blackAlpha.800', 'whiteAlpha.800'),
    },
    '.swagger-ui .opblock-summary-control:focus': {
      outline: 'none',
    },
    // eslint-disable-next-line max-len
    '.swagger-ui .opblock .opblock-summary-path, .swagger-ui .opblock .opblock-summary-description, .swagger-ui div, .swagger-ui p, .swagger-ui h5, .swagger-ui .response-col_links, .swagger-ui h4, .swagger-ui table thead tr th, .swagger-ui table thead tr td, .swagger-ui .parameter__name, .swagger-ui .parameter__type, .swagger-ui .response-col_status, .swagger-ui .tab li, .swagger-ui .opblock .opblock-section-header h4': {
      color: 'unset',
    },
    '.swagger-ui input': {
      color: 'blackAlpha.800',
    },
    '.swagger-ui .opblock .opblock-section-header': {
      background: useColorModeValue('whiteAlpha.800', 'blackAlpha.800'),
    },
  };

  return (
    <Box sx={ swaggerStyle }>
      <SwaggerUIReact spec={ spec } plugins={ [ NeverShowInfoPlugin ] }/>
    </Box>
  );
};

export default SwaggerUI;