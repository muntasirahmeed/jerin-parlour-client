import React from "react";
import img1 from "../../Assests/Images/Image/Ellipse 90.png";
import img2 from "../../Assests/Images/Image/Ellipse 91.png";
import img3 from "../../Assests/Images/Image/Ellipse 92.png";
const Testimonial = () => {
  return (
    <div className="bg-base-100 py-20">
      <div className="container">
        <h1 className="mb-16 text-center font-bold text-3xl text-accent">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:justify-items-center lg:justify-items-start">
          <div class="">
            <div className="flex items-center gap-5">
              <img src={img1} className="w-16 h-16" alt="" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Nash Patrik
                </h2>
                <p className="text-gray-600 text-sm">CEO, Manpol</p>
              </div>
            </div>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating mt-6">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>{" "}
          <div class="">
            <div className="flex items-center gap-5">
              <img src={img2} className="w-16 h-16" alt="" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Nash Patrik
                </h2>
                <p className="text-gray-600 text-sm">CEO, Manpol</p>
              </div>
            </div>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating mt-6">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>{" "}
          <div class="">
            <div className="flex items-center gap-5">
              <img src={img3} className="w-16 h-16" alt="" />
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Nash Patrik
                </h2>
                <p className="text-gray-600 text-sm">CEO, Manpol</p>
              </div>
            </div>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
            </p>
            <div class="rating mt-6">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
