import './SideBar.css' 
import imgJeremy from '../../assets/images/image-jeremy.png'

function SideBar(props) {

    

    return (
        <>
            <div className="dflex">
                <div className="grande">
                    <img src={imgJeremy} alt="" />
                    <div className="margin-left">
                        <p>Report for</p>
                        <h2>Jeremy</h2>
                        <h2>Robson</h2>
                    </div>
                </div>
                <div className="mini">
                    <div className="margin-left">
                        <p className={props.time === 'daily' ? 'active' : ''} onClick={props.daily}>Daily</p>
                        <p className={props.time === 'weekly' ? 'active' : ''} onClick={props.weekly}>Weekly</p>
                        <p className={props.time === 'monthly' ? 'active' : ''} onClick={props.monthly}>Monthly</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar