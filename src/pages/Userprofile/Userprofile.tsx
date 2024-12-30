import React from 'react';
import About from './components/About/About';
import Contact from './components/About/Contact/Contact';
import Details from './components/Details/Detail';
import { FaCircleUser } from 'react-icons/fa6';

const UserProfilePage: React.FC = () => {
  // Simulated user data
  const user = {
    name: 'Neam',
    email: 'johndoe@example.com',
    bio: 'Frontend developer passionate about building user-friendly interfaces and experiences. Enjoys working with React and TypeScript.',
    avatar: 'https://i.ibb.co.com/8cYhzfs/247708048-423456392531226-5295894135862364241-n.jpg',
    location: 'savar,Dhaka,Bangladesh',
    joined: 'Joined in January 2021',
  };

  const itemDetails = {
    title: 'Amazing Projects',
    description: 'All the beautiful and wonderful projects you have completed so far',
    images: [
      'https://i.ibb.co.com/0rtzxPy/Game.png',
      'https://i.ibb.co.com/D4XHK4M/denet.png',
      'https://i.ibb.co.com/XbqY5wF/Flower-shop.png',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header section */}
      <header className="w-full bg-[#131d3b] py-8 text-white">
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
          {/* <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="w-32 h-32 rounded-full border-4 border-[#ff4f01]"
          /> */}
          <FaCircleUser size={120} />
          <h1 className="text-4xl font-bold">UserName</h1>
          <p className="text-lg">Address</p>
        </div>
      </header>

      {/* Profile details */}
      <main className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-6 w-full">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#131d3b]">About</h2>
            <p className="text-gray-700 mt-2">{user.bio}</p>
            <About></About>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#131d3b]">Contact</h2>
            <p className="text-gray-700 mt-2">Email: {user.email}</p>
            <Contact></Contact>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#131d3b]">Details</h2>
            <p className="text-gray-700 mt-2">{user.joined}</p>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Details
        title={itemDetails.title}
        description={itemDetails.description}
        images={itemDetails.images}
      />
    </div>
          </section>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex justify-around">
          <button className="px-6 py-3 bg-[#ff4f01] text-white font-semibold rounded hover:bg-[#ff5d1c]">
            Follow
          </button>
          <button className="px-6 py-3 bg-[#131d3b] text-white font-semibold rounded hover:bg-[#16254e]">
            Message
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 mt-8 bg-gray-200 text-center text-sm text-gray-600">
        © 2024 Profile App. All rights reserved.
      </footer>
    </div>
  );
};

export default UserProfilePage;
