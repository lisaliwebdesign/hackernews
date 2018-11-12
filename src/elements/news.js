import React, { Component, Fragment } from "react";
import { NewsItemTitle } from "../elements/news/title";
import { NewsItemPopUp } from "../elements/news/popup";
import { NewsItemHideIcon } from "../elements/news/hide";
import { NewsItemInfo } from "../elements/news/info";

const modal = item => {
  return <NewsItemPopUp item={item} />;
};

const NewsItemContainer = props => (
  <div className="sandbox">
    {props.content.map((item, index) => (
      <div
        key={index}
        id={item.id}
        className={"card news-item " + item.type + "-col"}
      >
        <article className="tile is-child notification is-white is-radiusless">
          <NewsItemTitle
            url={item.url !== undefined ? item.url : ""}
            title={item.title !== undefined ? item.title : ""}
          />
        </article>
        <NewsItemHideIcon />

        <div className="title-bottom">
          <NewsItemInfo
            score={item.score !== undefined ? item.score : ""}
            by={item.by !== undefined ? item.by : ""}
            time={item.time !== undefined ? item.time : new Date()}
          />
          <span className="item-right">
            {item.descendants
              ? modal(<i className="far fa-comment-dots" />)
              : modal(<i className="far fa-comment-dots icon-highlight" />)}
            {item.descendants}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export { NewsItemContainer };
