import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Trang không tồn tại</title>
      </Helmet>
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <h1 className="display-1 fw-bold" style={{ color: "#eeaa11" }}>404</h1>
          <h2 className="display-5 mb-4">Oops! Trang không tồn tại</h2>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link
              to="/"
              className="btn btn-lg px-5"
              style={{ borderColor: "#eeaa11", color: "#eeaa11" }}
            >
              Về trang chủ
            </Link>
            <Link
              to="/san-pham"
              className="btn btn-lg px-5"
              style={{ borderColor: "#eeaa11", color: "#eeaa11" }}
            >
              Xem sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
