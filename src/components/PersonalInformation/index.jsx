import React from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';

import CollapseItem from '../../components/CollapseItem';
import './override.css';

const PersonalInformation = ({title, dob, email, images}) => (<>
		<h2 className="title">{title}</h2>
		<CollapseItem title="Diego Morata">
				<Media className="media align-items-center">
						<Media left href="#">
								<img src={images.shift()}
										 srcSet={images.toString()}
										 className="align-self-center mr-3" alt="..."/>
						</Media>
						<Media body>
								<p className="personal-info" >
										{dob}
										<br/>
										{email}
								</p>
						</Media>
				</Media>
		</CollapseItem>
		<CollapseItem title="Family">
				<p className="personal-info">No content here</p>
		</CollapseItem>
</>);
PersonalInformation.propTypes = {
		title: PropTypes.string.isRequired,
		dob: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PersonalInformation;
