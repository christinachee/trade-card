import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { user: campaign } = props;

  return (
    <div>
      <div>
        <Link to={`/trade-card/campaign/${campaign.id}`}>
          {campaign.id} - {campaign.name}
        </Link>
      </div>
      <div><img src={campaign.carousel_image} /></div>
      <hr />
    </div>
  );
};

export default function App() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const url =
      "https://api-helloproject.orical.jp/cardpacks?partner_id=13&page=1&return_tutorial_pack=false";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // const { results } = json;
        // Only put the results in state, ie, the actual users array
        setCampaigns(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {campaigns.map((campaign) => (
        <Card key={campaign.id} user={campaign} />
      ))}
    </div>
  );
}
