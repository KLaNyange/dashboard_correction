import './SideBar.css'

function SideBar(props) {

    

    return (
        <>
            <div className="dflex">
                <div className="grande">
                    {/* <img src="" alt="" /> */}
                    <div className="margin-left">
                        <p>Report for</p>
                        <h2>Jeremy</h2>
                        <h2>Robson</h2>
                    </div>
                </div>
                <div className="mini">
                    <div className="margin-left">
                        <p onClick={props.daily}>Daily</p>
                        <p className="colorPeriod" onClick={props.weekly}>Weekly</p>
                        <p onClick={props.monthly}>Monthly</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar