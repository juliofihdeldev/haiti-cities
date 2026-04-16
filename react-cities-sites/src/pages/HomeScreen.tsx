
import { Header, Footer, InterestingSection, NewsSection, EventSection } from '../components'
import LandingLayout from '../LandingLayout'

function HomeScreen() {
    return (
        <LandingLayout>
            <Header />
            <NewsSection />
            <EventSection />
            <InterestingSection />
            <Footer />
        </LandingLayout>
    )
}

export default HomeScreen
