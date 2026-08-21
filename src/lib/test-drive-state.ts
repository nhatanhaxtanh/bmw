/**
 * Kiểu dữ liệu và trạng thái khởi tạo cho form lái thử.
 * Tách khỏi file "use server" vì module server action chỉ được phép
 * export các hàm async.
 */
export type TestDriveState = {
  ok: boolean;
  message: string;
  errors: Partial<Record<"name" | "phone" | "email" | "car" | "date", string>>;
};

export const initialTestDriveState: TestDriveState = {
  ok: false,
  message: "",
  errors: {},
};
