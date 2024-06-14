import React from 'react';

const App = () => {
  const blogPosts = [
    {
      title:"UI DESIGN",
      subtitle: "Card UI Examples And Best Practices For Product Owners ",
      description: "Now in 2022,more than 2.7 billion app users in the world prefer Andriod apps.We follow the google design principles and the design thinking process to create seamless user experiences and aesthetic interfaces for mobile apps for the andriod platform. We make android apps more relevant to users that users love to use and bring your business experience to the next level.",
      imgSrc: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/89995925f3fd323ce138bf8024cad9f1.png"
    },
    {
      title: "UI DESIGN",
      subtitle: "Card UI Examples And Best Practices For Product Owners",
      description: "Now in 2022,more than 2.7 billion app users in the world prefer Andriod apps.We follow the google design principles and the design thinking process to create seamless user experiences and aesthetic interfaces for mobile apps for the andriod platform. We make android apps more relevant to users that users love to use and bring your business experience to the next level.",
      imgSrc: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/89995925f3fd323ce138bf8024cad9f1.png"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mt-8 mb-12 text-center">Latest Blogs</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center my-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="md:ml-6 md:mr-6 mt-4 md:mt-0">
            <h2 className="text-md text-red-700 font-bold">{post.title}</h2>
            <h2 className="text-xxl font-bold">{post.subtitle}</h2>
            <p className="mt-2 text-gray-600">{post.description}</p>
          </div>  
          <img src={post.imgSrc} alt="Blog Post" className="w-full md:w-1/4 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default App;

