import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import greenStar from "../assets/greenStar.png";
const BannerSecond = () => {
  return (
    <div className="container mx-auto text-white flex items-center gap-28 py-[89px]">
      {/* first */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-4 items-center">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full border border-white"
                src={person1}
                alt="Avatar 1"
              />
            </div>
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full border border-white"
                src={person2}
                alt="Avatar 2"
              />
            </div>
            <div className="relative">
              <img
                className="w-12 h-12 rounded-full border border-white"
                src={person3}
                alt="Avatar 3"
              />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-[50px]">80K</span>
          </div>
        </div>
        <div>
          <p className="text-xl font-manrope text-semi-transparent-white leading-[34px]">
            Users are the backbone of any application and their needs is crucial{" "}
          </p>
        </div>
      </div>
      {/* second */}
      <div>
        <div className="flex gap-3 items-center">
          <img className="object-cover" src={greenStar} alt="" />
          <span className="font-extrabold text-[50px]">5.8</span>
        </div>
        <div>
          <p className="text-xl font-manrope text-semi-transparent-white leading-[34px]">
            Positive ratings by Pulse user around the wortd! Check the review
            here!
          </p>
        </div>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <span className="font-medium text-[50px]">Active User</span>
          <span className="text-[50px] font-black">65k</span>
        </div>
        <div>
          <p className="text-xl font-manrope text-semi-transparent-white leading-[34px]">
            Active users are essential for the vitality and success of any
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSecond;
