import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch } from "antd";
import React, { useState } from "react";

const { Meta } = Card;

function List({ onScroll, listInnerRef, userList }) {
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        {userList.map((item, index) => {
          return (
            <Card key={index} style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.name}
                description="This is the description"
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default List;
