import React from 'react'
import TicketsTable from '../components/TicketsTable'
import DashboardHeader from '../components/DashboardHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons'
import { Ticket } from '../../../server/models/TicketModel'
import DashboardNav from '../components/DashboardNav'

function CustStaffDashboard() {
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
        page: '',
        newTicket_btn: 'cursor-pointer transition-colors bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-bold w-70 h-10 mr-5',
        
        search: 'flex flex-row items-center text-lg px-5 border-b-2 border-neutral-200 w-full gap-3',
        search_btn: 'hover:scale-120 hover:bg-neutral-200 transition-all h-10 w-10 text-center rounded-full',
        search_bar: 'flex-grow h-15 pl-3 outline-none',
        search_filter: 'bg-neutral-100 hover:bg-neutral-200 px-3 py-2 rounded-lg',

        dashboard: 'flex flex-row h-screen',
        dashboard_content: 'first:w-2/3 last:w-1/3 p-5 first:border-r-1 last:border-l-1 border-neutral-200',
        dashboard_ticketDetails: 'border rounded-lg text-lg p-3 mb-5 bg-gray-100',
        
        levelstatus: 'flex flex-row mt-5 gap-10',
        levelstatus_container: 'w-1/2',
        levelstatus_display: 'border bg-white rounded-md w-full px-2 py-1 my-1 text-xl font-bold',
    
        ticketdetail_details: 'flex flex-row gap-3 my-3',
        ticketdetail_bullet: 'text-sm text-indigo-500',
        ticketdetail_name: 'text-md',
        ticketdetail_value: 'font-bold',
    }

    return (
        <div>
            <header>
                <DashboardHeader />
            </header>
            <main>
                <section className='flex flex-row justify-between items-center'>
                    <DashboardNav navs={navOptions}/>
                    <button className={styles.newTicket_btn}>Create New Ticket</button>
                </section>
                <section className={styles.search}>
                    <button className={styles.search_btn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input className={styles.search_bar} type="text" placeholder='Search tickets..'  />
                    <button className={styles.search_filter}>Filter <FontAwesomeIcon icon={faChevronDown} /></button>
                </section>
                <section className={styles.dashboard}>
                    <div className={styles.dashboard_content}>
                        <TicketsTable data={tickets} />
                    </div>
                    <div className={styles.dashboard_content}>
                        <div className={styles.dashboard_ticketDetails}>
                            <h1>Created at: <FontAwesomeIcon icon={faCalendar} /> Date</h1>
                            <div className={styles.levelstatus}>
                                <div className={styles.levelstatus_container}>
                                    <label htmlFor="priority">Priority level</label><br/>
                                    <input value="Medium" className={styles.levelstatus_display} name="priority" type="text" readOnly/>
                                </div>
                                <div className={styles.levelstatus_container}>
                                    <label htmlFor="status">Status</label><br/>
                                    <input value="Completed" className={styles.levelstatus_display} name="status" type="text" readOnly />
                                </div>
                            </div>
                        </div>
                        <div className={styles.dashboard_ticketDetails}>
                            <h1 className='font-semibold mb-4'>Ticket Details</h1>
                            <div className={styles.ticketdetail_details}>
                                <div>
                                    <FontAwesomeIcon icon={faCircle} className={styles.ticketdetail_bullet} />
                                </div>
                                <div>
                                    <p className={styles.ticketdetail_name}>Ticket ID</p>
                                    <p className={styles.ticketdetail_value}>DENT-1002</p>
                                </div>
                            </div>
                            <div className={styles.ticketdetail_details}>
                                <div>
                                    <FontAwesomeIcon icon={faCircle} className={styles.ticketdetail_bullet} />
                                </div>
                                <div>
                                    <p className={styles.ticketdetail_name}>Title</p>
                                    <p className={styles.ticketdetail_value}>Ticket lmao</p>
                                </div>
                            </div>
                            <div className={styles.ticketdetail_details}>
                                <div>
                                    <FontAwesomeIcon icon={faCircle} className={styles.ticketdetail_bullet} />
                                </div>
                                <div>
                                    <p className={styles.ticketdetail_name}>Ticket ID</p>
                                    <p className={styles.ticketdetail_value}>Tech Support</p>
                                </div>
                            </div>
                            <div>
                                <h1 className='font-semibold mb-2'>Description</h1>
                                <textarea className='border bg-white rounded-xl w-full h-30 text-justify p-3' value='Lorem ipsum dolor sit amet' readOnly></textarea>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CustStaffDashboard