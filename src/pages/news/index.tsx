/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import type { PaginationProps } from 'antd';
import { Divider, Typography, Pagination, Switch} from "antd";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";


const NewsPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [offset, setOffset] = useState(0)
  const [size, setSize] = useState(10)
  
  useEffect(() => {
    async function getArticles (){
      try{
        const articles = await fetch(`https://api.spaceflightnewsapi.net/v4/articles?limit=${size}&offset=${offset}&sort=published_at&order=desc`);
        if (articles.ok) {
          const json = await articles.json();
          setData(json["results"]);
        } else {
          console.error("Failed to fetch article.");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    getArticles();
      // react to different events that happen

  },[offset, size]);
  // For switch
  const [gridmode, setGridmode] = useState(true);
  const handleClick = () => {
    if (!gridmode) {
      setGridmode(true)
    } else {
      setGridmode(false)
    }
  }
  // For pagination
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    setSize(pageSize);
    setOffset(0);
    window.scroll(0,0);
  };



  return (
    <div style={{ width: "100%" }}>
      {/* You can delete this div if you want */}
        <div style={{ marginBottom: "10px" }}>
        <span>View as: </span>
          {<Switch onClick={handleClick} checked={!gridmode} unCheckedChildren="Grid" checkedChildren="Table" />}
          <span style = {{marginLeft: "10px"}}>(Switch between Table and Grid view)</span>
        </div>

      <ArticleStatistics articles = {data}/>
      <Divider />
      <Typography.Title level={2}>Articles</Typography.Title>

      {/* Add conditional render logic for table vs grad/list */}
      
      {gridmode ? (
        <ArticleList articles = {data} loading = {loading}/>
      ): (
        <ArticleTable articles = {data} loading = {loading}/>
      )}

      {/* Add pagination control using Antd(lookup the component). The same one should be used for both the table and grid views */}
      <Pagination
        showSizeChanger
        onChange={(page, pageSize)=>{
            setOffset((page - 1) * 10)
            window.scroll(0,0)
          }}
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={1}
        total={500}
        style = {{display: "flex", justifyContent: "center", padding: "10px"}}
      />
      {/* It should be centered on the page */}
      {/* When you change the page, or the items per page, it should reset the scroll to the top of the page */}
    </div>
  );
  }

export default NewsPage;
