// JobList.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import ReactSlider from 'react-slider';
import './SalarySlider.css';
import { useLocation } from 'react-router-dom';


import {
  Container,
  Title,
  SimpleGrid,
  Loader,
  Center,
} from '@mantine/core';
import JobCard from '../components/JobCard';
import { getJobs } from '../services/api';

export function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    salaryRange: [0, 20],
  });

  const location = useLocation();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.jobTitle?.toLowerCase().includes(filters.jobTitle.toLowerCase()) || filters.jobTitle === '';
    const locationMatch = job.location?.toLowerCase().includes(filters.location.toLowerCase()) || filters.location === '';
    const typeMatch = job.jobType === filters.jobType || filters.jobType === '';
    const salaryMatch =
      (job.salaryMin >= filters.salaryRange[0] && job.salaryMax <= filters.salaryRange[1]) ||
      job.salaryMin === null ||
      job.salaryMax === null;

    return titleMatch && locationMatch && typeMatch && salaryMatch;
  });

  const dummyJobs = [
    {
      _id: '1',
      jobTitle: 'Full Stack Developer',
      companyName: 'Amazon',
      location: 'Chennai',
      jobType: 'Remote',
      salaryMin: 6,
      salaryMax: 12,
      applicationDeadline: new Date().toISOString(),
    }
  ];

  const displayJobs = jobs.length > 0 ? filteredJobs : dummyJobs;

  
  
  return (
    <Container size="xl">
      <Title className='find' order={2} mb="lg">
        Find Your Dream Job
      </Title>

      {/* Filter Section */}
      <div className="filter w-full flex flex-col md:flex-row gap-3 items-center bg-white p-2 rounded-lg shadow-sm">
      {/* Search by Job Title */}
<div className="search-job relative w-full md:w-1/4">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <Search className="icon-f w-4 h-4 text-gray-400" />
  </div>
  <input 
    type="text" 
    className="job-title input-box w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    placeholder="Search By Job Title, Role"
    value={filters.jobTitle}
    onChange={(e) => handleFilterChange('jobTitle', e.target.value)}
  />
</div>

      
      {/* Preferred Location */}
<div className="location-home relative w-full md:w-1/5">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <MapPin className="icon-f w-4 h-4 text-gray-400" />
  </div>
  <select
    className="input-box w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={filters.location}
    onChange={(e) => handleFilterChange('location', e.target.value)}
  >
    <option value="">Preferred Location</option>
    <option value="remote">Remote</option>
    <option value="bangalore">Bangalore</option>
    <option value="hyderabad">Hyderabad</option>
    <option value="chennai">Chennai</option>
  </select>
</div>

      
      {/* Job Type */}
      {/* Job Type */}
<div className="job-type relative w-full md:w-1/5">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <Briefcase className="icon-f w-4 h-4 text-gray-400" />
  </div>
  <select
    className="input-box w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    value={filters.jobType}
    onChange={(e) => handleFilterChange('jobType', e.target.value)}
  >
    <option value="">Job type</option>
    <option value="Onsite">Onsite</option>
    <option value="Remote">Remote</option>
    <option value="Hybrid">Hybrid</option>
    <option value="Internship">Internship</option>
  </select>
</div>

      
      {/* Salary Range */}
      {/* Salary Range */}
<div className="salary-range w-full md:w-1/3 px-1">
  <div className="flex justify-between mb-1">
    <span className="text-sm text-gray-600">Salary (in LPA) </span>
    <span className="text-sm text-gray-600">
    ₹{filters.salaryRange[0]}L - ₹{filters.salaryRange[1]}L
    </span>
  </div>
  <ReactSlider
    className="horizontal-slider"
    thumbClassName="thumb"
    trackClassName="track"
    min={0}
    max={20}
    step={1}
    value={filters.salaryRange}
    onChange={(value) => handleFilterChange('salaryRange', value)}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    pearling
    minDistance={1}
  />
</div>

    </div>

      {/* Jobs Grid */}
      {loading ? (
        <Center mt="xl">
          <Loader />
        </Center>
      ) : (
        <SimpleGrid
          className='job-grid'
          cols={4}
          spacing="md"
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          {displayJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}

export default JobList;
