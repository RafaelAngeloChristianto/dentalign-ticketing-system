import React, { useState } from 'react'

interface Props {
    navs: {
        option: string
        func: () => void
    }[]
}

const DashboardNav:React.FC<Props> = ({ navs }) => {
    const [current, setCurrent] = useState(0)
    const styles = {
        container: 'w-fit py-1',
        navItem: 'font-semibold hover:font-bold w-30 py-2 mx-2 hover:bg-indigo-100 hover:text-indigo-500 hover:rounded-xl cursor-pointer transition-all ',
        selected: 'border-b-2 border-indigo-500 text-indigo-500'
    }

    const onClick = (id, func:()=>void) => {
        setCurrent(id)
        if(func) func()
    }

    return (
        <nav className={styles.container}>
            {navs.map((nav, i) => 
                <button className={styles.navItem + (i == current ? styles.selected : "")} onClick={() => onClick(i, nav.func)}>{nav.option}</button>
            )}
        </nav>
    )
}

export default DashboardNav