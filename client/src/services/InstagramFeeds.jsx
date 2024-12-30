import { useState, useEffect } from "react";
import axios from "axios";

const InstagramFeed = () => {
  const [photos, setPhotos] = useState([]);

  const environment = import.meta.env.VITE_ENV;
  const apiUrl =
    environment === "production"
      ? import.meta.env.VITE_API_URL
      : "http://localhost:8888/";

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${apiUrl}api/instagram/media`);
        const filteredPhotos = response.data.data.filter(
          (item) => item.media_type === "IMAGE"
        );
        setPhotos(filteredPhotos);
      } catch (error) {
        console.error("Error fetching Instagram photos", error);
      }
    };

    fetchPhotos();
  }, [apiUrl]);

  return (
    <div className="grid w-full h-full grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo) => (
        <>
          <a
            key={photo.id}
            href={photo.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col flex-wrap overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg lg:mx-12 group hover:shadow-xl">
            <img
              src={photo.media_url}
              alt={photo.caption}
              className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-90"
              title={photo.caption}
            />
          </a>
        </>
      ))}
    </div>
  );
};

export default InstagramFeed;
