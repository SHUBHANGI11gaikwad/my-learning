import React, { useState } from 'react';
import '../styles/pages/NewsApp.module.css'; // Optional: your custom styling

const NewsApp = () => {
  const [newsContent, setNewsContent] = useState('');
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    setLoading(true);
    try {
      const API_KEY = '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'; // Use yours safely

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify({
          model: "llama-3-70b-chat",
          messages: [
            {
              role: "user",
              content: "Generate a latest tech news in div tag with good CSS design",
            },
          ],
        }),
      });

      const body = await response.json();
      const result = body.choices[0].message.content;
      setNewsContent(result);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsContent("<div>Error loading news. Please try again.</div>");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news-container">
      <h2>AI-Powered News</h2>
      <button onClick={getNews} className="news-button">
        {loading ? "Loading..." : "Generate News"}
      </button>
      <div id="result" dangerouslySetInnerHTML={{ __html: newsContent }} />
    </div>
  );
};

export default NewsApp;
