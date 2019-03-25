import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import TabbedContent from '../../components/TabbedContent';
import PersonalInformation from '../../components/PersonalInformation';
import Notes from '../../components/Notes';

import user1Img from '../../assets/images/user.png';
import user2Img from '../../assets/images/user@2x.png';
import user3Img from '../../assets/images/user@3x.png';

const App = ({ title, subHead}) => (
		<Col lg="11" sm={12} className="wrapper">
				<Row>
						<Col lg={6} className="col-lg-6 p-card">
								<h1>{title}</h1>
								<p>{subHead}</p>
								<PersonalInformation
										title="Personal Information"
										dob="25.10.1985"
										email="diego.morata@domain.co.uk"
										images={[user1Img, `${user2Img} 2x`, `${user3Img} 3x`]}
								/>
								<TabbedContent tabHeadings={[
										{name: 'Address', id: 1},
										{name: 'Subscribe', id: 2}]
								}/>
						</Col>
						<Col lg={6}>
								<Col lg={11} className="p-card right">
										<div className="arrow-up d-lg-none"/>
										<div className="arrow-left d-none d-lg-block"/>
										<Notes
												title="Notes"
												content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitursagittis sit amet sem eget gravida.
										Duis tellus est, pharetra ac bibendum eu, consequat sed dolor. Duis mollis, augue adignissim
										congue, mi felis interdum sapien, nec pellentesque eros erat sed diam. Sed pharetra lobortis interdum. "
										/>
								</Col>
						</Col>
				</Row>
		</Col>
);
App.propTypes = {
		title: PropTypes.string.isRequired,
		subHead: PropTypes.string.isRequired,
};
export default App;
