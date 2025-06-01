import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../components/DashboardHeader';
import DashboardNav from '../components/DashboardNav';
import type { ITicket, StatusType } from '../../../server/models/TicketModel';
import { useNavigate, useParams } from 'react-router-dom';
import { ticketService } from '../services/ticketService';
import AdminTable from '../components/AdminTable';

interface NavOption {
  option: string;
  func: () => void | Promise<void>;
  status?: StatusType | 'all' | null;
}

function AdminDashboard() {
  const navigate = useNavigate();
  const { status: statusParam } = useParams<{ status?: StatusType | 'all' }>();
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStatusFilter, setCurrentStatusFilter] = useState<StatusType | 'all' | null>(statusParam || 'all');

  const fetchTickets = useCallback(async (statusFilter: StatusType | 'all' | null = 'all') => {
    setLoading(true);
    setError(null);
    try {
      const data = await ticketService.getAllTickets();
      console.log('Fetched tickets:', data); // Log fetched data

      if (statusFilter === 'all') {
        setTickets(data);
      } else {
        setTickets(data.filter(ticket => ticket.status === statusFilter));
      }
      setCurrentStatusFilter(statusFilter);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch tickets');
      setLoading(false);
      console.error('Error fetching tickets:', error);
    }
  }, []);

  useEffect(() => {
    fetchTickets(statusParam || 'all');
  }, [fetchTickets, statusParam]);

  const navOptions: NavOption[] = [
    {
      option: "Summary",
      func: () => navigate('/admin/summary'),
      status: null,
    },
    {
      option: "All Tickets",
      func: () => fetchTickets('all'),
      status: 'all',
    },
    {
      option: "Unseen",
      func: () => fetchTickets('Unseen'),
      status: 'Unseen',
    },
    {
      option: "In Progress",
      func: () => fetchTickets('In Progress'),
      status: 'In Progress',
    },
    {
      option: "Completed",
      func: () => fetchTickets('Completed'),
      status: 'Completed',
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

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <>
      <main className={styles.main}>
        <DashboardHeader isAdmin={true} />
        <div className="absolute top-4 right-4 md:static md:top-auto md:right-auto">
          {/* Pass currentStatusFilter to highlight the active filter */}
          <DashboardNav navs={navOptions} currentFilter={currentStatusFilter} />
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
          <AdminTable data={tickets} onRefresh={fetchTickets} />
        </div>
      </main>
    </>
  );
}

export default AdminDashboard;