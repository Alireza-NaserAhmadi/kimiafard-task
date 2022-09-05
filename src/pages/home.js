/** @format */
import React, { useState, useEffect, useRef } from "react"
import { Card } from "antd"
import axios from "axios"

export const GET_PRODUCT = "https://apikala.igzas.ir/apiv2/testWS"
const { Meta } = Card

const Home = () => {
  const [product, setProduct] = useState(null)
  const [page, setPage] = useState(0)
  const [length, setLength] = useState(10)
  const [currPage, setCurrPage] = useState(1) // storing current page number
  const [prevPage, setPrevPage] = useState(0) // storing prev page number
  const [userList, setUserList] = useState([]) // storing list
  const [wasLastList, setWasLastList] = useState(false) // setting a flag to know the last list

  const listInnerRef = useRef()

  const data = {
    addressID: 112,
    appType: "appSuperMarket",
    brandId: [],
    searchField: "",
    categoryId: 0,
    priceAs: 0,
    cityID: 205,
    priceTa: 999999999,
    stock: false,
    deviceId: "",
    sortOrder: 2,
  }

  useEffect(() => {
    const params = {
      page: page,
      perPage: length,
    }

    // {
    //     headers: {
    //       page: 1,
    //       perPage: 10,
    //       "atu-token": "cR3n8ySqtavCSQ86Ijx8cg==",
    //       //   "Postman-Token": "<calculated when request is sent>",
    //     },
    //     params,
    //   }

    axios
      .post(GET_PRODUCT, data, {
        // headers: {
        //   page: 1,
        //   perPage: 10,
        //   "atu-token": "cR3n8ySqtavCSQ86Ijx8cg==",

        //   // "Access-Control-Allow-Headers":
        //   //  "Content-Type, Access-Control-Allow-Headers",
        //   // "Access-Control-Allow-Methods": "POST",
        // },
        params,
      })
      .then((res) => {
        console.log("ressss", res)
      })
  }, [])

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        // This will be triggered after hitting the last element.
        // API call should be made here while implementing pagination.
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            //   onScroll={onScroll}
            ref={listInnerRef}
            className="col-lg-12 d-flex justify-content-center "
          >
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
