import React from 'react';
import FeatureGrid from '../../UI/FeatureGrid';
import { BUSINESS_FEATURES } from './constants';

export default function BusinessFeatures() {
  return (
    <FeatureGrid features={BUSINESS_FEATURES} columns={2} />
  );
}