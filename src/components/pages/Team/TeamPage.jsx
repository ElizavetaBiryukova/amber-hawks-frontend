import InfoTeam from "./InfoTeam/InfoTeam"
import CoachesList from "./CoachesList/СoachesList"
import PlayersList from "./PlayersList/PlayersList"
import Form from "@/components/UI/form/form"

function TeamPage() {
    return (
        <>
            <InfoTeam />
            <CoachesList />
            <PlayersList />
            <Form />
        </>
    )
}

export default TeamPage