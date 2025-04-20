// JobCard.jsx

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, Text, Badge, Button, Group, Image, Stack } from '@mantine/core';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function JobCard({ job }) {
  const navigate = useNavigate();

  // Map logo based on company name
  const getCompanyLogo = (companyName) => {
    const lowerName = companyName.toLowerCase();
    if (lowerName.includes('amazon')) {
      return 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg';
    } else if (lowerName.includes('tesla')) {
      return 'https://www.edigitalagency.com.au/wp-content/uploads/Tesla-logo-red-large-size.png';
    } else if (lowerName.includes('microsoft')) {
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZuiSqCnUtaQSq1-BUT5sjAWVMZRaNpd-LA&s';
    } else if (lowerName.includes('google')) {
      return 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png';
    } else {
      return 'https://t3.ftcdn.net/jpg/04/06/91/94/360_F_406919447_kAcC5gdh1rpYlVxwMfHtUTGf24PUYSq8.jpg'
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="job-card">
      <Group position="apart" mb="md">
        <Group className='badge-div'>
          <Image
            src={getCompanyLogo(job.companyName)}
            width={50}
            height={50}
            radius="xl"
            alt={job.companyName}
          />
          <Badge className='badge' color="blue" variant="light">
          {job.postedTime ? job.postedTime : '24h Ago'}
          </Badge>
          <Text className='job-title-text' weight={500}>{job.jobTitle} | {job.companyName}</Text>
        </Group>
      </Group>

      <Stack spacing="xs">
        <Group className="job-details" spacing="xs">
          <Text size="sm"><i class="bi bi-person-plus-fill"></i> Fre / Exp</Text>
          <Text size="sm"><i class="bi bi-buildings-fill"></i> {job.jobType}</Text>
          <Text size="sm"><i class="bi bi-currency-dollar"></i> {job.salaryMin} - {job.salaryMax} LPA</Text>
        </Group>
        
        <Stack spacing={5} mt={5} className="job-description">
          <Text size="sm">• Build and maintain scalable web apps using React and Node.js.</Text>
          <Text size="sm">• Collaborate with cross-functional teams to deliver seamless user experiences.</Text>
        </Stack>
      </Stack>

      <Button className='apply' variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => toast.success("Applied Successfully !")}>
        Apply Now
      </Button>
    </Card>
  );
}

export default JobCard;