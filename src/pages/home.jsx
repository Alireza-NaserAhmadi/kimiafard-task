import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import List from "./list";
import { PageHeader } from "antd";

function Home(props) {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10`
      );
      console.log(response.data.data, "<<<");
      if (!response.data.data.length) {
        setLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...response.data.data]);
    };
    if (!lastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage , lastList, prevPage, userList]);
 
  
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log("Show")
        console.log("currPage",currPage)
        setCurrPage(currPage + 1);
      }
    }
  };

  return (
    <div>

      <List
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
      />
    </div>
  );
}

export default Home;
