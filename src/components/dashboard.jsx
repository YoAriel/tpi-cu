import { Link } from "react-router-dom"
import { Lock } from "lucide-react"

const Dashboard = ({ isadmin = true }) => {
    return (

        isadmin && (
            <Link className="bg-emerald-600 hover:bg-emerald-600 text-white py-2 px-4 rounded-b-xl flex items-center transition duration-300 ease-in-out font-medium">
                <Lock className="inline-block mr-1 " size={18} />
                <span className="hiden sm:inline">Dashboard</span>
            </Link>
        )
    )
}

export default Dashboard