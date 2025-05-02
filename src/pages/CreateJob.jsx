import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LoaderCircle } from 'lucide-react';
import { createJob } from '../services/api';
import ReactSlider from 'react-slider';
import './SalarySlider.css'; 


export function CreateJob({ onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: {
      jobTitle: '',
      companyName: '',
      location: '',
      jobType: '',
      salaryMin: '4',
      salaryMax: '8',
      jobDescription: '',
      applicationDeadline: null,
    }
  });

  const onSubmit = async (data) => {
    const finalJobData = {
      ...data,
      salaryMin: Number(data.salaryMin),
      salaryMax: Number(data.salaryMax),
    };
  
    try {
      console.log("Submitting job data:", data);
      console.log("Final job data:", finalJobData);
  
      const res = await createJob(finalJobData);
      
  
      console.log("Job created successfully:", res.data); // ✅ Only runs if request succeeds
      toast.success("Job published successfully!");

      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
          navigate('/', { replace: true });
        window.location.reload(); // let parent handle what happens
        } else if (onClose) {
          onClose();
          navigate('/', { replace: true });
        window.location.reload(); // fallback to closing modal
        }else {
          navigate('/'); // 👈 fallback navigation if neither is provided
        }
      }, 1000); // wait for the toast to show

    } catch (error) {
      console.error("Error creating job:", error);
      
      if (error.response) {
        toast.error(error.response.data.message || "Something went wrong");
        console.log("Server response:", error.response.data);
        console.log("Status code:", error.response.status);
      } else {
        toast.error("Unexpected error. Try again.");
        console.log("Unexpected error:", error.message);
      }
    }
  }; 

  return (
    <div className="job-opening max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create Job Opening</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className='first'>
            {/* Job Title */}
        <div className='job-opening-title'>
          <label className="title block font-medium">Job Title</label>
          <input
            type="text"
            className="o-input inp inp-e w-full border p-2 rounded"
            placeholder="Full Stack Developer"
            {...register('jobTitle', { required: 'Job title is required' })}
          />
          {errors.jobTitle && <p className=" error-text text-red-500 text-sm">{errors.jobTitle.message}</p>}
        </div>

        {/* Company Name */}
        <div className='company-name'>
          <label className="title block font-medium">Company Name</label>
          <input
            type="text"
            className="o-input inp inp-e w-full border p-2 rounded"
            placeholder="Amazon"
            {...register('companyName', { required: 'Company name is required' })}
          />
          {errors.companyName && <p className=" error-text text-red-500 text-sm">{errors.companyName.message}</p>}
        </div>
        </div>
        
        <div className='second'>
            {/* Location */}
        <div className='location'>
          <label className="title block font-medium">Location</label>
          <select
            className="select o-input inp w-full border p-2 rounded"
            {...register('location', { required: 'Location is required' })}
          >
            <option value="">Select location</option>
            <option value="chennai">Chennai</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="remote">Remote</option>
          </select>
          {errors.location && <p className=" error-text text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        {/* Job Type */}
        <div className='job-type-app'>
          <label className="title block font-medium">Job-Type</label>
          <select
            className="select o-input inp w-full border p-2 rounded"
            {...register('jobType', { required: 'Job type is required' })}
          >
            <option value="">Select job type</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.jobType && <p className=" error-text text-red-500 text-sm">{errors.jobType.message}</p>}
        </div>
        </div>

        <div className='third'>
            {/* Salary Range */}
            <div className="salary-range-wrapper">
  <label className="title block font-medium mb-2">Salary Range (in LPA)</label>
  <ReactSlider
  className="horizontal-slider"
  thumbClassName="thumb"
  trackClassName="track"
  min={1}
  max={30}
  step={1}
  value={[
    Number(watch('salaryMin') || 3),
    Number(watch('salaryMax') || 8),
  ]}
  onChange={([min, max]) => {
    setValue('salaryMin', min);
    setValue('salaryMax', max);
  }}
  minDistance={1}
/>
  <div className="sal-box flex justify-between text-sm mt-2 text-gray-600">
    <span>{watch('salaryMin') || 3} - </span>
    <span>{watch('salaryMax') || 8} LPA</span>
  </div>
</div>


        {/* Application Deadline */}
        <div className='application'>
          <label className=" title block font-medium">Application Deadline</label>
          <DatePicker
            selected={watch('applicationDeadline')}
            onChange={(date) => setValue('applicationDeadline', date)}
            className="o-input inp inp-e w-full border p-2 rounded"
            minDate={new Date()}
            placeholderText="Select deadline"
          />
        </div>
        </div>
        

        {/* Job Description */}
        <div className='description'>
          <label className="title block font-medium">Job Description</label>
          <textarea
            className="desc-input inp w-full border p-2 rounded"
            rows={4}
            placeholder="Write about the job role..."
            /*{...register('jobDescription', { required: 'Job description is required' })}*/
          />
         {errors.jobDescription && <p className=" error-text text-red-500 text-sm">{errors.jobDescription.message}</p>} 
        </div>

        {/* Buttons */}
        <div className="buttons flex justify-between mt-6">
          <button
            type="button"
            className="draft px-4 py-2 border rounded hover:bg-gray-100"
            onClick={onClose}
          >
            Back
          </button>
          <button
            type="submit"
            className="publish px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
            disabled={loading}
          >
            {loading && <LoaderCircle className="animate-spin w-5 h-5" />}
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateJob;
