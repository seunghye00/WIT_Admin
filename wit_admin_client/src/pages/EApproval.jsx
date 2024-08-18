import Todo from '../components/Section/EApproval/SideContents/ApprList/Todo'
import Upcoming from '../components/Section/EApproval/SideContents/ApprList/Upcoming'
import Lateness from '../components/Section/EApproval/SideContents/DocuList/Lateness'
import Leave from '../components/Section/EApproval/SideContents/DocuList/Leave'
import Prop from '../components/Section/EApproval/SideContents/DocuList/Prop'
import Home from '../components/Section/EApproval/SideContents/Home/Home'
import Appr from '../components/Section/EApproval/SideContents/PrivateList/Appr'
import Return from '../components/Section/EApproval/SideContents/PrivateList/Return'
import View from '../components/Section/EApproval/SideContents/PrivateList/View'
import SideNavi from '../components/Section/EApproval/SideNavi/SideNavi'
import { Routes, Route } from 'react-router-dom'

const EApproval = () => {
    return (
        <>
            <SideNavi />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="apprList/todo" element={<Todo />} />
                <Route path="apprList/upcoming" element={<Upcoming />} />
                <Route path="privateList/appr" element={<Appr />} />
                <Route path="privateList/return" element={<Return />} />
                <Route path="privateList/view" element={<View />} />
                <Route path="docuList/prop" element={<Prop />} />
                <Route path="docuList/leave" element={<Leave />} />
                <Route path="docuList/lateness" element={<Lateness />} />
            </Routes>
        </>
    )
}

export default EApproval
