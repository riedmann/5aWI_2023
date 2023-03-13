import React, { useEffect, useState } from "react";
import League from "./League";

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);
  
  useEffect(() => {
    fetch("https://api.openligadb.de/getavailableleagues").then((res) =>
      res.json().then((res) => {
        setLeagues(res);
      })
    );
  }, []);
  
  return (
    <div>
      <h1>Ligen</h1>
      {leagues.map((el) => {
        return <h1>Hello {el.leagueName}</h1>;
      })}
    </div>
  );
}
