import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AdminController: React.FC = () => {
  const styles = {
    container: 'w-full border-b bg-white',
    topBar: 'flex items-center justify-between p-4',
    logoWrapper: 'flex items-center gap-2',
    logoIcon: 'text-2xl font-bold text-blue-700',
    logoTextWrapper: '',
    logoTitle: 'text-xl font-semibold text-blue-900',
    logoSubtitle: 'text-sm text-gray-500',
    profileIcon: 'text-3xl text-blue-600',

    tabsWrapper: 'flex items-center gap-6 px-4 border-t border-gray-200',
    activeTab: 'py-2 border-b-2 border-blue-500 text-blue-600 font-medium',
    inactiveTab: 'py-2 text-gray-700',

    searchFilterWrapper: 'flex justify-between items-center px-4 py-3',
    searchInput: 'px-3 py-2 border border-gray-300 rounded-md w-1/3',
    filterButton: 'px-4 py-2 bg-gray-100 border rounded-md text-sm flex items-center gap-1',


  };

  return (
    <div className={styles.container}>

      <div className={styles.topBar}>

        <div className={styles.logoWrapper}>
          <span className={styles.logoIcon}>🦷</span>
          <div className={styles.logoTextWrapper}>
            <h1 className={styles.logoTitle}>DENTALIGN</h1>
            <p className={styles.logoSubtitle}>your trusted dental solution</p>
          </div>
        </div>

        <FaUserCircle className={styles.profileIcon} />
      </div>

      <div className={styles.tabsWrapper}>
        <button className={styles.activeTab}>All Tickets</button>
        <button className={styles.inactiveTab}>In Progress</button>
        <button className={styles.inactiveTab}>Completed</button>
        <button className={styles.inactiveTab}>Ticket History</button>
      </div>

      <div className={styles.searchFilterWrapper}>
        <input
          type="text"
          placeholder="Search tickets..."
          className={styles.searchInput}
        />
        <button className={styles.filterButton}>
          Filter <span>▼</span>
        </button>
      </div>
    </div>
  );
};

export default AdminController;
