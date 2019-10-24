import React, { useEffect, useRef } from 'react';
import {
	PortfolioItemName,
	PortfolioItemDescription,
	PortfolioButton,
} from '../Component.style';
import {
	PortfolioItemContentHeader,
	PortfolioItemBlurb,
	PortfolioContentArea,
} from './Component.style';

// TODO tests
const PortfolioContentGenerator = ({ type, value }) => {
	switch (type) {
		case 'paragraph':
			return (
				<PortfolioItemDescription data-testid="portfolio-item-content">
					{value}
				</PortfolioItemDescription>
			);
		case 'blurb':
			return (
				<PortfolioItemBlurb data-testid="portfolio-item-content">
					{value}
				</PortfolioItemBlurb>
			);
		default:
			return null;
	}
};

const PortfolioEntryDetails = ({
	item: { name, description, content },
	onChange,
	...restProps
}) => {
	const headingRef = useRef(null);
	useEffect(() => {
		headingRef.current.scrollIntoView();
	}, []);
	return (
		<div>
			<PortfolioItemContentHeader ref={headingRef}>
				<PortfolioItemName>{name}</PortfolioItemName>
				<PortfolioButton onClick={() => onChange(null)}>
					Go back
				</PortfolioButton>
			</PortfolioItemContentHeader>
			<PortfolioContentArea>
				<PortfolioItemDescription>{description}</PortfolioItemDescription>
				{content.map(({ type, value }, index) => (
					<React.Fragment key={name + index}>
						{PortfolioContentGenerator({ type, value })}
					</React.Fragment>
				))}
			</PortfolioContentArea>
		</div>
	);
};

export default PortfolioEntryDetails;
