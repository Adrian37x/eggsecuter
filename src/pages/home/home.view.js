import useHome from './home.logic';

function Home() {
    const {isIntroTextCollapsed, toggleIntroText} = useHome();

    return (
        <>
            <h2>Welcome my name is Adrian</h2>

            <p>
                In here you will get insights on all of my projects and more...
            </p>
            {
                isIntroTextCollapsed ? null :
                <p>bla bla bla bla</p>
            }

            <button onClick={toggleIntroText}>
                {isIntroTextCollapsed ? <>Read more</> : <>Read less</>}
            </button>
        </>
    );
}

export default Home;
