import {
  FiGlobe,
  FiMapPin,
  FiSearch,
  FiCalendar,
  FiUsers,
  FiLifeBuoy,
  FiArrowRight,
  FiMessageCircle,
  FiMail,
} from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen relative">
        <img
          src="./hero.png"
          alt="Hero Image"
          className="absolute left-0 bottom-0 animate-pulse"
        />

        <div className="container">
          <div className="flex justify-between items-center p-6">
            <div>
              <img src="./logo.png" alt="Logo" className="h-10" />
            </div>
            <nav>
              <ul className="text-base font-poppins flex gap-5 items-center">
                <li className="font-normal text-white">Home</li>
                <li className="font-light text-gray-300">Hotels</li>
                <li className="font-light text-gray-300">Restaurants</li>
                <li className="font-light text-gray-300">Tours</li>
                <li className="font-light text-gray-300">destinations</li>
                <li className="font-light text-gray-300">Activities</li>
                <li className="font-light text-gray-300">Contact</li>
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <img src="./profile.png" alt="Profile" className="rounded-full" />

              <p className="font-poppins text-sm font-medium text-white">
                Ales Nesetril
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-40 gap-36">
            <div className="flex justify-center items-center flex-col gap-8 z-50">
              <h1 className="font-poppins text-5xl text-white font-semibold">
                Discover the most engaging places
              </h1>
              <button className="font-semibold text-white text-lg bg-[#7B61FF] p-4 rounded-xl flex items-center gap-1">
                <FiGlobe className="font-semibold text-xl" />

                <span>Discover on 3D Globe</span>
              </button>
            </div>

            <div className="bg-white flex items-center rounded-lg p-3 gap-14 w-fit mx-auto z-50">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-semibold text-xl text-[#FFA800]" />
                <div>
                  <p className="text-[#5B5B5B] font-poppins text-sm font-light">
                    Location
                  </p>
                  <h3 className="text-[#161414] font-poppins font-medium text-base">
                    Explore nearby destinations
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiLifeBuoy className="text-semibold text-xl text-[#FFA800]" />
                <div>
                  <p className="text-[#5B5B5B] font-poppins text-sm font-light">
                    Activity
                  </p>
                  <h3 className="text-[#161414] font-poppins font-medium text-base">
                    All Activities
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiCalendar className="text-semibold text-xl text-[#FFA800]" />
                <div>
                  <p className="text-[#5B5B5B] font-poppins text-sm font-light">
                    When
                  </p>
                  <h3 className="text-[#161414] font-poppins font-medium text-base">
                    Choose a Date
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiUsers className="text-semibold text-xl text-[#FFA800]" />
                <div>
                  <p className="text-[#5B5B5B] font-poppins text-sm font-light">
                    Guests
                  </p>
                  <h3 className="text-[#161414] font-poppins font-medium text-base">
                    1 guest
                  </h3>
                </div>
              </div>
              <div className="bg-[#7B61FF] w-12 h-12 rounded-md flex justify-center items-center cursor-pointer">
                <FiSearch className="text-white text-xl font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-24">
        <div className="container">
          <h3 className="text-[#161414] font-poppins font-semibold text-3xl">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-6 pt-16 gap-4">
            <div>
              <img
                src="./popular-1.png"
                alt="Gallery Image-1"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Big Sur
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  California, USA
                </p>
              </div>
            </div>
            <div>
              <img
                src="./popular-2.png"
                alt="Gallery Image-2"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Prescott
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  Arizona, USA
                </p>
              </div>
            </div>
            <div>
              <img
                src="./popular-3.png"
                alt="Gallery Image-3"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Fort Mayers
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  Florida, USA
                </p>
              </div>
            </div>
            <div>
              <img
                src="./popular-4.png"
                alt="Gallery Image-4"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Tucson
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  Arizona, USA
                </p>
              </div>
            </div>
            <div>
              <img
                src="./popular-5.png"
                alt="Gallery Image-5"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  St. Joseph
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  Michigan, USA
                </p>
              </div>
            </div>
            <div>
              <img
                src="./popular-6.png"
                alt="Gallery Image-6"
                className="h-44 rounded-md mb-2"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Madrid
                </h3>
                <p className="font-poppins text-[#979797] font-normal text-sm">
                  Spain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-between items-center">
          <h3 className="text-[#161414] font-poppins font-semibold text-3xl">
            Hotels and Restaurants
          </h3>
          <button className="font-poppins text-base text-[#5243C2] p-3 rounded-md bg-[#F6F4FF] font-medium flex gap-1 items-center">
            <span>View all</span>
            <FiArrowRight className="text-[#5243c2] text-xl font-bold" />
          </button>
        </div>

        <div className="flex justify-between items-center gap-5 pt-16">
          <div>
            <img
              src="./res-1.png"
              alt="Restaurant Image-1"
              className="rounded-md mb-4"
            />
            <div>
              <h4 className="font-poppins font-medium text-lg text-[#161414]">
                Monastero Santa Rosa Hotel
              </h4>
              <div className="flex justify-between items-center">
                <p className="font-poppins font-normal text-sm text-[#979797]">
                  Salerno, Italy
                </p>
                <p>*****</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./res-2.png"
              alt="Restaurant Image-2"
              className="rounded-md mb-4"
            />
            <div>
              <h4 className="font-poppins font-medium text-lg text-[#161414]">
                Grand Hotel Tremezzo
              </h4>
              <div className="flex justify-between items-center">
                <p className="font-poppins font-normal text-sm text-[#979797]">
                  Lake Como, Italy
                </p>
                <p>*****</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./res-3.png"
              alt="Restaurant Image-3"
              className="rounded-md mb-4"
            />
            <div>
              <h4 className="font-poppins font-medium text-lg text-[#161414]">
                The Oberoi Udaivilas, Udaipur
              </h4>
              <div className="flex justify-between items-center">
                <p className="font-poppins font-normal text-sm text-[#979797]">
                  Udaipur, India
                </p>
                <p>*****</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./res-4.png"
              alt="Restaurant Image-4"
              className="rounded-md mb-4"
            />
            <div>
              <h4 className="font-poppins font-medium text-lg text-[#161414]">
                AKA Beverly Hills
              </h4>
              <div className="flex justify-between items-center">
                <p className="font-poppins font-normal text-sm text-[#979797]">
                  Los Angeles, United States
                </p>
                <p>*****</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-24">
        <div className="container">
          <div className="flex justify-between items-center">
            <h3 className="text-[#161414] font-poppins font-semibold text-3xl">
              Travel Tips and Advice
            </h3>
            <button className="font-poppins text-base text-[#5243C2] p-3 rounded-md bg-[#F6F4FF] font-medium flex gap-1 items-center">
              <span>View all</span>
              <FiArrowRight className="text-[#5243c2] text-xl font-bold" />
            </button>
          </div>
          <div className="pt-16 grid grid-cols-2 gap-6">
            <div className="flex gap-6">
              <img
                src="./travel-1.png"
                alt="Travel Image-1"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[#161414] font-poppins font-semibold text-xl mb-4">
                    East Village Ice Cream Crawl
                  </h3>
                  <p className="font-poppins text-[#5B5B5B] font-normal text-base">
                    We will stop at five different world-class ice cream shops
                    on this 1.5 mile 1.5 hour tour. At each ice cream store
                    we'll explore the story behind the business and see what
                    makes the ice cream unique as you savor every…
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiCalendar />
                    <span>Today</span>
                  </p>
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiUsers />
                    <span> Maria Philips</span>
                  </p>
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiMessageCircle />
                    <span>2</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <img
                src="./travel-2.png"
                alt="Travel Image-2"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-[#161414] font-poppins font-semibold text-xl">
                    Brooklyn Bridge cinematic photo walk
                  </h3>
                  <p className="font-poppins text-[#5B5B5B] font-normal text-base">
                    This experience takes place at the Brooklyn Bridge Park and
                    Brooklyn Bridge, but I’m always open to capture clients at
                    different locations upon request for an additional charge.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiCalendar />
                    <span>Today</span>
                  </p>
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiUsers />
                    <span>James Calzoni</span>
                  </p>
                  <p className="font-poppins text-sm font-normal text-[#878787] flex items-center gap-1">
                    <FiMessageCircle />
                    <span>13</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div className="container">
          <h3 className="text-[#161414] font-poppins font-semibold text-3xl">
            Popular Destinations
          </h3>
          <div className="flex items-center justify-between pt-16">
            <div>
              <img
                src="./activities-1.png"
                alt="Gallery Image-1"
                className="h-80 rounded-md mb-4"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Sailing
                </h3>
              </div>
            </div>
            <div>
              <img
                src="./activities-2.png"
                alt="Gallery Image-2"
                className="h-80 rounded-md mb-4"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Climbing
                </h3>
              </div>
            </div>
            <div>
              <img
                src="./activities-3.png"
                alt="Gallery Image-3"
                className="h-80 rounded-md mb-4"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Skiing
                </h3>
              </div>
            </div>
            <div>
              <img
                src="./activities-4.png"
                alt="Gallery Image-4"
                className="h-80 rounded-md mb-4"
              />
              <div>
                <h3 className="font-poppins font-medium text-lg text-[#161414]">
                  Hiking
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <div>
                <h3 className="text-[#161414] font-poppins font-semibold text-3xl">
                  About Us
                </h3>
                <p className="text-[#5B5B5B] text-base  font-poppins font-normal mt-8 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a sapien justo. Nulla facilisis tristique
                  imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam
                  porta consectetur lorem sit amet ultrices. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </p>
                <button className="font-poppins text-base text-[#5243C2] p-3 rounded-md bg-[#F6F4FF] font-medium flex gap-1 items-center">
                  <span>Read more</span>
                  <FiArrowRight className="text-[#5243c2] text-xl font-bold" />
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <img src="./about.png" alt="About Image" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#F9F9F9] p-12">
        <div className="container">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] justify-items-center">
            <div>
              <img src="./footer-logo.png" alt="Logo" className="mb-4" />
              <p className="font-poppins text-sm font-normal text-[#5B5B5B] mb-3">
                We always make our customers happy by providing as many choises
                as possible
              </p>
              <div className="flex items-center gap-4">
                <span>
                  <BsFacebook className="text-[#5243C2] text-2xl" />
                </span>
                <span>
                  <BsTwitter className="text-[#5243C2] text-2xl" />
                </span>
                <span>
                  <BsInstagram className="text-[#5243C2] text-2xl" />
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-[#161414] font-poppins font-medium text-xl mb-4">
                About
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  About Us
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Features
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Menu
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  News
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#161414] font-poppins font-medium text-xl mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Why 2rism
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Partner With Us
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  FAQ
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Blog
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#161414] font-poppins font-medium text-xl mb-4">
                Support
              </h3>
              <ul className="flex flex-col gap-2">
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Account
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Support Center
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Feedback
                </li>
                <li className="text-[#5B5B5B] font-poppins text-base font-normal">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-medium text-xl text-[#161414] mb-4">
                Subscribe on our destination review newsletters
              </h3>
              <div>
                <label
                  htmlFor="email"
                  className="font-poppins text-sm text-[#161414] font-medium block mb-2"
                >
                  Your email
                </label>
                <div className="flex gap-3">
                  <div className="relative">
                    <span className="absolute top-[17px] left-[10px]">
                      <FiMail className="text-[#FFA800] text-2xl font-semibold" />
                    </span>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      className="outline-none px-9 py-4 block rounded-lg"
                    />
                  </div>
                  <button className="bg-[#7B61FF] flex items-center px-5 rounded-lg">
                    <FiArrowRight className="text-white font-bold text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
