
import { Header, Footer } from '../components'
import BusinessList from '../components/list/business-list/BusinessList'
import LandingLayout from '../LandingLayout'

function BusinessScreen() {
    return (
        <LandingLayout>
            <Header />
            <BusinessList />
            <Footer />
        </LandingLayout>
    )
}
export default BusinessScreen
