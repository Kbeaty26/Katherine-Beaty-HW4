import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";

interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  /**
   * This component renders a table of articles. It takes as input an array of articles and a boolean indicating whether the table is loading.
   * You should use the Antd Table component to build this.
   * No data manipulation is needed here.
   * You will need to write a custom render function for the "published_at" column to format the date.
   *
   */
  const dataSource = articles
  const columns = [
    { "title": "Title",
      "dataIndex": "title",
      "key": "title"
  },
  {
    "title": "News Source",
    "dataIndex": "news_site",
    "key": "news_site"
  },
  {
    "title": "Published At",
    "dataIndex": "published_at",
    "key": "published_at",
    render: (text: string) => {
      const date = new Date(text)
      return date.toLocaleDateString("en-us",
        {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        }
      )
    }
  }
  ]
  return <div>
    <Table dataSource={dataSource} columns={columns} pagination = {false} />
  </div>
};

export default ArticleTable;
