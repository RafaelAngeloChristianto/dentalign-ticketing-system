import React from 'react'
import logo from '../assets/text-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface Props {
    isAdmin: boolean;
}

const DashboardHeader: React.FC<Props> = ({ isAdmin }) => {
    const styles = {
        container : 'flex flex-row justify-between items-center px-5 py-3 mb-3 border-b-2 border-neutral-200',
        logo_image: 'w-70',
        profile_btn: 'hover:scale-110 text-3xl text-white bg-indigo-500 hover:bg-indigo-600 rounded-full w-15 h-15 transition-all'
    }
    return (
        <header className={styles.container}>
            <img className={styles.logo_image} src={logo} alt="" />
            {!isAdmin && (
                <button className={styles.profile_btn}><FontAwesomeIcon icon={faUser} /></button>
            )}
        </header>
    )
}

export default DashboardHeader