import TeamOrgChart from "./TeamOrgChart";
import ManagersSection from "./ManagersSection";
import "./TeamPage.css";

export default function TeamPage() {
  return (
    <main className="team-page">
      <TeamOrgChart />
      <ManagersSection />
    </main>
  );
}