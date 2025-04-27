import React from 'react'

const Project = () => {
  return (
    <div id="Project" className='min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 xl:px-32'>

      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className='grid grid-cols-1 lg:grid-cols2 xl:grid-cols-3 gap-5'>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
          <h1 className='text-3xl font-semibold'>Fast Food Restaurant Website</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack: React.js, Tailwind CSS, Docker</h3>
          <p className='text-sm text-gray-600'>Designed and developed a responsive restaurant website with interactive menus and smooth navigation. Used Tailwind CSS for fast, clean styling and deployed the project using Docker for easy local development and testing. Mobile-first layout ensures seamless experience across devices.</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
          <h1 className='text-3xl font-semibold'>Diabetes Prediction Model</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack: Python, Pandas, Scikit-learn, Logistic Regression</h3>
          <p className='text-sm text-gray-600'>Built a machine learning model to predict diabetes risk based on health data. Performed data cleaning, feature engineering, and evaluation using accuracy, precision, and recall metrics. Created visualizations to explain model performance and insights.

</p>
        </div>

        <div className='text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50'>
          <h1 className='text-3xl font-semibold'>Wine Quality PCA Analysis</h1>
          <h3 className='text-xl text-gray-700'>Tech Stack: Python, Scikit-learn, Matplotlib, Jupyter Notebook</h3>
          <p className='text-sm text-gray-600'>Used Principal Component Analysis (PCA) to reduce dimensionality and visualize wine dataset patterns. Explored data variance and highlighted how PCA simplifies complex datasets. Created clear graphs and analysis for presentations and reports.</p>
        </div>


      </div>

    </div>

  )
}

export default Project