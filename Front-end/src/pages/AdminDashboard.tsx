import React from 'react';
import AdminController from '../components/AdminController';
import AdminTable from '../components/AdminTable';

function AdminDashboard() {
  return (
    <>
      <main>
        <AdminController />
        <AdminTable />
      </main>
    </>
  );
}

export default AdminDashboard;
