import React from "react";
import { Card, Avatar, Empty } from "antd";
import useArticles from "./useArticles";
import "./css/Articles.css";
import notFound from "../../media/notfound.png";

const { Meta } = Card;

const Articles = props => {
  const { section } = props;
  const { articles } = useArticles(section);
  if (!articles || articles.length === 0) return <Empty />;
  return (
    <div>
      {articles.map((article, index) => (
        <Card key={index} className="article">
          <Meta
            avatar={<Avatar src={article.image ? article.image : notFound} />}
            title={article.title}
            description={article.description}
          />
        </Card>
      ))}
    </div>
  );
};

export default Articles;
