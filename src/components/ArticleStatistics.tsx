import React from "react";
import { Row, Col, List, Typography } from "antd";
import { Article } from "@/types/types";

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  /**
   * This component generates the following statistics:
   * 1. Unique news sources
   * 2. Date range of articles
   * 3. Number of featured articles
   *
   * It takes as input an array of articles
   *
   * You should use a combination of Antd components to build this.
   * You might need to do some data manipulation to get the data in the right format.
   *
   * I used a combination of the following components:
   * 1. List
   * 2. Row
   * 3. Col
   * 4. Typography.Text
   * 5. Typography.Title
   */
  //This is given to you
  const uniqueSources = [
    ...new Set(articles.map((article) => article.news_site)),
  ];
  // This might be helpful for you
  const dateRange = [
    new Date(
      Math.min(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
    new Date(
      Math.max(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
  ];
  
  const featuredCount = articles.filter((article) => article.featured).length;

  return <div>
  <Typography.Title level = {3}>Article Statistics</Typography.Title>
 <Row gutter={8}>
        <Col span={8}>
          <List
            bordered
            header={<Typography><strong>Unique News Sources</strong></Typography>}
            dataSource={uniqueSources}
            renderItem={(source) => (
              <List.Item>
                <Typography.Text>{source}</Typography.Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8}>
          <List
            bordered
            header={<Typography><strong>Data Range of Articles</strong></Typography>}
            dataSource={[
              `Earliest: ${dateRange[0]}`,
              `Latest: ${dateRange[1]}`,
            ]}
            renderItem={(date) => (
              <List.Item>
                <Typography.Text>{date}</Typography.Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={8}>
          <List
          bordered
          header = {<Typography><strong>Number of Featured Articles</strong></Typography>}
          dataSource={[featuredCount]}
            renderItem={(count) => (
              <List.Item>
                <Typography.Text>Count: {count}</Typography.Text>
              </List.Item>
          )}
          />
        </Col>
      </Row>
  </div>;
};

export default ArticleStatistics;
