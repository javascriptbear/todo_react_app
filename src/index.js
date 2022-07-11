import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
