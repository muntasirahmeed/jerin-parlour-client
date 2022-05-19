import React from "react";
import img1 from "../../Assests/Images/Image/Ellipse 90.png";
import img2 from "../../Assests/Images/Image/Ellipse 91.png";
import img3 from "../../Assests/Images/Image/Ellipse 92.png";
const Testimonial = () => {
  return (
    <div className="bg-base-100 py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center lg:justify-items-start">
          <div class="card w-96  ">
            <div class="card-body">
              <div className="flex items-center gap-5">
                <img src={img1} className="w-16 h-16" alt="" />
                <div>
                  <h2 className="text-xl font-semibold text-accent">
                    Nash Patrik
                  </h2>
                  <p className="text-gray-600">CEO, Manpol</p>
                </div>
              </div>

              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
              </p>
              <div class="rating mt-5">
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
          <div class="card w-96  ">
            <div class="card-body">
              <div className="flex items-center gap-5">
                <img src={img3} className="w-16 h-16" alt="" />
                <div>
                  <h2 className="text-xl font-semibold text-accent">
                    Nash Patrik
                  </h2>
                  <p className="text-gray-600">CEO, Manpol</p>
                </div>
              </div>

              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
              </p>
              <div class="rating mt-5">
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
          <div class="card w-96  ">
            <div class="card-body">
              <div className="flex items-center gap-5">
                <img src={img2} className="w-16 h-16" alt="" />
                <div>
                  <h2 className="text-xl font-semibold text-accent">
                    Nash Patrik
                  </h2>
                  <p className="text-gray-600">CEO, Manpol</p>
                </div>
              </div>

              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                commodo ipsum <br /> duis laoreet maecenas. Feugiat{" "}
              </p>
              <div class="rating mt-5">
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
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            class="w-full"
          />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            class="w-full"
          />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            class="w-full"
          />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
