

interface DetailsProps {
  title: string;
  description: string;
  images: string[];
}

const Details = ({ title, description, images }:DetailsProps) => {
  return (
    <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-3xl font-bold text-[#131d3b]">{title}</h2>
      <p className="text-gray-700 mt-4">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative">
            <img
              src={imgSrc}
              alt={`Detail image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
