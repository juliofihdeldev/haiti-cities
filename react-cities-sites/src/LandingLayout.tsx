
import './App.css'
import Layout from './components/layout/Layout'

function LandingLayout({ children }: any) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default LandingLayout
