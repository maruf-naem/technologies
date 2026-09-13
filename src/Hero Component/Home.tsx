import heroImage from '../assets/banner-stack.png'
const Home = () => {
    return (
        <div className="container m-auto">
            <div className="flex justify-between items-center">
                <div className='flex flex-col gap-5 w-[50%]'>
                    <h1 className='text-[#0F172A] text-6xl font-extrabold'>Build Your Ideal<br></br>
                        <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                    <p className='text-[#475569] text-[20px]'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className='flex gap-2'>
                        <button className='bg-linear-to-r from-[#F97316]  to-[#EC4899] text-white py-2 px-6 rounded-lg cursor-pointer'>Explore Technologies</button>
                        <button className='py-2 px-6 rounded-lg border border-[#E5E7EB] cursor-pointer'>Explore Technologies</button>
                    </div>
                </div>
                <img src={heroImage} alt=""/>
            </div>
        </div>
    );
};

export default Home;