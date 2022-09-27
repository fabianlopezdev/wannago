import { useEffect, useState } from "react";
import WannaGoCard from "./WannaGoCardDashboard";
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import {getEngagementOfWannaGo, getSuccessRatioOfWannaGo} from '../utils/helperFunctions'
const WannaGoStats = () => {
  const params = new URLSearchParams(window.location.pathname);
  const id = params.get('/user/dashboard/wannago/stats/id');
  const [wannaGo, setWannaGo] = useState({});
  
  useEffect(() => {
    promiseHandler();
  }, [])

  const promiseHandler = async () => {
    try {
      const queriedWannaGo = await getWannaGoById(id);
      setWannaGo(queriedWannaGo);
    } catch (e) {
      console.log(
        `Error in the promiseHandler func of GuestLinks.js. Error: ${e}`
      );
    }
  };
  return (
    <>
      <WannaGoCard wannaGo={wannaGo} />
      <div>
        <h4>Number of times the link was opened</h4>
        {wannaGo.openedTimes}
      </div>
      <div>
        <h4>People Going</h4>
        {wannaGo.goingCounter}
      </div>
      <div>
        <h4>People that can't go</h4>
        {wannaGo.goingCounter}
      </div>
      <div>
        <h4>Number of suggestions made</h4>
        {wannaGo.suggestionBoxCounter}
      </div>
      <div>
        <h4>Engagement</h4>
        {getEngagementOfWannaGo(wannaGo)}
      </div>
      <div>
        <h4>Success Ratio</h4>
        {getSuccessRatioOfWannaGo(wannaGo)}
      </div>
    </>
  );

};













export default WannaGoStats