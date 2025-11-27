import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        <i className="bi bi-check-circle-fill display-1 mb-4" style={{ color: "#eeaa11" }}></i>
        <h1 className="display-5" style={{ color: "#eeaa11" }}>Gửi liên hệ thành công!</h1>
        <p className="lead">
          Chúng tôi sẽ liên hệ với bạn trong vòng 1–2 giờ làm việc.
        </p>
        <Link
          to="/"
          className="btn btn-lg mt-3"
          style={{ borderColor: "#eeaa11", color: "#eeaa11" }}
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}
