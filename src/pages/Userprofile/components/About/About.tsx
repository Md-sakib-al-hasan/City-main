

const About = () => {
  return (
    <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold text-[#131d3b]">About Me</h2>
      <p className="text-gray-700 mt-4">
        Hello! I'm John Doe, a passionate frontend developer with a keen interest in building user-friendly web applications. 
        I specialize in React and TypeScript, crafting seamless user experiences and responsive designs.
      </p>

      <h3 className="text-2xl font-semibold mt-6 text-[#131d3b]">My Mission</h3>
      <p className="text-gray-700 mt-2">
        My mission is to create innovative and accessible digital experiences that empower users and enhance their productivity.
      </p>

      <h3 className="text-2xl font-semibold mt-6 text-[#131d3b]">Interests</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Open Source Contribution</li>
        <li>Learning New Technologies</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 text-[#131d3b]">Skills</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>React</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>CSS & Tailwind CSS</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default About;
