import React, { Fragment, useState } from 'react';
import { Button, Col, Form, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import PropTypes from 'prop-types';

import houseSvg from '../../assets/images/house.svg';
import './override.css';

const TabbedContent = ({tabHeadings}) => {
		const [activeTab, setActiveTab] = useState(1);
		return <Fragment>
				<Nav pills className="nav-pills">
						{tabHeadings.map(({name, id}) => <NavItem key={id}>
								<NavLink
										className={`pointer-cursor nav-link ${activeTab === id ? 'active' : ''}`}
										onClick={() => setActiveTab(id)}
								>
										{name}
								</NavLink>
						</NavItem>)}
				</Nav>
				<TabContent activeTab={activeTab} className="pt-3">
						<TabPane tabId={1}>
								<Row>
										<Col md={4}>
												<img src={houseSvg} className="mr-3" alt=""/>
										</Col>

										<Col md={8} className="mt-mobile">
												<p className="address-item">3309 Franecki Dam Apt. 701</p>
												<div className="rectangle"/>
												<p className="address-item"> London - United Kingdom</p>
												<div className="rectangle"/>
												<button className="btn btn-custom">Change</button>
										</Col>
								</Row>
						</TabPane>
						<TabPane tabId={2}>
								<Row>
										<Col lg="8">
												<Form>
														<Input type="email" className="input-custom" placeholder="Email address"/>
														<Button type="submit" className="btn btn-custom">Subscribe</Button>
												</Form>
										</Col>
								</Row>
						</TabPane>
				</TabContent>
		</Fragment>;
};
TabbedContent.propTypes = {
		tabHeadings: PropTypes.shape({
				name: PropTypes.string.isRequired,
				id: PropTypes.number.isRequired,
		}).isRequired,
};
export default TabbedContent;
