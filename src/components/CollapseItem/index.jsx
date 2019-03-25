import React, { useState } from 'react';
import { CardBody, Collapse, Card, CardHeader } from 'reactstrap';
import PropTypes from 'prop-types';

import plusSvg from '../../assets/images/plus.svg';
import minusSvg from '../../assets/images/minus.svg';

import './overide.css';
const CollapseItem = (props) => {
		const [open, toggle] = useState(false);

		return (
				<div>
						<Card className="card">
								<CardHeader className="pointer-cursor card-header" onClick={() => toggle(!open)}>
										<div>
												<h5 className={`override-card-title my-1${open ? ' active' : ''}`}>
														<img className="mr-2" src={open ? minusSvg : plusSvg} alt="..."/>
														{props.title}
												</h5>
										</div>
								</CardHeader>
								<Collapse
										isOpen={open}
								>
										<CardBody className="override-card-body">
												{props.children}
										</CardBody>
								</Collapse>
						</Card>

				</div>
		);
};

CollapseItem.propTypes = {
		title: PropTypes.string,
		children: PropTypes.node.isRequired,
};
CollapseItem.defaultProps = {
		title: '',
};

export default CollapseItem;
