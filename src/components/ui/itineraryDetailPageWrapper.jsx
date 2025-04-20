import { useParams } from "react-router-dom";
import ItineraryDetailPage from "../pages/itineraryDetailPage";

const ItineraryDetailPageWrapper = () => {
  const { city, category } = useParams();
  return <ItineraryDetailPage city={city} category={category} />;
};
export default ItineraryDetailPageWrapper;