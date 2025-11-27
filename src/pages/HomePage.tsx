// src/pages/Home/HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSlider from "../components/Slider";
import { Helmet } from "react-helmet-async";
import { FaRegStar } from "react-icons/fa";

export default function HomePage() {
  const reviews = [
    {
      name: "Mrs. Thúy",
      role: "Nghệ Sĩ",
      content:
        "Thực sự thích hương vị Nem chua ở đây, với người yêu ẩm thực xứ Thanh thì ai cũng sẽ thích hương vị Nem chua đặc biệt này.",
      avatar: "/images/person1.jpeg",
      stars: 5,
    },
    {
      name: "Ngọc Anh VTC",
      role: "Phóng viên VTC",
      content:
        "Được chứng kiến quy trình của Nem chua Hoa Thông, mình rất tin tưởng an toàn vệ sinh ẩm thực của Nem chua Hoa Thông. Mình rất thích hương vị nem ở đây",
      avatar: "/images/person2.jpeg",
      stars: 5,
    },
    {
      name: "Anh Toàn",
      role: "Giáo viên Tiếng Anh",
      content:
        "Tôi ăn nhiều vị nem khác nhau thì tôi thấy vị nem chua của Nem chua Hoa Thông là ngon nhất",
      avatar: "/images/person3.webp",
      stars: 5,
    },
  ];

  const renderStars = (count: number) => {
    return [...Array(count)].map((_, i) => (
      <span key={i} className="px-1 text-warning">
        <FaRegStar />
      </span>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Nem Chua Hoa Thông</title>
      </Helmet>
      <HeroSlider />
      <section className="py-8 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-normal mb-4" style={{ color: "#eeaa11" }}>
                Nem Chua xứ Thanh
              </h2>

              <p className="fw-light mb-4 title-main">
                Nem chua Thanh Hóa là món ăn truyền thống đặc sản của Thanh Hóa,
                được làm từ thịt lợn tươi, tỉ mỉ ướp gia vị và phơi khô. Nem
                chua Thanh Hóa có vị chua ngọt, thơm ngon, khi ăn kèm với rau
                sống, ớt, chanh, tỏi sẽ tạo nên hương vị tuyệt vời. Món ăn này
                được ưa chuộng và phổ biến ở khắp các tỉnh miền Trung và Bắc
                Trung Bộ của Việt Nam.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/nemchua-HT.jpg"
                alt="Nem chua Thanh Hóa"
                className="img-fluid rounded-4 shadow-lg"
                style={{ height: "30rem", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-5"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="container py-lg-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">
              Sản phẩm nổi bật của Hoa Thông
            </h2>
            <div
              className="mx-auto mt-3"
              style={{
                width: "80px",
                height: "4px",
                backgroundColor: "#eeaa11",
              }}
            ></div>
          </div>

          <div className="row g-4 g-xl-5 justify-content-center">
            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nemchua2-HT.jpg"
                  alt="Nem Chua"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                  style={{ maxHeight: "24rem" }}
                />
                <p className="text-white fw-medium fs-5">Nem Chua</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-thinh-HT.jpg"
                  alt="Nem Thính"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Thính</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-nuong-HT.jpg"
                  alt="Nem Nướng"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Nướng</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3 text-center">
              <div className="product-item">
                <img
                  src="/images/nem-gan-HT.jpg"
                  alt="Nem Gân"
                  className="img-fluid rounded-4 shadow-lg mb-3 hover-scale"
                />
                <p className="text-white fw-medium fs-5">Nem Gân</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: "#f5f7f5" }}>
        <div className="container">
          <div className="text-start mb-5">
            <h2 className="display-6 fw-bold lh-base" style={{ color: "#eeaa11" }}>
              Khách hàng nói gì về
              <br />
              <span style={{ color: "#eeaa11" }}>chúng tôi, những</span>
              <br />
              <span style={{ color: "#eeaa11" }}>feedback chân thật nhất</span>
              <br />
              về Nem chua Hoa Thông
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {reviews.map((review, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100 position-relative overflow-hidden">
                  <div className="mb-4">
                    <p className="text-muted fst-italic">"{review.content}"</p>
                  </div>

                  {/* Ngôi sao */}
                  <div className="mb-4">{renderStars(review.stars)}</div>

                  {/* Avatar + tên */}
                  <div className="d-flex align-items-center">
                    <img
                      src={review.avatar || "https://via.placeholder.com/60"}
                      alt={review.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold" style={{ color: "#eeaa11" }}>
                        {review.name}
                      </h6>
                      <small className="text-muted">{review.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
