import React from 'react';
import './index.css';
import {state, subscribe} from './redux/state';
import {renderTree} from "./render";


subscribe(renderTree)
renderTree()


