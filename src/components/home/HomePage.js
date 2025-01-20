import React from 'react';
import InAssociatedWith from "@/components/home/InAssociationWith.js";
import ScholarshipApp from './ScholarshipApp';
import UberForScholarship from './UberForScholarship';
import ScholarshipEligibility from './ScholarshipEligibility';
import Schools from './Schools';
import Community from './Community';
import ScholarshipCommunity from './ScholarshipCommunity';
import MobileHero from './MobileHero';
import Hero from './Hero';
const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <UberForScholarship />
      <ScholarshipCommunity />
      <Community />
      <Schools />
      <ScholarshipEligibility />      
      <ScholarshipApp />
      <InAssociatedWith />
    </div>
  );
}

export default HomePage;
