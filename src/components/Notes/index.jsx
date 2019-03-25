import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({title, content}) => (<>
		<h2 className="notes">{title}</h2>
		<p className="notes">{content}</p>
</>);
Notes.propTypes = {
		title: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
};
export default Notes;
