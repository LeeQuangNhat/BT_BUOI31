import React, { useEffect, useState } from "react";
import "./styles.css";
const Glass = () => {
  const  [arrGlass, setArrGlass] = useState([])
  const [detail, setDetail] = useState({})
  const [number, setNumber] = useState(null);
  const arrGlassData = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  useEffect(() => {
    setArrGlass(arrGlassData);
  }, []);
  useEffect(() => {
    if (number !== null) {
      setDetail(arrGlassData[number]);
    }
  }, [number]);
  return (
    <>
      <div className="bg-slate-950 opacity-55">
        <h1 className="p-8 text-center text-white text-3xl font-bold">
          TRY GLASSES APP ONLINE
        </h1>
      </div>
      <div className="container">
        <div className="flex  justify-between  py-5 content">
          <div className=" relative ">
            <img src='./glassesImage/model.jpg' alt="" />
            <div className="title">
              <p className="text-xl font-semibold text-blue-800 ">{arrGlassData[0].name}</p>
              <p>{arrGlassData[0].desc}</p>
            </div>
            <img src={arrGlassData[0].url} alt="" className="glass" />
          </div>
          <div className="relative">
            <img src='./glassesImage/model.jpg' alt="" />
            {number !== null && (
              <div className="title">
                <p className="text-xl font-semibold text-blue-800">
                  {detail.name}
                </p>
                <p>{detail.desc}</p>
              </div>
            )}
            <img src={detail.url} alt="" className="glass" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap 5 content bg-slate-100 ">
          {arrGlass.map((item,index) => (
            <div key={index} className="m-3">
              <button onClick={()=>{
                setNumber(item.id -1)
              }} className="border">
                <img src={`${item.url}`} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Glass;
