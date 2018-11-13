import React from "react";
import { NewsItemTitle } from "../elements/news/title"; // Div for display each news title
import { NewsItemPopUp } from "../elements/news/popup"; // Comment popup
import { NewsItemHideIcon } from "../elements/news/hide"; // Eye icon for hide news  - still missing fucntion
import { NewsItemInfo } from "../elements/news/info"; // news item bottom section

const modal = item => {
  return <NewsItemPopUp item={item} />;
};

const NewsItemContainer = props => (
  <div className="sandbox">
    {props.content.map((item, index) => (
      <div
        key={item.id}
        id={item.id}
        className={
          props.type
            ? "card news-item " + props.type + "-col"
            : "card news-item " + item.type + "-col"
        }
      >
        <article className="tile is-child notification is-white is-radiusless">
          <NewsItemTitle
            url={item.url !== undefined ? item.url : ""}
            title={item.title !== undefined ? item.title : ""}
          />
        </article>
        <NewsItemHideIcon type={props.type} />

        <div className="title-bottom">
          <NewsItemInfo
            score={item.score !== undefined ? item.score : ""}
            by={item.by !== undefined ? item.by : ""}
            time={
              item.time !== undefined ? item.time : Date.now().getUnixTime()
            }
          />
          <span
            className={
              props.type === "jobstories" ? "display-none" : "item-right"
            }
          >
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
