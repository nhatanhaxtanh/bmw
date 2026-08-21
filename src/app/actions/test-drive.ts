"use server";

import { cars } from "@/data/cars";
import type { TestDriveState } from "@/lib/test-drive-state";

const phoneRe = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitTestDrive(
  _prev: TestDriveState,
  formData: FormData,
): Promise<TestDriveState> {
  const name = String(formData.get("name") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const phone = phoneRaw.replace(/[\s.\-()]/g, "");
  const email = String(formData.get("email") ?? "").trim();
  const car = String(formData.get("car") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const branch = String(formData.get("branch") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  const errors: TestDriveState["errors"] = {};

  if (name.length < 2) errors.name = "Vui lòng nhập họ tên của quý khách.";
  if (!phoneRe.test(phone))
    errors.phone = "Số điện thoại không hợp lệ (ví dụ: 0901234567).";
  if (email && !emailRe.test(email)) errors.email = "Email không hợp lệ.";
  if (!car || !cars.some((c) => c.slug === car))
    errors.car = "Vui lòng chọn dòng xe muốn trải nghiệm.";
  if (date) {
    const picked = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(picked.getTime()) || picked < today)
      errors.date = "Vui lòng chọn ngày từ hôm nay trở đi.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      message: "Vui lòng kiểm tra lại thông tin bên dưới.",
      errors,
    };
  }

  const model = cars.find((c) => c.slug === car);

  // TODO: nối vào CRM / email / Google Sheet của đại lý.
  // Hiện tại ghi log phía server để đội kinh doanh có thể theo dõi.
  console.info("[test-drive] yêu cầu mới", {
    name,
    phone,
    email: email || null,
    car: model?.name ?? car,
    date: date || null,
    branch: branch || null,
    note: note || null,
    receivedAt: new Date().toISOString(),
  });

  // Mô phỏng độ trễ gọi API để trạng thái pending hiển thị rõ.
  await new Promise((r) => setTimeout(r, 600));

  return {
    ok: true,
    message: `Cảm ơn ${name}! Yêu cầu lái thử ${model?.name ?? ""} đã được ghi nhận. Tư vấn viên sẽ liên hệ trong vòng 30 phút.`,
    errors: {},
  };
}
