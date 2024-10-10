import React, { useEffect, useState } from 'react';
import style from "./Main.module.css"
import Item from '../Item/Item';

const Main = () => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    ;(async () => {
      let res = await fetch("https://api.github.com/repos/facebook/react/issues");
      let githubData = await res.json();
      setUserData(githubData);
      console.log(githubData[0])
    })()
  }, [setUserData]);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.leftDiv}>
            <div className={style.item}>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg></div>
              <div>625 Open</div>
            </div>
            <div className={style.item}>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-closed color-fg-done">
    <path d="M11.28 6.78a.75.75 0 0 0-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3.5-3.5Z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"></path>
</svg></div>
              <div>10104 Closed</div>
            </div>
          </div>
          <div className={style.rightDiv}>
            <div className={style.item}>
              <div >Author</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
            <div className={style.item}>
              <div>Labels</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
            <div className={style.item}>
              <div>Projects</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
            <div className={style.item}>
              <div>Mildstones</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
            <div className={style.item}>
              <div>Assigne</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
            <div className={style.item}>
              <div>Sort</div>
              <div className={style.icon}><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></div>
            </div>
          </div>
        </div>
        <div className={style.body}>
          {userData?.map((data) => {
            console.log("Data", data)
            return <Item key={data.id} userData={data}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Main;