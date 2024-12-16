import React from 'react';
import FeatureGrid from '../../UI/FeatureGrid';
import { DEFLATIONARY_FEATURES } from './constants';

export default function DeflationaryFeatures() {
  return (
    <FeatureGrid features={DEFLATIONARY_FEATURES} columns={2} />
  );
}