<div className='py-20'>
{/* upper part */}
<div className='course-page py-12 px-5 flex gap-10 justify-center'>
    {/* left */}
    <div className='max-w-2xl course-page-left'>
        <div>
            {/* navigation  */}
            <div className='course-page-nav' >
                <span>Home <FaChevronRight /></span>
                <span>Course <FaChevronRight /></span>
                <span>Course Name</span>
            </div>     
            <div>
                <h1 className='text-4xl font-semibold mt-2'>Course Name</h1>
                <h2 className='text-lg my-5 leading-9'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, adipisci minus alias expedita provident Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, adipisci minus alias expedita provident</h2>
            </div>
            <div className='flex gap-10'>
                <p>432 Learners</p> 
                <p>Sale end : 01:01:01</p>
            </div>
        </div>
        <div className='mt-32 pt-5'>
            <nav>
                <ul className='flex gap-10'>
                    <li className='' >About Course</li>
                    <li>Course Objective</li>
                    <li>Requirement</li>
                    <li>Course Review</li>
                    <li>FAQs</li>
                </ul>
            </nav>
            {/* About part */}
            <div>
                <h2>About Course</h2>
                <p>It looks like you want information about a specific course or courses in general. Could you please provide more details or specify the course you are interested in? For example, are you looking for details about a university course, an online course, or a particular subject? This will help me provide the most relevant information.
                <ul className='course-page-left-list list-disc ps-20 py-5 flex flex-col gap-3'>
                    <li>Data Structures and Algorithms</li>
                    <li>Operating Systems</li>
                    <li>Artificial Intelligence</li>
                    <li>Database Systems</li>
                    <li>Software Engineering</li>
                </ul>
                </p>
            </div>
            {/* Intendent Learning Objective */}
            <div>
                <p>This HTML code organizes the Intended Learning Objectives for various courses into a clear, hierarchical list format, making it easy to read and navigate. You can further customize this list as needed.</p>
                <ul className='course-page-left-list list-disc ps-10 py-5 grid grid-cols-2 gap-7 '>
                    <li>Understand the key concepts and .</li>
                    <li>Analyze the internal and external .</li>
                    <li>Develop strategic plans .</li>
                    <li>Apply strategic management tools to real.</li>
                    <li>Understand the ethical and global .</li>
                </ul>
        </div>
        {/* <div>
            <p>Rating</p>
            <div>
                <div>
                    <h1>4.8</h1>
                    <p>stars</p>
                    <p>3435 review</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>5 Start</span>
                            <input type="range" min="0" max="100"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
        {/* Review feedback Here*/}
        <div></div>
        </div>
    </div>
    {/* right */}
    <div className='p-3 rounded-lg bg-white' >
            <div className='max-w-96' >
                {/* Thumbnail */}
                <div className='w-full' >
                    <img src="https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg" width='100%' alt="" className='rounded-lg' />
                </div>
                {/* Content */}
                <div className='p-5'>
                    <h1 className='text-4xl text-center mb-3'>452200 Rs</h1>
                    <div>
                        <div className=' flex justify-between'>
                            <button className='w-4/5 bg-gray-900  text-white rounded-lg '>Add to Card</button>
                            <div className='p-4 border-2 border-black'>
                                <FaRegHeart />
                            </div>
                        </div>
                        <button className='w-full border-2 border-black rounded-lg px-12 py-3 mt-4'>Buy Now</button>
                    </div>
                    <ul className='course-page-right-desc flex flex-col py-3 px-7'>
                        <li>Time <span>60 Min</span></li>
                        <li>Time <span>60 Min</span></li>
                        <li>Time <span>60 Min</span></li>
                        <li>Time <span>60 Min</span></li>
                    </ul>
                </div>
                {/* Instructor */}
                <div>
                    <h3 className='text-3xl font-semibold' >Instructor</h3>
                    <div className='mt-5'>
                        <div className='flex gap-5 px-5 items-center	'>
                            {/* user image */}
                            <div className='max-w-8	' >
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" width='100%' alt="" />
                            </div>
                            <h4 className='font-semibold' >Name of Instructor</h4>
                        </div>
                        <div className='ps-16 mt-3'>
                        {/* describe */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo nobis atque earum
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex gap-5 px-5 items-center	'>
                            {/* user image */}
                            <div className='max-w-8	' >
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png" width='100%' alt="" />
                            </div>
                            <h4 className='font-semibold' >Name of Instructor</h4>
                        </div>
                        <div className='ps-16 mt-3'>
                        {/* describe */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo nobis atque earum
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
</div>