import React, { useEffect, useState } from "react";
import ArticleCard from "@/components/ArticleCard";

const LatestArticle = () => {
    const [latestArticle, setLatestArticle] = useState(null);

useEffect(() => {
    async function fetchLatestArticle() {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles?sort=published_at&order=desc");
        if (response.ok) {
          const json = await response.json();
          if (json.results.length > 0) {
            setLatestArticle(json.results[0]);
          }
        } else {
          console.error("Failed to fetch the latest article.");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchLatestArticle();
  }, []);

  return (
    <div>
      {latestArticle ? (
        <ArticleCard article={latestArticle} />
) : null}
    </div>
  );
};

export default LatestArticle;