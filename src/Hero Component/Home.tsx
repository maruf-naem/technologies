import heroImage from '../assets/banner-stack.png'
const Home = () => {
    return (
        <div className="container m-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className='text-[#0F172A] text-6xl font-extrabold'>Build Your Ideal<br></br>
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                    <p className='text-[#475569] text-[20px]'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div>
                        
                    </div>
                </div>
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Home;