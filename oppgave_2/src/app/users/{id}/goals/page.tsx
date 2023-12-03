import UserCompetition from "@/features/users/UserCompetition"
import UserGoal from "@/features/users/UsersGoal"
import { Link } from "lucide-react"

const GoalsPage = () => {
    

    return (
        <div>
            <Link key="/users/{id}/goals/create" href="/users/{id}/goals/create">Lag ny økt</Link>
            
            <UserCompetition />
        </div>
        
    )
}

export default GoalsPage