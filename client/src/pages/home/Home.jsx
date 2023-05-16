import Featured from "../../components/featured/Featured";
import TustedBy from "../../components/trustedby/TustedBy";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <Featured />
      <TustedBy />
    </div>
  )
}
