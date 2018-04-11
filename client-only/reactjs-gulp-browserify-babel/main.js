var path = require('path');
import {render} from 'react-dom';
import App from 'src/client/public/index.jsx';

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var entry_file = APP_DIR + '/index.jsx';

render(<App/>, document.getElementById('app'));