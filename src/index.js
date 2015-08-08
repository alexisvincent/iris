import React from 'react'

export {Iconic, default as iconic} from './Iconic'

// Dom Elements
export var div = React.createFactory('div');
export var span = React.createFactory('span');
export var b = React.createFactory('b');
export var img = React.createFactory('img');

/*
 * Shorthand for React.createElement
 */
export function el(component, props = null, children = null) {
	return React.createElement(component, props, children);
}