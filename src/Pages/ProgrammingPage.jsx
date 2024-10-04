// src/components/LatestNews.jsx
import { fetchProgramming } from "../api/api";
import CardItem from "../components/CardItem"
import { useState, useEffect } from "react";
import Loading from "../components/LoadMessage/Loading";
import Error from "../components/LoadMessage/Error";
import NoNews from "../components/LoadMessage/NoNews";
import SectionTitle from "../components/SectionTitle";
import NewsList from "../components/NewsList";


export default function LatestNews() {

  return (
    <>
      <NewsList query='Programming'/>
    </>
    
    
  );
}
