

const MapComponent = () => {
  return (
    <div className="map-container xl:h-[500px] lg:h-[300px]  mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4655632441345!2d90.30716657522557!3d23.873104384054717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1728741584998!5m2!1sen!2sbd"
        width=""
        height=""
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full xl:h-[500px] lg:h-[300px] h-[400px]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
