import './SideBar.css'

function SideBar() {
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
                        <p>Daily</p>
                        <p className="colorPeriod">Weekly</p>
                        <p>Monthly</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar