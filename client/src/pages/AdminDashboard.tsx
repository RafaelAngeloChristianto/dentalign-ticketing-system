import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../components/DashboardHeader';
import DashboardNav from '../components/DashboardNav';
import AdminTable from '../components/AdminTable';
import { Ticket } from '../../../server/models/TicketModel';

function AdminDashboard() {
  const tickets:Ticket[] = [
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "Low",
      status: "In Progress",
    },
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "DENT-1001",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "High",
      status: "In Progress",
    },
  ];

  const navOptions = [
        {
            option: "All Tickets",
            func: () => console.log("Hello!")
        },
        {
            option: "In Progress",
            func: () => console.log("Hello!")
        },
        {
            option: "Completed",
            func: () => console.log("Hello!")
        },
        {
            option: "Ticket History",
            func: () => console.log("Hello!")
        },
    ]

  const styles = {
    container: 'w-full border-b bg-white',

    search: 'flex flex-row items-center text-lg px-5 border-b-2 border-neutral-200 w-full gap-3',
    search_btn: 'hover:scale-120 hover:bg-neutral-200 transition-all h-10 w-10 text-center rounded-full',
    search_bar: 'flex-grow h-15 pl-3 outline-none',
    search_filter: 'bg-neutral-100 hover:bg-neutral-200 px-3 py-2 rounded-lg',
  };

  return (
    <>
      <main>
        <DashboardHeader />
        <DashboardNav navs={navOptions} />

        <section className={styles.search}>
          <button className={styles.search_btn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <input className={styles.search_bar} type="text" placeholder='Search tickets..'  />
          <button className={styles.search_filter}>Filter <FontAwesomeIcon icon={faChevronDown} /></button>
        </section>
        
        <AdminTable data={tickets} />
      </main>
    </>
  );
}

export default AdminDashboard;
