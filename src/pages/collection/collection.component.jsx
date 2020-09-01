import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log('->', collection)
  return (
    <div className='category'>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
};

const mapstateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapstateToProps)(CollectionPage);

