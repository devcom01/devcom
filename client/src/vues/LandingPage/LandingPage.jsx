import "./landing.scss"
import devImg from '../../Assets/imgs/landingdevskills.png'
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Layout from "../../components/Layout/Layout"
export default function LandingPage() {
    return (
        <>
            <Layout>
                <div className='landing-page'>
                    {/* first-section */}
                    <div className="first-section">
                        <div className="containers">
                            <div className='text-container' >
                                <CodeOffIcon style={{ background: "transparent", color: "white" }} />
                                <div>
                                    Sharpen your coding skills

                                </div>
                                <p>
                                    Challenge yourself on small coding exercises called "kata".
                                    Each kata is crafted by the community to help you strengthen different coding skills.
                                    Master your current language of choice,
                                    or learn any of the 55+ programming languages supported.
                                </p>
                                <button>
                                    Join the Dojo
                                </button>
                            </div>
                        </div>
                        <div className="containers">
                            <img src={devImg} />
                        </div>
                    </div>



                    {/* second-section */}



                </div >

            </Layout>
        </>)
}
