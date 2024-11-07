import FlipCard from "@/components/flip-card";
import Heading from "@/components/heading";
import { useEffect } from "react";

const coupons = [
  {
    code: "Example Giftcard Code",
    front: "coupon/image.png",
    back: "coupon/image.png",
  },
  {
    code: "Example Giftcard Code",
    front: "coupon/image.png",
    back: "coupon/image.png",
  },
];

const Coupons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#FCFCFE]">
        <div className="container mx-auto px-4 lg:px-24 ">
          <section className="overflow-hidden text-gray-700">
            <div className="mt-28">
              <Heading title="coupons" subtitle="for your special day &lt;3" />
            </div>
            <section className="font-inter ">
              <h3 className="font-semibold my-5">Terms & Condition</h3>
              <p className="font-light text-sm">
                Please accept these terms and conditions before using your
                coupons. Offers are only valid with a participating bang Ando.
                Bang Ando is not responsible for lost coupons, however, he may
                feel bad and give you a little something extra to make up for it
                (wink, wink, nudge, nudge). Coupons may be combined to create
                awesome mega-coupons! Expiration: The day before next year’s
                birthday so we can do another exciting things next year. The
                coupon must be presented to bang Ando for redemption. Bang Ando
                may keep the coupon if he deems it necessary. Coupons hold no
                cash value, but tons of sentimental value.
              </p>
            </section>

            <div className="mt-8 grid lg:grid-cols-2 gap-2 space-y-10 md:space-y-0 mb-32">
              {coupons.map((coupon) => (
                <FlipCard
                  key={coupon.code}
                  front={coupon.front}
                  back={coupon.back}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Coupons;
