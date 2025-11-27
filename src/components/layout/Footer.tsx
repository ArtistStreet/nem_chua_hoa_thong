export default function Footer() {
  return (
    <footer
      className="text-dark pt-5 pb-3"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Cột 1: Logo + Giới thiệu ngắn */}
          <div className="col-lg-4 text-center text-lg-start">
            <img
              src="/images/logo.png"
              alt="nem chua Hoa Thông"
              style={{ height: "60px" }}
              className="img-fluid d-inline-block mb-4"
            />

            <p className=" small">
              Nem Hoa Thông – Đặc sản nem chua Thanh Hóa chính gốc.
              <br />
              Được làm 100% thủ công, lên men tự nhiên, không chất bảo quản.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div className="col-lg-4">
            <h5 className=" fw-bold mb-3">Liên hệ với chúng tôi</h5>
            <p className=" small mb-2">
              <i className="bi bi-geo-alt-fill"></i>
              Cơ sở 1: Số 13 Phố Ngọc Giao, Phường Hạc Thành, Tỉnh Thanh Hóa.
              <br />
              Cơ sở 2: Lô 17– Nơ 9 – MB2125 đường Lê Duy Tổng, Phường Hạc Thành
              ( đối diện Sunspost), Tỉnh Thanh Hóa. <br />
              Cơ sở 3: Số 73D Đào Duy Từ, Phường Hạc Thành, Tỉnh Thanh Hóa.
              <br /> Cơ sở 4: 68 Đại Cồ Việt, Phường Hai Bà Trưng, Thành phố Hà
              Nội.
              <br /> Cơ sở 5: Số nhà 105 Hán Thuyên, Phường Hạc Thành, Tỉnh
              Thanh Hóa.
            </p>
            <p className=" small mb-2">
              <i className="bi bi-telephone-fill"></i>
              Hotline: 0982.950.699 - 0947.651.111
            </p>
          </div>

          {/* Cột 3: Thông tin liên hệ + Bản đồ */}
          <div className="col-lg-4">
            {/* Bản đồ Google nhúng */}
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
              <iframe
                title="Bản đồ nem chua Hoa Thông"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.456789012345!2d105.776543575!3d19.79876598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f9a7f2b8c1d5%3A0x9e0f1a2b3c4d5e6f!2sNem%20Thanh%20-%20Quan%20S%C6%A1n%2C%20Ph%C6%B0%E1%BB%9Dng%20An%20H%C6%B0ng%2C%20TP.%20Thanh%20H%C3%B3a!5e0!3m2!1svi!2s!4v1733000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
