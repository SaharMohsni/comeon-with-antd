import React from 'react';
import PropTypes from 'prop-types';
import './category-filter-section.scss';

const CategoryFilterSection = ({ categoriesList, setFilterBy, filterByKey }) => {
	// Filter by category function
	const handleFilterByCategory = (categoryId) => {
		setFilterBy(categoryId);
	};

	// Render categories
	const renderCategories = () => {
		return categoriesList.map((category) => {
			return (
				<div
					className={`${filterByKey === category.id &&
						'is-clicked'} category-filter-section__filter-section__content__filter-element`}
					key={category.id}
					onClick={() => handleFilterByCategory(category.id)}
				>
					{category.name}
				</div>
			);
		});
	};
	return (
		<div>
			<h1 className="category-filter-section__filter-section__title">Categories</h1>
			<div className="category-filter-section__filter-section__content">{renderCategories()}</div>
		</div>
	);
};
CategoryFilterSection.propTypes = {
	/**
     * Categories list
     */
	categoriesList: PropTypes.array.isRequired,
	/**
     * Get category filter data
     */
	setFilterBy: PropTypes.func,
	/**
     * filter key
     */
	filterByKey: PropTypes.string
};

export default CategoryFilterSection;
