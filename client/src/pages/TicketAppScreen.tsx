import React from "react";
import "./TicketAppScreen.css"


const TicketAppScreen = () => {
    return (
        <>
            <div className="top_container">
                <div className="name">
                    <img className="logo" src="../src/assets/logo.png" alt="Logo" />
                    <h2>Dentalign</h2>
                </div>

                <p className="text">We would always love to upgrade our system, to <br /> provide the best experience for our loyal beloved <br />customers.</p>
            </div>


            <div className="bottom_container">
                <h1 className="what">What can we do for you?</h1>
                <h6 className="send">Submit a ticket, so you will have a <br /> better experience!</h6>



                <div className="form">
                    <form action="">
                        <label htmlFor="email">Your Email Address</label>
                        <input type="text" placeholder="Your email goes here..."/>


                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Title goes here..." />


                        <label htmlFor="type">Type</label>
                        <select name="" id="">
                            <option value="" selected>Select an option</option>
                            <option value="">Technical Support</option>
                            <option value="">Clinic Facilities</option>
                            <option value="">Operational and Administration</option>
                        </select>

                        <label htmlFor="desc">Description</label>
                        <textarea name="" id="" placeholder="Description goes here..."></textarea>


                        <div className="buttons">
                            <button className="cancel_btn">Cancel</button>
                            <button className="send_btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TicketAppScreen