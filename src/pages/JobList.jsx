// JobList.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import ReactSlider from 'react-slider';
import './SalarySlider.css';

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

  const dummyJobs = [
    {
      _id: 'dummy1',
      jobTitle: 'Full Stack Developer',
      companyName: 'Amazon',
      location: 'Chennai',
      jobType: 'Remote',
      salaryMin: 6,
      salaryMax: 12,
      applicationDeadline: new Date().toISOString(),
    },
    {
      _id: 'dummy2',
      jobTitle: 'Frontend Developer',
      companyName: 'Google',
      location: 'Bangalore',
      jobType: 'Onsite',
      salaryMin: 8,
      salaryMax: 14,
      applicationDeadline: new Date().toISOString(),
    },
    {
      _id: 'dummy3',
      jobTitle: 'Backend Developer',
      companyName: 'Microsoft',
      location: 'Hyderabad',
      jobType: 'Hybrid',
      salaryMin: 10,
      salaryMax: 16,
      applicationDeadline: new Date().toISOString(),
    },
    {
      _id: 'dummy4',
      jobTitle: 'Software Engineer Intern',
      companyName: 'Netflix',
      location: 'Remote',
      jobType: 'Internship',
      salaryMin: 2,
      salaryMax: 4,
      applicationDeadline: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await getJobs();
        setJobs([...dummyJobs, ...response.data]);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs(dummyJobs);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const titleMatch = job.jobTitle?.toLowerCase().includes(filters.jobTitle.toLowerCase()) || filters.jobTitle === '';
      const locationMatch = job.location?.toLowerCase().includes(filters.location.toLowerCase()) || filters.location === '';
      const typeMatch = job.jobType === filters.jobType || filters.jobType === '';
      const salaryMatch =
        (job.salaryMin >= filters.salaryRange[0] && job.salaryMax <= filters.salaryRange[1]) ||
        job.salaryMin === null || job.salaryMax === null;

      return titleMatch && locationMatch && typeMatch && salaryMatch;
    });
  }, [jobs, filters]);

  const displayJobs = [...dummyJobs, ...filteredJobs];

  return (
    <Container size="xl">
      <Title className="find text-xl sm:text-2xl md:text-3xl font-bold text-center" order={2} mb="lg">
        Find Your Dream Job
      </Title>

      {/* Filters */}
      <div className="filter w-full flex flex-wrap md:flex-row gap-3 items-center bg-white p-2 rounded-lg shadow-sm">
        {/* Job Title */}
        <div className="search-job relative w-full md:w-1/4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="icon-f w-full md:flex-1 h-4 text-gray-400" />
          </div>
          <input 
            type="text" 
            className="job-title input-box w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search By Job Title, Role"
            value={filters.jobTitle}
            onChange={(e) => handleFilterChange('jobTitle', e.target.value)}
          />
        </div>

        {/* Location */}
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

        {/* Salary */}
        <div className="salary-range w-full md:w-1/3 px-1">
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-600">Salary (in LPA)</span>
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
          {filteredJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}

export default JobList;
