import { useEffect } from 'react';
import Contract from '../Contract/Contract';
import Extra from '../Extra/Extra';
import Faq from '../Faq/Faq';
import RecentQueries from '../RecentQueries/RecentQueries';
import Slider from '../Slider/Slider';
import Feedback from '../Feedback/Feedback';


const Home = () => {

    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <div >
            <Slider></Slider>
            <RecentQueries></RecentQueries>
            <Extra></Extra>
            <Faq></Faq>
            <Feedback></Feedback>
            <Contract></Contract>        

        </div>
    );
};

export default Home;