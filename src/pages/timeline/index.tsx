import Heading from "@/components/heading";
import React, { useEffect, useState } from "react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "First Meeting",
    date: "February 14, 2020",
    description:
      "We met for the first time at a coffee shop on Valentine's Day. It was an unexpected encounter that turned out to be unforgettable.",
    image: "https://via.placeholder.com/150", // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 2,
    title: "First Date",
    date: "March 1, 2020",
    description:
      "Our first official date! We went to a movie and had dinner at our favorite Italian restaurant. It was the perfect start to our journey together.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Became a Couple",
    date: "April 15, 2020",
    description:
      "After a few amazing dates, we decided to make it official. We became a couple and shared this special moment with our closest friends.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "First Trip Together",
    date: "July 20, 2020",
    description:
      "We went on our first trip together to Bali. It was a magical experience filled with laughter, adventure, and unforgettable memories.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "First Anniversary",
    date: "April 15, 2021",
    description:
      "Celebrated our first anniversary together! We reminisced about all the wonderful memories we've made and looked forward to many more.",
    image: "https://via.placeholder.com/150",
  },
];

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    timelineData[0] || null
  );

  const handleClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <section className="overflow-hidden">
          <div className="mt-28">
            <Heading title="timeline" subtitle="of aviation history" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 lg:items-center px-5 lg:p-8 mb-16">
            {/* Timeline Section */}
            <div className="flex flex-col  lg:mr-8 relative lg:w-1/2">
              {timelineData.map((event, index) => (
                <div key={event.id} className="flex items-center mb-6 relative">
                  {/* Garis antara lingkaran */}
                  {index !== timelineData.length - 1 && (
                    <div className="absolute left-2.5 top-[2.3rem] h-full w-[2px] bg-rose z-10"></div>
                  )}

                  <div
                    onClick={() => handleClick(event)}
                    className={`w-6 h-6 rounded-full cursor-pointer ${
                      selectedEvent?.id === event.id ? "bg-mandy" : "bg-rose"
                    }`}
                  ></div>
                  <div
                    className="ml-4 text-left cursor-pointer"
                    onClick={() => handleClick(event)}
                  >
                    <h3
                      className={`${
                        selectedEvent?.id === event.id
                          ? "text-mandy font-semibold"
                          : "text-gray-800"
                      } text-lg`}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`${
                        selectedEvent?.id === event.id
                          ? "text-mandy/70"
                          : "text-gray-500"
                      }`}
                    >
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Display Card Section */}
            <div className="flex-1 lg:w-1/2">
              {selectedEvent && (
                <div
                  className="text-white bg-mandy rounded-2xl p-6 max-w-sm cursor-pointer"
                  onClick={() => handleClick(selectedEvent)}
                >
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="rounded-xl mb-4 w-full object-cover h-40"
                  />
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-sm text-white">{selectedEvent.date}</p>
                  <p className="mt-4 text-white">{selectedEvent.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
