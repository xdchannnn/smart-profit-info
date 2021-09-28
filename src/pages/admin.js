import AdminNavbar from '../components/adminComponents/adminNavbar';
import Dashboard from '../components/adminComponents/adminDashboard'

function Admin() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <AdminNavbar />
        <div className="col g-0">
          <Dashboard />
        </div>     
      </div>
    </div>
  );
}

export default Admin;
