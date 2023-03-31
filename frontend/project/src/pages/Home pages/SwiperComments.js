// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import commentuser from '../../imgs/commentuser.jpg'



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function SwiperComments() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{   
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
      >
        {[1,2,3,4,5].map(()=>{
            return(
            <SwiperSlide>
                <div className="comment-card p-3 py-4 text-start">
                    <p className="comment-card-text mb-5 text-black-50 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    <div className="comment-card-user d-flex gap-2">
                        <img src={commentuser} alt="user img" />
                        <div className="comment-card-user-deatails text-center py-3">
                            <h6>Karem Safar</h6>
                            <p className="purple-text">Student</p>
                        </div>
                    </div>
                    <span className="comment-card-logo-contianer">
                      <span className="comment-card-logo"></span>
                    </span>
                </div>
            </SwiperSlide>

            )
        })}
      </Swiper>
    </>
  );
}
export default SwiperComments