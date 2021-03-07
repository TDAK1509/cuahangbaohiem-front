import {
  MotorbikeType,
  getMotorbikeTypeLabel
} from "@/controller/motorbike-insurance/motorbike-insurance";

describe("controller/motorbike-insurance", () => {
  describe("getMotorbikeTypeLabel()", () => {
    it("returns 'Xe Mô tô 2 bánh dung tích từ 50cc trở xuống' when arg is UP_TO_50_CC", () => {
      const result = getMotorbikeTypeLabel(MotorbikeType.UP_TO_50_CC);
      expect(result).toBe("Xe Mô tô 2 bánh dung tích từ 50cc trở xuống");
    });

    it("returns 'Xe Mô tô 2 bánh dung tích trên 50cc' when arg is UP_TO_50_CC", () => {
      const result = getMotorbikeTypeLabel(MotorbikeType.ABOVE_50_CC);
      expect(result).toBe("Xe Mô tô 2 bánh dung tích trên 50cc");
    });
  });
});
