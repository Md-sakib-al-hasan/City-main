import { Rating } from '@mui/material';
interface HappyStudentProps {
    name?: string;
    course?: string;
    image?: string;
  }

const Student = ({ name, course, image }:HappyStudentProps) => {
  return (
    <div className="bg-[#ff4f01] p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <div className="w-24 h-24">
        {/* Student image or a happy emoji */}
        <img
          src={image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
          alt={`${name}'s photo`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold text-white">{name}</h2>
      <p className="text-lg text-white">Course: {course}</p>
      <Rating name="half-rating"  sx={{
        color: '#131d3b', // Change star color
      }} defaultValue={2.5} precision={0.5} />
    </div>
  );
};

export default Student;
