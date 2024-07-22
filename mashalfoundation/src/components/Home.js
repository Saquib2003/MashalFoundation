import React from 'react';
import homeImage from '../assets/home.jpg';
import { useState } from 'react';

function MainContent() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  }

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, phone, message } = userData;

    // Check if any fields are empty
    if (!name || !email || !phone || !message) {
      alert('Please fill all the fields');
      return;
    }

    const res = await fetch(
      // 'https://msfound-4e1d4-default-rtdb.firebaseio.com//userDataRecords.json',
      'https://mashalfoundation-e5762-default-rtdb.firebaseio.com/userDataRecords.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        }),
      }
    );

    if (res.ok) {
      alert('Your Form Submitted Successfully');
    } else {
      alert('There was an error submitting your form. Please try again.');
    }
    setUserData({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Need Help?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to the Mashal Foundation, a dedicated NGO committed to supporting Muslim women navigating the challenges of triple talaq and related issues. Our mission is to provide compassionate assistance and effective solutions for women facing the complexities of divorce and family matters. We offer legal aid, emotional support, and advocacy, including guidance on securing fair alimony, to ensure that every woman has access to the resources she needs to rebuild her life with dignity and security. At the Mashal Foundation, we believe in empowering women through justice and community support, working tirelessly to create a future where every woman can thrive free from the constraints of unfair practices.
            </p>
            <p className="mb-8 leading-relaxed">
              मशाल फाउंडेशन में आपका स्वागत है, एक समर्पित गैर-सरकारी संगठन जो ट्रिपल तलाक गुज़ारा भत्ता
              और इससे संबंधित समस्याओं से जूझ रही मुस्लिम महिलाओं का समर्थन करता है। हमारा उद्देश्य महिलाओं को तलाक और पारिवारिक मामलों की जटिलताओं से निपटने के लिए सहानुभूतिपूर्ण सहायता और प्रभावी समाधान प्रदान करना है। हम कानूनी सहायता, भावनात्मक समर्थन और सलाह प्रदान करते हैं, जिसमें उचित भरण-पोषण प्राप्त करने की मार्गदर्शिका भी शामिल है, ताकि हर महिला को अपनी ज़िंदगी को सम्मान और सुरक्षा के साथ पुनर्निर्माण के लिए आवश्यक संसाधन मिल सकें। माशाल फाउंडेशन में, हम न्याय और सामुदायिक समर्थन के माध्यम से महिलाओं को सशक्त बनाने में विश्वास करते हैं, और इस दिशा में निरंतर काम करते हैं ताकि हर महिला एक ऐसे भविष्य की ओर बढ़ सके जहाँ वह अन्यायपूर्ण प्रथाओं से मुक्त होकर उन्नति कर सके।
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={homeImage} />
          </div>
        </div>
      </section>

      <section id="contact" className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Contact us at Mashal Foundation to receive comprehensive support, including legal guidance and emotional assistance, for overcoming the challenges of triple talaq
              and rebuilding a dignified future.
            </p>
            <a className="text-indigo-500" href="https://docs.google.com/forms/d/e/1FAIpQLSe8RB17xjYQDOyFtGJIv7LOJUwMsgr6wtLt52X2gaUYATFsNg/viewform?usp=sf_link ">Click here, To fill out the google form.</a>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
            <form method="POST">
              <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.name} onChange={postUserData} />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.email} onChange={postUserData} />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={userData.phone} onChange={postUserData} />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={userData.message} onChange={postUserData}></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submitData}>Submit</button>
              </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
