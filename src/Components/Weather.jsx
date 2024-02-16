import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [news, setNews] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const apiKey = "e07a66bb1ac34bab9a7912729b7df1ae";

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleToggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className=" p-20 bg-[#d9d9d9]">
      <main className="App-main">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-12 ">
            Latest News Headlines fetching from NEWS API
          </h2>
          <div className="flex justify-center items-start gap-10 flex-wrap max-w[800px]">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 overflow-hidden max-w-[400px]"
              >
                <img
                  src={article.urlToImage}
                  alt="Image_loading"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <marquee>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {article.title}
                    </h3>
                  </marquee>
                  <p className="text-sm text-gray-600">{article.publishedAt}</p>
                  <button
                    onClick={() => handleToggleExpand(index)}
                    className="mt-2 text-sm text-blue-500 focus:outline-none"
                  >
                    {expandedIndex === index ? "Close Details" : "View Details"}
                  </button>
                  {expandedIndex === index && (
                    <div className="mt-2">
                      <p className="text-gray-700">{article.description}</p>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Read more
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Weather;
