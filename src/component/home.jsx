import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import {NavLink} from 'react-router-dom';
import logo from './../../public/logo/logo.png'
import heroBackground from '../Assets/hero.mp4'
import courseFeatureBackground from '../Assets/courseFeatureBackground.jpg'
import SementicRightImage from '../Assets/SementicRightImage.png'

const courseFeature = [
    'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Home = () => {
    return (
        <>
            <LandingPage>
                <div>
                    <header className='mt-5 absolute w-full'>
                        <nav className='flex justify-between px-5 w-full'>
                            <div className='w-32' >
                                <img src={logo} alt="Logo" width='100%' />
                            </div>
                            {/* Center nav bar */}
                            <div className='hidden'>
                                <div className='flex'>
                                    <div>
                                        <NavLink>Home</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Courses</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Blogs</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>About</NavLink>
                                    </div>
                                    <div>
                                        <NavLink>Contact</NavLink>
                                    </div>
                                </div>
                                {/* login logout */}
                                <div>
                                    <button>Get Started</button>
                                </div>
                            </div>
                            <div>
                                <IoMenu size={'3rem'} color='white'/>                            
                            </div>
                        </nav>
                    </header>    
                    {/* hero part */}
                    <div>
                        <div className='h-screen' >
                            <video src={heroBackground} autoPlay loop muted className='h-full w-full object-cover'></video>
                            <div className='absolute top-0 text-white h-full flex flex-col justify-center w-4/5 px-5'>
                                <h1 className='font-semibold text-9xl leading-tight'>Master the Stock Market with Our Expert-Led Courses</h1>
                                <p className='text-5xl font-normal mt-10 leading-snug'>Learn the secrets of stock market investing from industry professionals.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Course Page */}
                <div className='feature-course-page my-10'>
                    <h1 className='text-8xl text-center my-10'>Our Course Feature</h1>
                    {/* container */}
                    <div className='feature-container p-8 flex justify-around flex-wrap'> 
                        {/* card */}
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                        <div className='course-feature w-72'>
                            {/* image */}
                            <div className='h-96 rounded-lg border-4 border-black'></div>
                            {/* content */}
                            <div className='py-4'>
                                <h4 className='text-lg font-bold'>Beginner’s Guide to Stock Market Investing</h4>
                                <p className='text-base'>Understand the basics, start investing, and manage risks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sementic */}
                <div className='flex'>
                    {/* left */}
                    <div className='flex flex-col gap-y-14'>
                        <div>
                            <h2 className='text-7xl	'>Schematic</h2>
                                <button className='text-xl border-2 rounded-3xl border-black py-2 px-7'>Brand Identity</button>    
                        </div>
                        {/* content */}
                        <div className='flex gap-11'> 
                            {/* numberr */}
                            <div className='text-7xl'>01</div>
                            {/* paragraph */}
                            <div>
                                <h3 className='text-4xl font-semibold'>Background</h3>
                                <p className='text-2xl leading-10 mt-3'>Give a brief overview of your project here. 
                                    You may talk about the client brand and the main project challenge.</p>
                            </div>
                        </div>
                        <div className='flex gap-11'> 
                            {/* numberr */}
                            <div className='text-7xl'>01</div>
                            {/* paragraph */}
                            <div>
                                <h3 className='text-4xl font-semibold'>Background</h3>
                                <p className='text-2xl leading-10 mt-3'>Give a brief overview of your project here. 
                                    You may talk about the client brand and the main project challenge.</p>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <div>
                            <img src={SementicRightImage} alt="" />
                        </div>
                    </div>
                </div>
            </LandingPage>            
        </>
    )       
}

export default Home;
const LandingPage = styled.div`
.feature-course-page {
    background-image: url(${courseFeatureBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
 .feature-container > div > div:nth-child(1){
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
 }   
 .feature-container > div:nth-child(1) > div:nth-child(1){
    background-image: url(${courseFeature[0]});
 }   
 .feature-container > div:nth-child(2) > div:nth-child(1){
    background-image: url(${courseFeature[1]});
 }   
 .feature-container > div:nth-child(3) > div:nth-child(1) {
    background-image: url(${courseFeature[2]});
 }   
`