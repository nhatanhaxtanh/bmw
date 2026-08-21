"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useFormStatus } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { submitTestDrive } from "@/app/actions/test-drive";
import { initialTestDriveState } from "@/lib/test-drive-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cars } from "@/data/cars";
import { cn } from "@/lib/utils";

const branches = [
  "Showroom Quận 7 (Nguyễn Văn Linh)",
  "Showroom Quận 2 (Mai Chí Thọ)",
  "Lái thử tận nơi theo yêu cầu",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full rounded-full text-[15px]"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" /> Đang gửi yêu cầu…
        </>
      ) : (
        <>
          <Send className="size-4" /> Đăng ký lái thử miễn phí
        </>
      )}
    </Button>
  );
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-xs text-destructive"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

export function TestDriveForm({
  defaultCar,
  className,
  compact = false,
}: {
  defaultCar?: string;
  className?: string;
  compact?: boolean;
}) {
  const [state, formAction] = useActionState(
    submitTestDrive,
    initialTestDriveState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (state.ok) {
      toast.success("Đăng ký thành công!", { description: state.message });
      formRef.current?.reset();
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  if (state.ok) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/20 bg-accent/60 p-10 text-center",
          className,
        )}
      >
        <span className="grid size-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-heading text-xl font-semibold">
          Đã nhận được yêu cầu của quý khách
        </h3>
        <p className="max-w-md text-sm text-muted-foreground">{state.message}</p>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => window.location.reload()}
        >
          Gửi yêu cầu khác
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div className={cn("grid gap-5", compact ? "" : "sm:grid-cols-2")}>
        <div className="space-y-2">
          <Label htmlFor={`${uid}-name`}>
            Họ và tên <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${uid}-name`}
            name="name"
            placeholder="Nguyễn Văn A"
            autoComplete="name"
            aria-invalid={!!state.errors.name}
            className="h-12 rounded-lg"
          />
          <FieldError message={state.errors.name} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${uid}-phone`}>
            Số điện thoại <span className="text-destructive">*</span>
          </Label>
          <Input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="0901 234 567"
            autoComplete="tel"
            aria-invalid={!!state.errors.phone}
            className="h-12 rounded-lg"
          />
          <FieldError message={state.errors.phone} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${uid}-email`}>Email</Label>
          <Input
            id={`${uid}-email`}
            name="email"
            type="email"
            placeholder="email@congty.vn"
            autoComplete="email"
            aria-invalid={!!state.errors.email}
            className="h-12 rounded-lg"
          />
          <FieldError message={state.errors.email} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${uid}-date`}>Ngày mong muốn</Label>
          <Input
            id={`${uid}-date`}
            name="date"
            type="date"
            min={today}
            aria-invalid={!!state.errors.date}
            className="h-12 rounded-lg"
          />
          <FieldError message={state.errors.date} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${uid}-car`}>
            Dòng xe quan tâm <span className="text-destructive">*</span>
          </Label>
          <Select name="car" defaultValue={defaultCar}>
            <SelectTrigger
              id={`${uid}-car`}
              aria-invalid={!!state.errors.car}
              className="!h-12 w-full rounded-lg"
            >
              <SelectValue placeholder="Chọn dòng xe" />
            </SelectTrigger>
            <SelectContent>
              {cars.map((car) => (
                <SelectItem key={car.slug} value={car.slug}>
                  {car.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError message={state.errors.car} />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${uid}-branch`}>Địa điểm lái thử</Label>
          <Select name="branch" defaultValue={branches[0]}>
            <SelectTrigger
              id={`${uid}-branch`}
              className="!h-12 w-full rounded-lg"
            >
              <SelectValue placeholder="Chọn địa điểm" />
            </SelectTrigger>
            <SelectContent>
              {branches.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${uid}-note`}>Ghi chú thêm</Label>
        <Textarea
          id={`${uid}-note`}
          name="note"
          rows={3}
          placeholder="Ví dụ: quan tâm bản M Sport màu trắng, muốn lái thử buổi sáng cuối tuần…"
          className="resize-none rounded-lg"
        />
      </div>

      <SubmitButton />

      <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-primary" />
        Thông tin của quý khách được bảo mật tuyệt đối và chỉ sử dụng cho mục
        đích tư vấn sản phẩm, dịch vụ của đại lý.
      </p>
    </form>
  );
}
