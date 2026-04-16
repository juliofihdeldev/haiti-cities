
import { Header, Footer } from '../components'
import EventList from '../components/list/events-list/EventList'
import LandingLayout from '../LandingLayout'

function EventScreen() {
    return (
        <LandingLayout>
            <Header />
            <EventList />
            <Footer />
        </LandingLayout>
    )
}

export default EventScreen
