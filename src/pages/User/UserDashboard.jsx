import { useUserAuth } from "../../hooks/useUserAuth";

function UserDashboard() {
  useUserAuth();
  return (
    <div>
      <h1>user DashBoard</h1>
    </div>
  );
}

export default UserDashboard;
