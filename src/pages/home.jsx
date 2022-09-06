import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import List from "./list";
import { PageHeader } from "antd";

function Home(props) {
  const listInnerRef = useRef();

  const [height,setHeight]=useState(1131)
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("in function")
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
      console.log("in call")
      fetchData();
    }
  }, [currPage]);

  
  const onScroll = async() => {
     if (listInnerRef.current) {
      let { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      scrollTop = Math.round(scrollTop)
      clientHeight+=300
 
      
if(height<=scrollHeight){
    if (scrollTop + clientHeight >= scrollHeight) {
        setHeight(scrollHeight+1131)
         setCurrPage(currPage + 1);
         
        }
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
