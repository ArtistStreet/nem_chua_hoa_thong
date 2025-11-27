// src/pages/Home/HomePage.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import MainBanner from "../components/MainBanner";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Giới thiệu – nem chua Hoa Thông</title>
      </Helmet>
      <MainBanner mainTitle="Giới thiệu về chúng tôi" subTitle="Giới thiệu" />

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Cột trái - Text */}
            <div className="col-lg-6">
              <h2
                className="fw-bold mb-4 position-relative d-inline-block"
                style={{ color: "#eeaa11" }}
              >
                Giới thiệu về chúng tôi
              </h2>

              <p className="lead text-muted mb-4">
                nem chua Hoa Thông là thương hiệu nem chua truyền thống được làm
                hoàn toàn thủ công tại Thanh Hóa, do chính chị Hoa Thông – một
                người con xứ Thanh sinh ra và lớn lên cùng hương vị nem chua gia
                truyền – trực tiếp làm chủ và chế biến.
              </p>

              <h4 className="fw-bold mt-5 mb-3" style={{ color: "#eeaa11" }}>
                Lịch sử ra đời thương hiệu nem chua Hoa Thông
              </h4>
              <p className="text-muted">
                LỊCH SỬ RA ĐỜI THƯƠNG HIỆU NEM CHUA HOA THÔNG "Một chiếc nem nhỏ
                – cả một hành trình dài của tình yêu và niềm tự hào xứ Thanh"
                Năm 2015, chị Hoa Thông – khi ấy vẫn đang làm nhân viên văn
                phòng ở Hà Nội – nhận được tin mẹ ở quê bị ốm nặng. Chị xin nghỉ
                phép về quê chăm mẹ. Trong những ngày bên giường bệnh, mẹ cứ
                nhắc mãi: “Con ơi, mẹ thèm nem chua nhà mình quá… nhưng giờ mẹ
                yếu không gói được nữa.” Câu nói ấy như gieo một hạt giống trong
                lòng Chi Lê. Chị xin nghỉ việc luôn, quyết định về quê học lại
                công thức nem chua gia truyền từ mẹ và bà ngoại – công thức đã
                có từ thời cụ cố, chỉ truyền cho con gái trưởng trong nhà. Ban
                đầu chị chỉ gói vài chục chiếc để biếu người thân, bạn bè cũ. Ai
                ăn cũng khen: “Nem này đúng vị ngày xưa, chớ không phải nem công
                nghiệp đâu! Sao mày không làm bán đi?” Thế là năm 2016, lò nem
                đầu tiên ra đời trong chính căn bếp cũ của gia đình ở phường
                Đông Sơn, TP. Thanh Hóa, với vỏn vẹn 3 người: chị Lê, mẹ và em
                trai. Ngày ấy mỗi ngày chỉ gói được 15–20kg thịt, bán cho bà con
                trong xóm và ship đi Hà Nội bằng xe khách. Đến năm 2018, một
                khách hàng ở Sài Gòn ăn thử rồi đặt luôn 300kg làm quà biếu Tết.
                Đơn hàng lớn đầu tiên ấy khiến cả nhà thức trắng 5 ngày 5 đêm để
                gói, nhưng cũng từ đó cái tên “Nem chua Hoa Thông" bắt đầu được
                nhắc đến nhiều hơn. Năm 2020, chị quyết định đặt tên chính thức
                thương hiệu là nem chua Hoa Thông Lê – lấy nguyên tên khai sinh
                của mình, như một lời hứa sẽ giữ trọn cái tâm và cái tình của
                người làm nem xứ Thanh.
              </p>
            </div>

            <div className="col-lg-6">
              <div
                className="text-white rounded-4 p-4 position-relative"
                style={{ backgroundColor: "#eeaa11" }}
              >
                {/* Viền trang trí 4 góc */}
                <div
                  className="position-absolute top-0 start-0 border-top border-start border-white border-5 rounded-top"
                  style={{ width: "50px", height: "50px" }}
                ></div>
                <div
                  className="position-absolute top-0 end-0 border-top border-end border-white border-5 rounded-top"
                  style={{ width: "50px", height: "50px" }}
                ></div>
                <div
                  className="position-absolute bottom-0 start-0 border-bottom border-start border-white border-5 rounded-bottom"
                  style={{ width: "50px", height: "50px" }}
                ></div>
                <div
                  className="position-absolute bottom-0 end-0 border-bottom border-end border-white border-5 rounded-bottom"
                  style={{ width: "50px", height: "50px" }}
                ></div>
                <div className="p-4 pt-7 text-center">
                  <img
                    src="/images/logo-HT.jpg"
                    alt="Hoa Thông"
                    className="rounded-circle shadow mb-4"
                    style={{ width: "20%", height: "20%", objectFit: "cover" }}
                  />
                  <h5 className="fw-bold mb-1">Kính gửi Quý khách hàng</h5>
                  <p className="small lh-lg">
                    Lời đầu tiên, khi nhắc đến nem chua Hoa Thông, người ta
                    thường nghĩ ngay đến hương vị đặc trưng khó quên – chua nhẹ,
                    dai giòn và thơm quyện vị tỏi ớt truyền thống. Từng chiếc
                    nem được làm thủ công từ thịt lợn tươi chọn lọc, lên men tự
                    nhiên theo bí quyết gia truyền, tạo nên nét tinh túy của ẩm
                    thực xứ Thanh. Không chỉ là món ăn chơi quen thuộc trong mỗi
                    dịp tụ họp, nem chua Hoa Thông còn trở thành đặc sản được
                    nhiều người lựa chọn làm quà biếu bởi chất lượng ổn định và
                    hương vị chuẩn mực qua năm tháng.
                    <br />
                    <br />
                    Mong rằng mỗi lần mở gói nem là một lần anh chị mỉm cười nhớ
                    về những điều thật giản dị mà thật quý. Trân trọng & yêu
                    thương gửi đến anh chị.
                  </p>
                </div>

                <p
                  className="text-end mt-3 mb-0 fw-bold"
                  style={{ color: "#eeaa11" }}
                >
                  Hoa Thông
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-start g-5">
            <div className="col-lg-7">
              <p className="lead text-muted">
                Và thế là thương hiệu nem chua Hoa Thông đã chính thức ra đời,
                với khát vọng gìn giữ trọn vẹn và lan tỏa hương vị nem chua
                Thanh Hóa chuẩn vị gia truyền đến mọi miền đất nước, thậm chí là
                ra thế giới. Với tình yêu mãnh liệt dành cho món ăn quê hương,
                cùng cái “tâm” và cái “tình” của người con xứ Thanh, Phương Chi
                Lê không chỉ muốn giữ lại công thức cổ của mẹ, của bà, mà còn
                mong một ngày thật gần đây, người người, nhà nhà, từ Bắc vào
                Nam, từ Việt kiều xa xứ đến bạn bè quốc tế, đều được một lần cắn
                miếng nem chua chính gốc, để cảm nhận được cái chua dịu, cái cay
                tê, cái thơm nồng và cái giòn sần sật mà chỉ Thanh Hóa mới có.
              </p>

              <h3 className="fw-bold mt-5 mb-4" style={{ color: "#eeaa11" }}>
                Tầm nhìn
              </h3>
              <p className="text-muted mb-4">
                Bằng tất cả niềm tự hào của những người con xứ Thanh, chúng tôi
                nâng niu từng mẻ nem như gìn giữ một phần hồn quê trong từng thớ
                thịt. Với cái TÂM trọn vẹn dành cho nghề truyền thống và cái TẦM
                hướng đến việc đưa đặc sản quê hương vươn xa, nem chua Hoa Thông
                không ngừng nỗ lực để trở thành thương hiệu dẫn đầu trong dòng
                nem chua Thanh Hóa chuẩn vị gia truyền – sạch, ngon và đậm đà
                bản sắc. Chúng tôi tin rằng nem chua không chỉ là một món ăn, mà
                còn là câu chuyện về sự khéo léo, sự chân thành và niềm tự hào
                của người Thanh Hóa. Vì thế, mỗi chiếc nem mang tên Hoa Thông
                đều được tạo ra với mong muốn trở thành món quà chứa đựng tình
                quê, trở thành niềm vui nhỏ bé trong mỗi bữa ăn của người Việt,
                và là hương vị đưa bạn bè quốc tế hiểu thêm về ẩm thực Việt Nam.
                Hành trình phía trước còn dài, nhưng có một mục tiêu không bao
                giờ thay đổi: xây dựng nem chua Hoa Thông trở thành thương hiệu
                được yêu thích bậc nhất Việt Nam – xuất hiện trong bữa cơm gia
                đình, trong những hộp quà biếu trang trọng và trong ký ức ẩm
                thực của hàng triệu người Việt. Với niềm tin, tình yêu nghề và
                sự ủng hộ của mọi người, chúng tôi tin rằng hành trình ấy sẽ
                thành hiện thực. Hoa Thông – giữ trọn vị quê, lan tỏa niềm tự
                hào Việt. ❤️
              </p>

              <p className="text-muted mb-3">Với tiêu chí:</p>
              <ul className="list-unstyled text-muted ps-4">
                <li className="mb-2">• Nguyên liệu sạch, nguồn gốc rõ ràng</li>
                <li className="mb-2">
                  • Quy trình sản xuất tuân thủ 5S của Nhật Bản
                </li>
                <li className="mb-2">
                  • Hương vị truyền thống chuẩn vị xứ Thanh
                </li>
                <li className="mb-2">
                  • <strong>KHÔNG</strong> chất bảo quản, phụ gia, tạo màu
                </li>
                <li className="mb-2">• Tôn vinh ẩm thực Việt</li>
              </ul>

              <h4 className="fw-bold mt-5" style={{ color: "#eeaa11" }}>
                Sứ mệnh của thương hiệu nem chua Hoa Thông
              </h4>
              <p className="text-muted">
                Mang đến cho khách hàng những sản phẩm nem chua Thanh Hóa an
                toàn, chất lượng cao nhất, giữ trọn hương vị truyền thống và góp
                phần quảng bá đặc sản quê hương ra toàn quốc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
