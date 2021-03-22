<router>
{
  name: "quyen-loi_xe-may"
}
</router>

<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="content">
          <p>Tham gia Gói bảo hiểm xe máy, khách hàng sẽ được bồi thường:</p>
          <ul>
            <li>
              Bảo hiểm trách nhiệm dân sự: Bồi thường cho bên thứ ba những thiệt
              hại về người và tài sản với mức tối đa như sau:
              <ul>
                <li>Về người: tối đa 100.000.000 VNĐ / người / vụ tai nạn</li>
                <li>Về tài sản: tối đa 50.000.000 VNĐ / vụ tai nạn.</li>
              </ul>
            </li>
            <li>
              Bảo hiểm tai nạn người ngồi trên xe: 10.000.000 VNĐ/Người, số
              người được bảo hiểm là 2 người
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "QuyenLoiTaiNan",

  layout: "calculator"
};
</script>
