import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../components/DashboardHeader';
import DashboardNav from '../components/DashboardNav';
import AdminTable from '../components/AdminTable';
import { Ticket } from '../../../server/models/TicketModel';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const tickets: Ticket[] = [
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
      id: "DENT-1002",
      title: "Patient Records System Error",
      assignee: "Dr Cindy",
      type: "IT System",
      dateCreated: "30/04/2025",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "DENT-1003",
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
      option: "Summary",
      func: () => navigate('/admin/summary')
    },
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
  ];

  const styles = {
    container: 'w-full border-b bg-white',
    main: 'min-h-screen bg-gray-50',

    // Responsive search section
    search: 'flex flex-col sm:flex-row items-stretch sm:items-center text-base sm:text-lg px-3 sm:px-5 py-3 sm:py-0 border-b-2 border-neutral-200 w-full gap-2 sm:gap-3 bg-white',
    
    // Search button - hidden on mobile, visible on larger screens
    search_btn: 'hidden sm:flex hover:scale-110 hover:bg-neutral-200 transition-all h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full shrink-0',
    
    // Search bar responsive
    search_bar: 'flex-grow h-10 sm:h-12 px-3 outline-none border border-neutral-300 sm:border-none rounded-lg sm:rounded-none focus:border-blue-500 sm:focus:border-none text-sm sm:text-base',
    
    // Filter button responsive
    search_filter: 'bg-neutral-100 hover:bg-neutral-200 px-3 py-2 sm:py-2 rounded-lg text-sm sm:text-base whitespace-nowrap shrink-0 transition-colors',
    
    // Mobile search wrapper
    search_mobile_wrapper: 'flex flex-row items-center gap-2 sm:contents',
  };

  return (
    <>
      <main className={styles.main}>
        <DashboardHeader isAdmin={true} />
     <div className="absolute top-4 right-4 md:static md:top-auto md:right-auto">
  <DashboardNav navs={navOptions} />
</div>


        <section className={styles.search}>
          {/* Mobile layout */}
          <div className="sm:hidden w-full">
            <div className="flex flex-row items-center gap-2 mb-2">
              <div className="flex items-center flex-grow relative">
                <FontAwesomeIcon 
                  icon={faMagnifyingGlass} 
                  className="absolute left-3 text-neutral-500 text-sm"
                />
                <input 
                  className="w-full h-10 pl-10 pr-3 outline-none border border-neutral-300 rounded-lg focus:border-blue-500 text-sm" 
                  type="text" 
                  placeholder="Search tickets.." 
                />
              </div>
              <button className={styles.search_filter}>
                Filter <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:flex sm:flex-row sm:items-center sm:w-full sm:gap-3">
            <button className={styles.search_btn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input 
              className={styles.search_bar} 
              type="text" 
              placeholder="Search tickets.." 
            />
            <button className={styles.search_filter}>
              Filter <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
          </div>
        </section>
        
        <div className="overflow-x-auto">
          <AdminTable data={tickets} />
        </div>
      </main>
    </>
  );
}

export default AdminDashboard;