import React from 'react'
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import Pagination from '../components/Pagination';
import ItemsSection from '../components/ItemsSection';
const UserDashboard = () => {
  return (
    <div>
    <HeroSection />
    <CategoriesSection />
    <ItemsSection />
    <Pagination />
    </div>
  )
}

export default UserDashboard