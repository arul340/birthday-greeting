import FlipCard from "@/components/flip-card";
import Heading from "@/components/heading";

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
  return (
    <>
      <div className="bg-[#FCFCFE] mb-32">
        <div className="container mx-auto px-4 lg:px-24 ">
          <Heading />

          <section className="font-inter">
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
              may keep the coupon if he deems it necessary. Coupons hold no cash
              value, but tons of sentimental value.
            </p>
          </section>

          <div className="mt-8 grid lg:grid-cols-2 gap-2 space-y-10 md:space-y-0 ">
            {coupons.map((coupon) => (
              <FlipCard
                key={coupon.code}
                front={coupon.front}
                back={coupon.back}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupons;
