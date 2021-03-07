export enum MotorbikeType {
  UP_TO_50_CC,
  ABOVE_50_CC
}

export function getMotorbikeTypeLabel(type: MotorbikeType): string {
  if (type === MotorbikeType.UP_TO_50_CC) {
    return "Xe Mô tô 2 bánh dung tích từ 50cc trở xuống";
  }

  if (type === MotorbikeType.ABOVE_50_CC) {
    return "Xe Mô tô 2 bánh dung tích trên 50cc";
  }

  return "";
}
