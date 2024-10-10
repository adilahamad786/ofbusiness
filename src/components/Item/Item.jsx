import React from "react";
import style from "./Item.module.css";
import Label from "../label/Label";
import daysOld from "../../helpers/timeAgo";

const Item = (props) => {
  const { title, labels, user, comments, pull_request, updated_at } = props.userData;
  const pullCount = pull_request ? Object.keys(pull_request).length : undefined;

  return (
    <div className={style.item}>
      <div className={style.start}>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
        </svg>
      </div>
      <div className={style.center}>
        <span className={style.mainTitle}>{title}</span>
          {labels.map((label) => {
            return <Label key={label.id} borderWidth="0px" color={label.color} labelValue={label.name} />;
          })}
        
        <p className={style.timestamp}>#{user.id} opend {daysOld(updated_at.slice(0, 10))}days ago by {user.login}</p>
      </div>
      <div className={style.end}>
        <div className={style.icon}>
          {pullCount ? (
            <div className={style.pull}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
              >
                <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
              </svg>{" "}
              {pullCount}
            </div>
          ) : (
            <div className={style.pull}></div>
          )}
        </div>
        <div className={style.icon}>
          <img
            src={user?.avatar_url}
            alt="avatar"
          />
        </div>
        <div className={style.icon}>
          {comments ? (
            <div className={style.comment}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-comment color-fg-muted mr-1"
              >
                <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
              </svg>{" "}
              {comments}
            </div>
          ) : (
            <div className={style.comment}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
