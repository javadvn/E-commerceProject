import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HeaderTop from "../HeaderTop";
import { useEffect } from 'react';
import { useState } from 'react';
import { baseService } from "../axios/baseService";
import CardsProduct from "./CardsProduct";





function DashBoard() {

  const [products, setProducts] = useState([])

  const [loading, setloading] = useState(true)


  useEffect(() => {

    loadData();

}, []);

const loadData = () => {
    baseService.getAll('products')
        .then(data => {
            setProducts(data);
            setloading(false);
        })
        .catch(err => {

        })
}

  return (
    <>
    <HeaderTop/>
    <CardsProduct/>
    </>
  );
}

export default DashBoard;
