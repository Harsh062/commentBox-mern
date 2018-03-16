import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import CommentBox from './components/CommentBox';

ReactDOM.render(<CommentBox />, document.getElementById('root'));
registerServiceWorker();
